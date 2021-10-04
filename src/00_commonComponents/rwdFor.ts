import { useMediaQuery } from "@material-ui/core";
/**
 * @param name 尺寸代稱
 * @example xxs, xs, sm, md, lg, xl, xxl
 */
const breakpoints = {
    //============ ┌→ mobile
    xxs: 0,
    xs: 380,
    sm: 576,
    //==  tablet ←┐└→ mobile
    md: 768,
    //==  tablet ←┘┌→ desktop
    lg: 992,
    xl: 1280,
    xxl: 1536
    //============ └→ desktop
} as { [name: string]: number };
//================================================================
//* 將尺寸代稱轉換 px */
/**
 * @param sizeName 尺寸代稱
 * @returns 該尺寸區間的下界
 */
const getLowerBound = (sizeName: string) => {
    //前一階段已排除 'xxs' 的可能
    const lowerBound = breakpoints[sizeName];
    if (lowerBound === undefined) {
        throw new Error("不要瞎掰好嗎，本 RWD 系統沒有 " + sizeName + " 這種尺寸。");
    }
    return lowerBound;
};
/**
 * @param sizeName 尺寸代稱
 * @returns 該尺寸區間的上界
 */
const getUpperBound = (sizeName: string) => {
    //前一階段已排除 'xxl' 的可能
    sizeName = nextBreakpoint(sizeName);
    const UpperBound = breakpoints[sizeName];
    if (UpperBound === undefined) noSizeError(sizeName);
    return UpperBound - 0.02;
    //因為 media queries 4 的不等號寫法尚未被普遍支援
    //在此採用的 walkaround 是將上界下扣 0.02px
    //原因有二：(1)縮小漏網的空隙 (2)Safari 的概算 bug
};
const nextBreakpoint = (sizeName: string) => {
    const keys = Object.keys(breakpoints);
    let nextIndex = keys.indexOf(sizeName);
    if (nextIndex === -1) noSizeError(sizeName);
    return keys[nextIndex + 1];
};
//================================================================
//* 錯誤訊息罐頭 */
const noSizeError: (sizeName: string) => Error = (sizeName) => {
    throw new Error("不要瞎掰好嗎，本 RWD 系統沒有 " + sizeName + " 這種尺寸。");
};
const allSizeWarn = "全尺寸的範圍沒有使用 RWD 的必要。";
//================================================================
//* 使用 media query */
const rwdUpFrom = (sizeName?: string) => {
    if (sizeName) {
        const size = getLowerBound(sizeName);
        return "(min-width: " + size + "px)";
    } else {
        console.warn(allSizeWarn);
        return "";
    }
}
const rwdDownFrom = (sizeName?: string) => {
    if (sizeName) {
        const size = getUpperBound(sizeName);
        return "(max-width: " + size + "px)";
    } else {
        console.warn(allSizeWarn);
        return "";
    }
}
const rwdBetween = (from: string, to: string) => {
    const sizeFrom = rwdUpFrom(from);
    const sizeTo = rwdDownFrom(to);
    const condition1 = "(min-width: " + sizeFrom + "px)";
    const condition2 = "and (max-width: " + sizeTo + "px)";
    return condition1 + condition2;
}
//================================================================
//* API */
interface IRwdFunc {
    (
        from?: string | undefined,
        to?: string | undefined
    ): string;
}
const rwdFor: IRwdFunc = (from?, to?) => {
    if (from === undefined && to === undefined) {
        throw new Error("請務必使用 from 或 to 輸入尺寸範圍。");
    } else if (from === undefined || from === "xxs") {
        return rwdDownFrom(to);
    } else if (to === undefined || to === "xxl") {
        return rwdUpFrom(from);
    } else {
        return rwdBetween(from, to);
    }
};
export default rwdFor;
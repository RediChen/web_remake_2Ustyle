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
//* 合法尺寸檢驗器 */
const notValid = (name: string) =>
    (Object.keys(breakpoints).indexOf(name) === -1) ? true : false;
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
    throw new Error("不要瞎掰好嗎！本 RWD 系統沒有 " + sizeName + " 這種尺寸。");
};
const allSizeWarn = "全尺寸的範圍沒有使用 RWD 的必要。";
//================================================================
//* API */
/**
 * 輸入所需範圍的尺寸代號，會生成 useMediaQuery 用的參數
 * @param from 最小的尺寸代號
 * @example xxs, xs, sm, md, lg, xl, xxl
 * @returns useMediaQuery 用的參數 : string
 */
const rwdFrom = (from: string) => {
    if (notValid(from)) {
        noSizeError(from);
        return "";
    } else if (from === "xxs") {
        console.warn(allSizeWarn);
        return "";
    } else {
        const size = getLowerBound(from);
        return "(min-width: " + size + "px)";
    }
}
/**
 * 輸入所需範圍的尺寸代號，會生成 useMediaQuery 用的參數
 * @param to 最大的尺寸代號
 * @example xxs, xs, sm, md, lg, xl, xxl
 * @returns useMediaQuery 用的參數 : string
 */
const rwdTo = (to: string) => {
    if (notValid(to)) {
        noSizeError(to);
        return "";
    } else if (to === "xxl") {
        console.warn(allSizeWarn);
        return "";
    } else {
        const size = getUpperBound(to);
        return "(max-width: " + size + "px)";
    }
}
/**
 * 輸入所需範圍的尺寸代號，會生成 useMediaQuery 用的參數
 * @param from 最小的尺寸代號
 * @param to 最大的尺寸代號
 * @example xxs, xs, sm, md, lg, xl, xxl
 * @returns useMediaQuery 用的參數 : string
 */
const rwdBetween = (from: string, to: string) => {
    if (notValid(from) && notValid(to)) {
        throw new Error("請務必使用本 RWD 系統的尺寸代號。");
    } else if (notValid(from) || from === "xxs") {
        return rwdTo(to);
    } else if (notValid(to) || to === "xxl") {
        return rwdFrom(from);
    } else {
        const sizeFrom = rwdFrom(from);
        const sizeTo = rwdTo(to);
        const condition1 = "(min-width: " + sizeFrom + "px)";
        const condition2 = "and (max-width: " + sizeTo + "px)";
        return condition1 + condition2;
    }
}
//================================================================
export { rwdTo, rwdFrom, rwdBetween };
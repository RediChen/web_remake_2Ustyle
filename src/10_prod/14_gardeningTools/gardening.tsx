import cover from './cover.jpg';
const GardeningTool = () => {
    return (
        <div id="prod-tool">
            <div className="breadcrumb">首頁 <span>&gt; 配件</span></div>
            <img src={cover} alt="工具小幫手" />
            <h1>這裡是園藝用具的頁面～</h1>
            <h2>園藝用途工具與資材，不可或缺的好幫手</h2>
        </div>
    );
}
export default GardeningTool;
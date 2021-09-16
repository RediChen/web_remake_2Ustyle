import cover from './cover.jpg';
const Pot = () => {
    return (
        <div id="prod-pot">
            <div className="breadcrumb">首頁 <span>&gt; 盆栽</span></div>
            <img src={cover} alt="來看看盆栽" />
            <h1>這裡是盆栽的頁面～</h1>
            <h2>準備要放很多的盆栽。</h2>
        </div>
    );
}
export default Pot;

// 函数参数
let singer = {singer:'张学友',song:'李香兰'};

// 函数
function sing(obj){
    return obj.singer+'：'+obj.song
}
let Com = (
    <div>
        {/* 函数 */}
        <p>{ sing(singer) }</p>
    </div>
)

let el = document.getElementById('root');
console.log(singer,Com,el)
ReactDOM.render(Com,el)
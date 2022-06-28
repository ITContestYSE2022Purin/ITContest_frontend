// ボタンを取得（
const button = document.querySelector("#button");
// ボタンがクリックされたときに実行する関数をセット
// () => { }はアロー関数、正直おまじないと思ってくれていい
button.onclick = () => {
    console.log("hello id");
};

// すべてのボタンを取得
// buttonsはbuttonの配列になる
const buttons = document.querySelectorAll(".button");
// foreachですべてのボタンに関数をセット
buttons.forEach((button) => {
    // 上と同じ
    button.onclick = () => {
        console.log("hello class");
    };
});

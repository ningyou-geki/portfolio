console.log("main.js!!");
///ボタンタグを取得
const btn =document.querySelector('btn');
//クリックイベント
btn.addEventListener('click',()=>{
    //クリックされた時の処理　クラスを追加/削除する
    ///要素.classList.toggle('クラス名') 要素＝body
document.body.classList.toggle('dark-mode');

///もし（ボタンのテキストが「ダークモードにする」になっている
if(btn.textContent==='ダークモードにする'){
//ボタンのテキスト=ライトモードにするに変更;
btn.textContent='ライトモードにする';
//}}そうでないなら（「ライトモードにする」と表示されているなら）{
}else{
//ボタンのテキスト＝「ダークモードにする」に変更；}});
btn.textContent='ダークモードにする';
}
});

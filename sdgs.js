'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// クリックイベント設定-----------------------------------------
// -検索ボタン-
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', OnSearchClick);

// -登録ボタン-
const resisterButton = document.getElementById("registerbutton");
resisterButton.addEventListener('click', OnResisterClick);

// -目標アイコン-
const goalboxicon = document.getElementsByClassName("goalbox");
for (let i = 0; i < sdGoalsAll.length; i++) {                   // 全ての目標アイコンに設定する
    goalboxicon[i].addEventListener('click', function () {
        goalButtonClick(i)
    })
} // ------------------------------------------------------------


// データベース操作処理関数 ----------------------------------------------------
function databaseOperation(actionNo) {
    // DOM取得
    let resultDisp = document.getElementsByClassName("resultDisp");
    let contentList = document.getElementsByClassName("contentList");

    console.log(contentList);
    console.log(contentList.length);

    // 結果一覧の表示内容を初期化
    if (contentList.length !== 0) {
        for (let i = 0; i < contentList.length + i; i++) {
            let item = resultDisp[0].lastChild
            console.log(item);
            resultDisp[0].removeChild(item);
        }
    }
    // 結果一覧に出力
    for (let i = 0; i < sdGoalsAll[actionNo].length; i++) {     // 目標Noの登録数だけループ処理
        let newLi = document.createElement("li");               // li要素を作成
        newLi.className = "contentList"                         // li要素のclass命名
        newLi.innerText = sdGoalsAll[actionNo][i];              // li要素テキストに目標Noのi個目要素を格納
        resultDisp[0].appendChild(newLi);                       // li要素を結果一覧ブロックへ出力
    }

    let resultTitle = document.getElementsByClassName("resultTitle");
    console.log(resultTitle[0]);
    resultTitle[0].innerText = `目標${actionNo+1}:結果一覧`;

} // -------------------------------------------------------------------------------


// フリーワード検索処理 ---------------------------------------------------------------------
function OnSearchClick() {
    let searchWord = document.getElementById("searchBox");      // DOM取得
    let searchResult = [];                                      // 結果格納用変数初期化
    for (let content of sdGoalsAll) {                           // 全登録内容（目標18個分）でループ処理
        searchResult.push(content.filter(function (elem) {      // 各目標内の内容をfilterメソッド×matchメソッドで検索入力値で抽出
            return elem.match(searchWord.value)                 // elemも配列なので元の形である二次元配列としてresult出力
        }));
    }

    let slimResult = {};                                        // 結果一覧表示用に加工したデータを格納するobj変数初期化
    for (let i = 0; i < searchResult.length; i++) {             // 検索にヒットした要素数分だけループ処理
        if (searchResult[i].length !== 0) {                     // 空配列でなければ・・・
            slimResult[i + 1] = searchResult[i];                // obj変数へ格納（key:目標No value：取り組み内容）
        }
    }
    console.log(slimResult);
    // DOM取得
    let resultDisp = document.getElementsByClassName("resultDisp");
    let contentList = document.getElementsByClassName("contentList");
    console.log(contentList);
    // 結果一覧の表示内容を初期化
    if (contentList.length !== 0) {
        for (let i = 0; i < contentList.length + i; i++) {
            let item = resultDisp[0].lastChild
            console.log(item);
            resultDisp[0].removeChild(item);
        }
    }

    for (let key in slimResult) {                               // 検索でヒットした目標No数だけループ処理
        let newLi = document.createElement("li");               // li要素を作成
        newLi.className = "contentList"                         // li要素のclass命名
        newLi.innerText = `目標${key}: ${slimResult[key]}`;     // li要素テキストに目標Noと取り組み内容を格納
        resultDisp[0].appendChild(newLi);                       // li要素を結果一覧ブロックへ出力
    }

    let resultTitle = document.getElementsByClassName("resultTitle");
    console.log(resultTitle[0]);
    resultTitle[0].innerText = `フリーワード検索結果一覧`;

}; // --------------------------------------------------------------------------------------------------


// 目標アイコンクリック処理 ------------------------------------------------------------------------------
function goalButtonClick(actionNo) {
    databaseOperation(actionNo);                 // データベース操作関数呼び出し
}; // --------------------------------------------------------------------------------------------------


// 取り組み内容登録処理 ----------------------------------------------------------------------------------
function OnResisterClick() {
    let actionNo = document.getElementById("selectbox").value - 1;      // ドロップダウンリスト(目標Noの取得)
    // let actionNo = document.getElementById("selectbox");
    let resisterText = document.getElementById("resistertext");         // 取り組み登録内容(入力値の取得)
    sdGoalsAll[actionNo].push(resisterText.value);                      // 既存のデータベースに追加
    // sdGoalsAll[actionNo.value - 1].push(resisterText.value);

    databaseOperation(actionNo);                                        // データベース操作関数呼び出し
}; // --------------------------------------------------------------------------------------------------

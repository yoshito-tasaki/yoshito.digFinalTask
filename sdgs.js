'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// クリックイベント設定
const resisterButton = document.getElementById("registerbutton");
resisterButton.addEventListener('click', OnResisterClick);

const goalboxicon = document.getElementsByClassName("goalbox");
console.log(goalboxicon);
    // 全ての目標アイコンに設定する
for (let i =0; i < sdGoalsAll.length; i++){
    goalboxicon[i].addEventListener('click', function(){
        goalButtonClick(i)})
}

// データベース操作処理関数の宣言
function databaseOperation(actionNo){
    // DOM取得
    let resultDisp = document.getElementsByClassName("resultDisp");
    let contentList = document.getElementsByClassName("contentList");

    console.log(contentList);
    console.log(contentList.length);

    if (contentList.length !== 0) {
        for (let i = 0; i < contentList.length + i; i++) {
            let item = resultDisp[0].lastChild
            console.log(item);
            resultDisp[0].removeChild(item);
        }
    }
    for (let i = 0; i < sdGoalsAll[actionNo].length; i++) {
        let newLi = document.createElement("li");
        newLi.className = "contentList"
        newLi.innerText = sdGoalsAll[actionNo][i];
        resultDisp[0].appendChild(newLi);
    }
}

// フリーワード検索処理
function serachButtonClick() {
    let searchWord = document.getElementsByClassName("searchBox");
    let result = [];
    for (let content of sdGoalsAll) {
        // content.filter(value => value.match(/searchWord));
        console.log(content);
    }
    // for (let i = 0; i < sdGoalsAll.length; i++) {
    //     for (let content of sdGoalsAll[i]) {
    //         content
    //         console.log(content);
    //     }
    // }

    let resultContent = document.getElementsByClassName("resultDisp");
};

// 目標アイコンクリック処理
function goalButtonClick(actionNo) {
    databaseOperation(actionNo);
};

// 取り組み内容登録処理
function OnResisterClick() {
    // ドロップダウンリスト(目標Noの取得)
    let actionNo = document.getElementById("selectbox").value-1;
    // let actionNo = document.getElementById("selectbox");
    // 取り組み登録内容(入力値の取得)
    let resisterText = document.getElementById("resistertext");
    // 既存のデータベースに追加
    sdGoalsAll[actionNo].push(resisterText.value);
    // sdGoalsAll[actionNo.value - 1].push(resisterText.value);

    databaseOperation(actionNo);
};

function getActionContent() {
    let result = [];
    for (let content of sdGoals1) {
        console.log(content);
        return result.push(content);
    }
}


function search() {
    // sdGoalsAll.
}


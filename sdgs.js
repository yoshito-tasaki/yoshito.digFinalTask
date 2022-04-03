'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// クリックイベント設定
const resisterButton = document.getElementById("registerbutton");
resisterButton.addEventListener('click', OnResisterClick);

const goalboxicon = document.getElementsByClassName("goalbox");
goalboxicon.addEventListener('click', goalButtonClick);



// フリーワード検索処理
function serachButtonClick() {
    let searchWord = document.getElementsByClassName("searchBox");
    let result = [];
    for (let content of sdGoalsAll) {
        content.filter(value => value.match(/searchWord));
        console.log(content);
        }
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
function goalButtonClick() {
    // DOM取得
    let resultDisp = document.getElementsByClassName("resultDisp");
    let goalNo = 0;
    

    if (contentList.length !== 0) {
        for (let i = 0; i < contentList.length + 1; i++) {
            let item = resultDisp[0].lastChild
            console.log(item);
            resultDisp[0].removeChild(item);
        }
    }
    for (let i = 0; i < sdGoalsAll[actionNo.value - 1].length; i++) {
        let newLi = document.createElement("li");
        newLi.className = "contentList"
        newLi.innerText = sdGoalsAll[actionNo.value - 1][i];
        resultDisp[0].appendChild(newLi);
    }
};

// 取り組み内容登録処理
function OnResisterClick() {
    // ドロップダウンリスト(目標Noの取得)
    let actionNo = document.getElementById("selectbox");
    // 取り組み登録内容(入力値の取得)
    let resisterText = document.getElementById("resistertext");
    // 既存のデータベースに追加
    sdGoalsAll[actionNo.value - 1].push(resisterText.value);

    // DOM取得
    let resultDisp = document.getElementsByClassName("resultDisp");
    let contentList = document.getElementsByClassName("contentList");

    console.log(contentList);
    console.log(contentList.length);

    if (contentList.length !== 0) {
        for (let i = 0; i < contentList.length + 1; i++) {
            let item = resultDisp[0].lastChild
            console.log(item);
            resultDisp[0].removeChild(item);
        }
    }
    for (let i = 0; i < sdGoalsAll[actionNo.value - 1].length; i++) {
        let newLi = document.createElement("li");
        newLi.className = "contentList"
        newLi.innerText = sdGoalsAll[actionNo.value - 1][i];
        resultDisp[0].appendChild(newLi);
    }
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

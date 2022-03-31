'use strict'
// 1行目に記載している 'use strict' は削除しないでください


function OnButtonClick() {
    let gatorsNum = document.getElementById("textbox");
    let theGatorsNumber = document.getElementById("bluebox");
    for (let i = 0; i < gatorsNum.value; i++) {
        theGatorsNumber.append("🐊");
    }
};

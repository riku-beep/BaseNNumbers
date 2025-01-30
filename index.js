function convertBase(value, n) {
    // 入力値をn進数から10進数に変換
    const decimalValue = parseInt(value, n);
    
    if (isNaN(decimalValue)) {
        throw new Error("Invalid input: Unable to convert");
    }
    
    // 各進数に変換
    return [
        decimalValue.toString(2),  // 2進数
        decimalValue.toString(8),  // 8進数
        decimalValue.toString(10), // 10進数
        decimalValue.toString(16)  // 16進数
    ];
}
function convertButotnClick(){
    let number = document.getElementById('befor_number');
    let convert_num=convertBase(number.value,checkRadio());
    viewConvertNum(convert_num);
    console.log(convert_num);
    
}
function resetButotnClick(){
    document.getElementById('befor_number').value="";
}
function checkRadio(){
    let elements = document.getElementsByName('select_n');
    let len = elements.length;
    let checkValue = '';

    for (let i = 0; i < len; i++){
        if (elements.item(i).checked){
        checkValue = elements.item(i).value;
        }
    }
    return Number(checkValue);
}
function viewConvertNum(convertNum){
    for (let i=0;i<convertNum.length;i+=1){
        document.getElementById('after_'+String(i)).value=convertNum[i];
    }
}
function copyToClipboard(elementId) {
    // 入力フィールドを取得
    const inputField = document.getElementById(elementId);

    // 入力値をクリップボードにコピー
    if (inputField) {
        navigator.clipboard.writeText(inputField.value).then(() => {
            alert("コピーしました: " + inputField.value);
        }).catch(err => {
            console.error("コピーに失敗しました:", err);
        });
    }
}


let convertCheckButton = document.getElementById('convert_buttun');
convertCheckButton.addEventListener('click', convertButotnClick);
let resetCheckButton = document.getElementById('reset_buttun');
resetCheckButton.addEventListener('click', resetButotnClick);
let copyCheckButtun = document.getElement
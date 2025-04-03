function appendToDisplay(e){
    
    var displayEL = document.getElementById("display")
    var displayTX = displayEL.textContent;
    var last_symbol =displayTX[displayTX.length -1]

    var isOperator = (e == '+' || e == '-' || e == '*' || e == '/');
    var lastIsOperator = (last_symbol == '+' || last_symbol == '-' || last_symbol == '*' || last_symbol == '/');

    if (displayTX.length == 0 && isOperator) {
        return
    }

    if (lastIsOperator && isOperator) {
        displayTX = displayTX.substring(0, displayTX.length - 1) + e;
    } else {
        displayTX += e;
    }
    displayEL.textContent = displayTX;
}

function DelAll(){
    var display =document.getElementById("display")
    display.textContent=""


}
function delete_last(){
    var displayTX =document.getElementById("display")

    displayContent = displayTX.textContent
    newContent = displayContent.substring(0, displayContent.length - 1)

    displayTX.textContent = newContent
}

function calculate(){
    console.log(2);
    
    var display =document.getElementById("display")
    display.textContent= eval(display.textContent)
    console.log(4);
    
}   
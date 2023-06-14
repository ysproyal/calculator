let userInput=document.getElementById("input")
let exprssion=""

function click1(x){
    exprssion=exprssion+x
    userInput.value=exprssion
}
function equal(){
    exprssion=eval(exprssion)
    userInput.value=exprssion

}

function erase(){
    exprssion=""
    userInput.value=exprssion
}
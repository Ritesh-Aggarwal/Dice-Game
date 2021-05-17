var img1 = document.querySelector("#one");
var img2 = document.querySelector("#two");

var p1 = 0;
var p2 = 0;
var round = 0;

function updateCount(){
    document.querySelector("#p1").innerHTML = p1;
    document.querySelector("#p2").innerHTML = p2;
    document.querySelector("#round").innerHTML = round;
    if(p1 > p2)
        document.querySelector("#total").innerHTML = "Player 1";
    else if(p2 > p1)
        document.querySelector("#total").innerHTML = "Player 2";
    else if(p1==p2)
        document.querySelector("#total").innerHTML = "Draw";
}

function pathGen(num) {
    return "images/dice" + num + ".png";
}

function diceThrow(){
    return Math.round(Math.random()*5) + 1;
}

function changeWinner(num){
    if(num == 3)
        document.querySelector(".top").innerHTML = "Draw!"
    else
    document.querySelector(".top").innerHTML = "Player " + num + " wins!!"
}
function rollDice(){

  var num1 = diceThrow();
  var num2 = diceThrow(); 

  img1.setAttribute("src",pathGen(num1));
  img2.setAttribute("src",pathGen(num2));

if(num1 > num2){
    changeWinner(1);
    p1++;
}
else if(num2 > num1){
    changeWinner(2);
    p2++;
}
else
    changeWinner(3);

round++;

updateCount();
}

function reset(){
    img1.setAttribute("src",pathGen(1));
    img2.setAttribute("src",pathGen(2));
    document.querySelector(".top").innerHTML = "Dice Game";
    round = 0;
    p1 = 0;
    p2 = 0;
    updateCount();
}
document.querySelector("#rollDice").addEventListener("click",rollDice);
document.querySelector("#Reset").addEventListener("click",reset);

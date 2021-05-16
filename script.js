function pathgen(num) {
    return "images/dice" + num + ".png";
}

function dicethrow(){
    return Math.round(Math.random()*5) + 1;
}

function changewinner(num){
    if(num == 3)
        document.querySelector(".top").innerHTML = "Draw!"
    else
    document.querySelector(".top").innerHTML = "Player " + num + " wins!!"
}

  var img1 = document.querySelector("#one");

  var img2 = document.querySelector("#two");

  var num1 = dicethrow();
  var num2 = dicethrow(); 

  img1.setAttribute("src",pathgen(num1));
  img2.setAttribute("src",pathgen(num2));

if(num1 > num2)
    changewinner(1);
else if(num2 > num1)
    changewinner(2);
else
    changewinner(3);

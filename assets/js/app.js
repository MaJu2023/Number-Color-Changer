
let btn_increase =  document.querySelector(".increase");
let btn_decrease =  document.querySelector(".decrease");
let reset =  document.querySelector(".reset");
let number =  document.querySelector(".number");

let counter = 0;

//
function colorNumber(counter){
    if (counter > 0 ) {
        number.style.color = "green";
    }else if(counter < 0){
        number.style.color = "red";
    }else{
        number.style.color = "black";
    }
}

btn_increase.addEventListener("click", function(){
    counter ++;
    console.log(counter);
    number.textContent = counter;
    colorNumber(counter);
});
btn_decrease.addEventListener("click", function(){
    counter --;
    console.log(counter);
    number.textContent = counter;
    colorNumber(counter);
});
reset.addEventListener("click", function(){
    counter = 0;
    console.log(counter);
    number.textContent = counter;
    colorNumber(counter);
});





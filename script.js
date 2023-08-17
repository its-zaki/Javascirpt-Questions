// Question no 1
const names = document.querySelector("#name")
const youremail = document.querySelector("#email")


function submit(){
    console.log(names.value);
    console.log(youremail.value);    
    
    
}

// Question no 2


let num1 = document.querySelector("#num1")
let num2 = document.querySelector("#num2")
let operator = document.querySelector("#operator")
let head = document.querySelector("#head-3")

function calculate(){

    switch(operator.value){
        case("+"):
        let sum = num1.value + num2.value;
        head.innerHTML = "Your answer is------} " + sum;
        // console.log( sum );
        break
        case("-"):
        let sub = num1.value - num2.value;
        head.innerHTML = "Your answer is------} " + sub;

        break
        case("*"):
        let multiply = num1.value * num2.value;
        head.innerHTML = "Your answer is------} " + multiply;

        break
        case("/"):
        let division = num1.value / num2.value;
        head.innerHTML = "Your answer is------} " + division;

        break
        
        default:
            console.log("Operator Sahi Put Karo")
    }
    

}
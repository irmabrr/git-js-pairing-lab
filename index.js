//Question 1
let fiveToOneHundred = () =>{

    for (i=5; i <= 100; i++){
        console.log (i);
    }
}

console.log(fiveToOneHundred());

//Question 2
const multiplesOfThree = () => {
    for (i=3; i <=  100; i = i+3){
        console.log(i);
    }
}
console.log(multiplesOfThree());

let multiplesOfThreeOrFive = () =>{
    for (i=3; i <=  100; i++){  
        if (i % 3 === 0 || i % 5 === 0){
            console.log (i);
        } 
    }
}


console.log(multiplesOfThreeOrFive())

//Question 4
const untilNum = num => {
    for (i=1; i<=num; i++){
        console.log(i);
    }
}

untilNum(5);

const multiply = (prod1, prod2) => {
   return prod1 * prod2; 
}
console.log(multiply(2,4));

//Question 6
const add = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2
    }
}

console.log(add(2,4))
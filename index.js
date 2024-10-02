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

 // question 3
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

// question 5
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

// question 7
const isNegative = (para1) =>{
    if(para1 > 0){
        return false;
    } else if (para1 < 0){
        return true;
    } else {
        return "hm im not sure";
    }
}

console.log(isNegative(Math.PI));

//Question 8
const triangleArea = (h,b) => {
    return (h*b)/2;
}

console.log(triangleArea(6,8))

// question 9
const betweenTwentyAndFourty = (a) => {
    if (a >= 21 && a <= 39){
        return true;
    } else {
        return false;
    }
}
    console.log(betweenTwentyAndFourty(32));

 //Question 10
 const largest = (a,b,c) => {
    if(a > b && a > c){
            return a;
    } else if (b > c){
        return b;
    } else {
        return c;
    }
}
console.log(largest(30,22,17))
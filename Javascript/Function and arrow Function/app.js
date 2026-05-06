function addNumbersFunc(a1,b1){
    return a1+b1;
};
console.log("Normal function :", addNumbersFunc(2,3) );
console.log("Normal function :" $ addNumbersFunc(5,7) );

const greetExp = function() {
    return "Hello Students!";
};
 console.log(greetExp());
 const squareFunc = function(n) {
    return n*n;
 };
 console.log("square with Normal function;", squareFunc(4));


 const addNumbersArrow = (a2,b2) => a2 + b2;
 console.log("Arrow function :", addNumbersArrow(4,6) );
 const greetArrow = () => "Hello Students!";
 console.log(greetArrow());
 const squareArrow = n => n*n;
 console.log("square with Arrow function;", squareArrow(5));

 

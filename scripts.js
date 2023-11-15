


// function myCalculator(number1,number2){

//     const suma = number1+number2;
//     const scadere = number1-number2;
//     const inmultire = number1*number2;
//     const impartire = number1/number2;



//     const output = 'Solution: ' + suma + '; ' + scadere + '; '+ inmultire + '; '+ impartire;

//     return output;
// }

// console.log(myCalculator(1,2));


// cu switch


function myCalculator (number1,number2,operator){
    switch(operator){
        case '+':
            return number1+number2;
        case '-':
            return number1-number2;
        case '*':
            return number1*number2;
        case '/':
            return number1/number2;    
    default:
        return "Invalid Operator";
    }
}

console.log(myCalculator(1,2,'/'));
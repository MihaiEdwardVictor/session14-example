


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


// function myCalculator (number1,number2,operator){
//     switch(operator){
//         case '+':
//             return number1+number2;
//         case '-':
//             return number1-number2;
//         case '*':
//             return number1*number2;
//         case '/':
//             return number1/number2;    
//     default:
//         return "Invalid Operator";
//     }
// }

// console.log(myCalculator(1,2,'/'));




//HOMEWORK




// 1.Scrie o funcție care primește ca argument o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 10. Funcția trebuie să returneze un mesaj diferit în fiecare caz.



// function compare (number){
    
//     if(number>10){
//         console.log("Numarul este mai mare decat 10");
//     }else if(number<10){
//         console.log("Numarul este mai mic decat 10");
//     }
// }

// compare(9);


// 2.Scrie o funcție care primește ca argument un număr și verifică dacă acel număr este un număr prim. Funcția trebuie să returneze true dacă numărul este prim și false în caz contrar.



// function isPrime(number){

//     let primeOrNot = true;

//     if(number===1){
//         console.log("1 nu e numar prim");
//     }
//     else if(number>1){
//         for(let i=2;i<number;i++){
//             if (number%i == 0){
//                 primeOrNot = false;
//             }
//         }

//         if(primeOrNot==true){
//             console.log("Numarul este prim");
//         }else{
//             console.log("Numarul nu este prim");
//         }
//     }else{
//         console.log("Numarul nu este prim");
//     }
// }

// isPrime(13);



// 3.Scrie o funcție care primește ca argument un număr și calculează suma tuturor numerelor între 0 și acel număr.


// function mySum(number){
//     let sum=0;
//     for(i=0;i<number;i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }

// mySum(5);




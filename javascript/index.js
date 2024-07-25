//************@ Mohamed Ashraf **********/
// ====================  1 =============================//

// var num = Number(window.prompt('Enter Your Number'));
// console.log(num)

// ==================== 2 ==============================//

// var num = Number(window.prompt('Enter Your Number'));
// if (num % 3 == 0) {
//     if (num % 4 == 0){
//         console.log('Yes')
//     }
//     else{
//         console.log('No')
//     }

// }

// ===================== 3 ==============================//

// var num1 = Number(window.prompt('Enter Your Number1'));
// var num2 = Number(window.prompt('Enter Your Number2'));

// if(num1 > num2){
//     console.log(num1)

// }
// else{
//     console.log(num2)
// }

// ===================== 4 ===============================//

// var num = Number(window.prompt('Enter Your Number'));

// if(num >= 0){
//     console.log('positive')

// }
// else{
//     console.log('negative')
// }

// ====================== 5 ==============================//

// var num1 = Number(window.prompt('Enter Your Number1'));
// var num2 = Number(window.prompt('Enter Your Number2'));
// var num3 = Number(window.prompt('Enter Your Number3'));

// if(num1 > num2 && num1 > num3 && num2 > num3){
//     console.log("max element = " + num1);
//     console.log("min element = " + num3);

// }
// else if(num2 > num1 && num2 > num3 && num3 > num1){
//     console.log("max element = " + num2);
//     console.log("min element = " + num1);

// }
// else {
//     console.log("max element = " + num3);
//     console.log("min element = " + num2);

// }

// ======================== 6 ============================//

// var num = Number(window.prompt('Enter Your Number'));

// switch(num%2 == 0){
//     case true :
//         console.log('even')
//         break;
//     case false :
//         console.log('odd')
//         break;

//     default :   
// }

// ======================== 8 ============================//

// var char = window.prompt('Enter Your Character')

// if (char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
//     console.log ('vowel')  ;
// }
// else{
//     console.log ('constant')
// }


// ===================== 9 ===============================//

// var num = Number(window.prompt('Enter Your Number'));
// var result = ''
// for (var i = 1; i < num; i++) {
//     result =result+ i+','

// }
// result=result+num

// console.log(result)

// ===================== 10 ===============================//

// var num = Number(window.prompt('Enter Your Number'));
// var result = ''
// for (var i = 1; i <= 12; i ++) {
//     result = result+ num * i + ' '

// }

// console.log(result)


// ===================== 11 ===============================//

// var num = Number(window.prompt('Enter Your Number'));
// var result = ''
// for (var i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         result=result+i+' '

//     }

// }
// console.log(result)

// ===================== 12 ===============================//


// var num1 = Number(window.prompt('Enter Your Number1'));
// var num2 = Number(window.prompt('Enter Your Number2'));

// var result = ''
// for (var i = 1; i < num2; i++) {

//         result= num1*num1
//         result=result*result
// }
// console.log(result)


// ===================== 13 ===============================//

// var num1 = Number(window.prompt('Enter Your Number1'));
// var num2 = Number(window.prompt('Enter Your Number2'));
// var num3 = Number(window.prompt('Enter Your Number3'));
// var num4 = Number(window.prompt('Enter Your Number4'));
// var num5 = Number(window.prompt('Enter Your Number5'));

// var total = num1 + num2 + num3 + num4 + num5
// var avg = total/5
// var Percentage = (total/500)*100

// console.log('Total marks=' +total)
// console.log('Average Marks=' +avg)
// console.log('Percentage=' +Percentage)






// ===================== 14 ===============================//

// var num = Number(window.prompt('Enter Your Month Numner'));
// if(num==1 || num==5 || num==3 || num==7 || num==8 || num==10 || num==12){
//     console.log('Days in Month:31')
// }
// else if(num==9 || num==6 || num==11 || num==4){
//     console.log('Days in Month:30')
// }
// else if(num==2 ){
//     console.log('Days in Month:28')

// }

// ===================== 14 ===============================//

// var num = Number(window.prompt('Enter Your Month Numner'));
// if (num >= 90) {
//     console.log('Grad A')
// }
// else if (num >= 80) {
//     console.log('Grad B')
// }
// else if (num >= 70) {
//     console.log('Grad C')
// }
// else if (num >= 60) {
//     console.log('Grad D')
// }
// else if (num >= 50) {
//     console.log('Grad E')
// }
// else if (num >= 40) {
//     console.log('Grad F')
//}

/************************************************ */

// ===================== 15 ===============================//
 

// function getDaysInMonth(month) {
//     let days;
//     switch(month) {
//         case 'January':
//         case 'March':
//         case 'May':
//         case 'July':
//         case 'August':
//         case 'October':
//         case 'December':
//             days = 31;
//             break;
//         case 'April':
//         case 'June':
//         case 'September':
//         case 'November':
//             days = 30;
//             break;
//         case 'February':
//             days = 28;
//             break;
//         default:
//             return "Invalid month";
//     }
//     return `The total number of days in ${month} is ${days}`;
// }

// console.log(getDaysInMonth('November'));  


// ===================== 16 ===============================//

// function checkAlphabet(char) {
//     let result;
//     switch(char.toLowerCase()) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             result = 'vowel';
//             break;
//         default:
//             result = 'consonant';
//     }
//     return `The character '${char}' is a ${result}.`;
// }

// console.log(checkAlphabet('a'));  
// console.log(checkAlphabet('b'));  
//**************************************** */
// var char = window.prompt('Enter Your Character')
// switch(char) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//          console.log ('vowel')  ;
//         break;
//     default:
//         console.log ('constant')  ;
// }


// ===================== 17 ===============================//

// var num1 = Number(window.prompt('Enter Your Number1'));
// var num2 = Number(window.prompt('Enter Your Number2'));

// switch(num1 > num2){
//     case true :
//         console.log('num1')
//         break;
//     case false :
//         console.log('num2')
//         break;

//     default :   
// }

// ===================== 18 ===============================//


// var num = Number(window.prompt('Enter Your Number'));

// switch(num%2 == 0){
//     case true :
//         console.log('even')
//         break;
//     case false :
//         console.log('odd')
//         break;

//     default :   
// }

// ===================== 19 ===============================//

// var num = Number(window.prompt('Enter Your Number'));

// switch (true) {

//     case num < 0:
//         console.log('negative')
//         break;



//     case num > 0:
//         console.log('positive')
//         break;
//     case num == 0:
//         console.log('Zreo')
//         break;

//     default:

// }



// ===================== 20 ===============================//

 

// function calculator(operation ) {
//     let result;
//     var num1 = Number(window.prompt('Enter Your Number1'));
//     var num2 = Number(window.prompt('Enter Your Number2'));

//     switch(operation) {
//         case 'add':
//             result = num1 + num2;
//             break;
//         case 'subtract':
//             result = num1 - num2;
//             break;
//         case 'multiply':
//             result = num1 * num2;
//             break;
//         case 'divide':
//             if(num2 != 0) {
//                 result = num1 / num2;
//             } else {
//                 return "Error! Division by zero is not allowed.";
//             }
//             break;
//         default:
//             return "Invalid operation";
//     }
//     return `The result is ${result}`;
// }

// console.log(calculator('add' ));       
// console.log(calculator('subtract' ));  
// console.log(calculator('multiply' ));  
// console.log(calculator('divide' )); 
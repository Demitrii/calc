      // document.write("Java script Hello");
      //console.log("Hello JavaScript");
      //console.info("Hello JavaScript");
     // let num = '15';
    //  num = '9';
    //  console.log("Переменная:" + num + "." );

     // let number = '125';
     // number = 'World';
    //  console.log(" Folse " + number);

//let num_1 = 105;
//let num_2 = 10;
///const result = (num_1 - num_2);
//console.log("Результат операции вычетание: " + result);
//console.log("Результат:" + (num_1 / num_2));

let num_1 = 105;
num_1 ++;
console.log("Результат: " + num_1);

let str_1 = Number("12");
let str_2 = Number("12");
console.log("Результат:" + (str_1 + str_2));

console.log("Math: " + Math.PI);
console.log("Math: " + Math.min(4, 6, 8, 1, 12));


function age(hello){
   console.log(hello);
}
let ages = "heloo world";
ages = 45;
age(ages);








function summ(num_1, num_2){
   let result = num_1 + num_2;
   return result;
}
//let number = summ(5, 6);
//console.log(number);

function subtrac(num_1, num_2){
   let result = num_1 - num_2;
   return result;
}

function divis(num_1, num_2){
   let result = num_1 / num_2;
   return result;
}

function multip(num_1, num_2){
   let result = num_1 * num_2;
   return result;
}

function op(e){
   console.log(e.id);
   let num_1 =  parseInt(document.querySelector('#num1').value);
   let num_2 =  parseInt(document.querySelector('#num2').value);
   let operation = e.id;
   let res = 0;
   switch(operation){
      case 'plus':
          res = summ(num_1, num_2);
         break;
         case 'minus':
          res = subtrac(num_1, num_2);
         break;
         case 'del':
            res = divis(num_1, num_2);
           break;
           case 'umg':
            res = multip(num_1, num_2);
           break;
   }
   document.querySelector('#result').innerHTML = res;
}









let subs = (n_1, n_2) =>{ // название функции и параметры (n_1 n_2)
   let result = n_1 * n_2; // { логика название выполняемой операции}
   return result;          // возврат с функции
}
let num = subs(15, 10);    // вывод 
console.log("Разность" + num); 



let multis = (n_1, n_2) =>{ // название функции и параметры (n_1 n_2)
   let multi = n_1 * n_2; // { логика название выполняемой операции}
   return multi;          // возврат с функции
}


let jhkjh = multis(20, 10);    // вывод 
console.log("хрень" + jhkjh); 

let mult = (n_3, n_4) =>{
   let multiss = n_3 / n_4;
   return multiss;
}
let jfkldsj = mult(50, 10);
console.log("ршр" + jfkldsj);


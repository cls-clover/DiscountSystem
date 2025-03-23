// var num = 99;
// var str = 'hello world';
// var anything
//
// console.log(anything); //undefined
// console.log(typeof num); //number
// console.log(typeof str); //string
// anything = Number("Любая строка вместо числа");
// console.log(anything); // NaN
// console.log(num === 66); //false
// console.log(!!str); //true


var purchaseAmount = Number(prompt('Введите сумму покупки'));

if (isNaN(purchaseAmount)) { //если сумма покупки не является числом
 console.error("Ошибка: Введена некорректная сумма.");
} else if (purchaseAmount < 0) { //проверка отрицательной суммы
 console.error("Ошибка: Сумма покупки не может быть отрицательной");
} else {
 // var hasCoupon = prompt('У вас есть скидочный купон?', '(да/нет)').toLowerCase();
 var hasCoupon = confirm("У вас есть скидочный купон?");

 var discount = 0;

 if (purchaseAmount > 5000) {
  discount += purchaseAmount * 0.1; //10% скидка
 }

 if (hasCoupon) { //if (hasCoupon === "да")
  discount += purchaseAmount * 0.05; //5% скидки
 }

 var finalAmount = purchaseAmount - discount;
 console.log("Итоговая сумма с учетом скидки:", finalAmount);
}
//lol
let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let oper = promt("Введіть знак:");

if (oper == "+") {
  console.log(num1 + num2);
}

if (oper == "-") {
  console.log(num1 - num2);
}

if (oper == "*") {
  console.log(num1 * num2);
}

if (oper == "/") {
  console.log(num1 / num2);
} else {
  console.log("Ви не ввели операцію");
}

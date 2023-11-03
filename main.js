/// M23W0388 Ankumbura Kavindu Hasith

while(true){
let operator;

for (;;) {
  operator = prompt("Enter Operator (+, -, *, /): ");
  
  if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
    break; 
  } 
  else {
    window.alert("Invalid Operator");
}
}

let num1;
do{
    num1=parseFloat(prompt("Enter number 1: "));

} while (isNaN(num1));

let num2;
do{
    num2=parseFloat(prompt("Enter number 2: "));

} while (isNaN(num2));


let answer;

if(operator=="+"){
    answer=num1+num2;
}
else if(operator=="-"){
    answer=num1-num2;
}
else if(operator=="*"){
    answer=num1*num2;
}
else if (operator=="/") {
    
    if (num2 !== 0) 
    {
        answer=num1 / num2;
    } 
    
    else 
    {
        window.alert("Error Division by zero");
        continue;
    }
} 
else {
    window.alert("Error Invalid operator");
    continue;
}

console.log(`${num1} ${operator} ${num2} = ${answer}`);
window.alert(`${num1} ${operator} ${num2} = ${answer}`);
}





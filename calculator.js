function calculator(num1, num2, operator) {
    let result;
    
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return "Error: Cannot divide by zero!";
            }
            break;
        default:
            return "Invalid operator! Use +, -, *, or /.";
    }

    return `Result: ${result}`;
}


console.log(calculator(10, 5, "+"));  
console.log(calculator(20, 4, "-"));  
console.log(calculator(3, 3, "*"));   
console.log(calculator(15, 3, "/"));  
console.log(calculator(10, 0, "/")); 
console.log(calculator(5, 2, "%"));   

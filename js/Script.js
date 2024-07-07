// 1. Print Number
function printNumber() {
    let number = document.getElementById("number1").value;
    document.getElementById("output1").innerText = "Number: " + number;
}

// 2. Divisible by 3 and 4
function checkDivisibility() {
    let number = document.getElementById("number2").value;
    document.getElementById("output2").innerText = (number % 3 === 0 && number % 4 === 0) ? "Yes" : "No";
}

// 3. Maximum of Two Numbers
function findMax() {
    let num1 = parseInt(document.getElementById("number3a").value);
    let num2 = parseInt(document.getElementById("number3b").value);
    document.getElementById("output3").innerText = "Max: " + Math.max(num1, num2);
}

// 4. Positive or Negative
function checkSign() {
    let number = document.getElementById("number4").value;
    document.getElementById("output4").innerText = (number < 0) ? "Negative" : "Positive";
}

// 5. Maximum and Minimum of Three Numbers
function findMaxMin() {
    let num1 = parseInt(document.getElementById("number5a").value);
    let num2 = parseInt(document.getElementById("number5b").value);
    let num3 = parseInt(document.getElementById("number5c").value);
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    document.getElementById("output5").innerText = "Max: " + max + ", Min: " + min;
}

// 6. Even or Odd
function checkEvenOdd() {
    let number = document.getElementById("number6").value;
    document.getElementById("output6").innerText = (number % 2 === 0) ? "Even" : "Odd";
}

// 7. Vowel or Consonant
function checkVowel() {
    let char = document.getElementById("char1").value.toLowerCase();
    document.getElementById("output7").innerText = (['a', 'e', 'i', 'o', 'u'].includes(char)) ? "Vowel" : "Consonant";
}

// 8. Print Numbers from 1 to N
function printNumbers() {
    let number = parseInt(document.getElementById("number8").value);
    let output = "";
    for (let i = 1; i <= number; i++) {
        output += i + " ";
    }
    document.getElementById("output8").innerText = output;
}

// 9. Multiplication Table up to 12
function printMultiplicationTable() {
    let number = parseInt(document.getElementById("number9").value);
    let output = "";
    for (let i = 1; i <= 12; i++) {
        output += number + " x " + i + " = " + (number * i) + "<br>";
    }
    document.getElementById("output9").innerHTML = output;
}

// 10. Print Even Numbers from 1 to N
function printEvenNumbers() {
    let number = parseInt(document.getElementById("number10").value);
    let output = "";
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            output += i + " ";
        }
    }
    document.getElementById("output10").innerText = output;
}

// 11. Calculate Power
function calculatePower() {
    let base = parseInt(document.getElementById("base").value);
    let exponent = parseInt(document.getElementById("exponent").value);
    document.getElementById("output11").innerText = "Result: " + Math.pow(base, exponent);
}

// 12. Marks Calculation
function calculateMarks() {
    let sub1 = parseInt(document.getElementById("subject1").value);
    let sub2 = parseInt(document.getElementById("subject2").value);
    let sub3 = parseInt(document.getElementById("subject3").value);
    let sub4 = parseInt(document.getElementById("subject4").value);
    let sub5 = parseInt(document.getElementById("subject5").value);
    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    let average = total / 5;
    let percentage = (total / 500) * 100;
    document.getElementById("output12").innerText = "Total: " + total + ", Average: " + average + ", Percentage: " + percentage + "%";
}

// 13. Days in a Month
function getDays() {
    let month = parseInt(document.getElementById("month").value);
    let days;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            days = "Invalid month";
    }
    document.getElementById("output13").innerText = "Days: " + days;
}

// 14. Percentage and Grade
function calculatePercentageGrade() {
    let physics = parseInt(document.getElementById("physics").value);
    let chemistry = parseInt(document.getElementById("chemistry").value);
    let biology = parseInt(document.getElementById("biology").value);
    let mathematics = parseInt(document.getElementById("mathematics").value);
    let computer = parseInt(document.getElementById("computer").value);
    let total = physics + chemistry + biology + mathematics + computer;
    let percentage = (total / 500) * 100;
    let grade;
    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 70) grade = "C";
    else if (percentage >= 60) grade = "D";
    else grade = "F";
    document.getElementById("output14").innerText = "Percentage: " + percentage + "%, Grade: " + grade;
}

// 15. Switch Statements
// Days in a Month
function switchGetDays() {
    let month = parseInt(document.getElementById("switchMonth").value);
    let days;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            days = 31;
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            days = "Invalid month";
    }
    document.getElementById("output15a").innerText = "Days: " + days;
}

// Vowel or Consonant
function switchCheckVowel() {
    let char = document.getElementById("switchChar").value.toLowerCase();
    let output;
    switch (char) {
        case 'a': case 'e': case 'i': case 'o': case 'u':
            output = "Vowel";
            break;
        default:
            output = "Consonant";
    }
    document.getElementById("output15b").innerText = output;
}

// Find Maximum Between Two Numbers
function switchFindMax() {
    let num1 = parseInt(document.getElementById("switchNumber1").value);
    let num2 = parseInt(document.getElementById("switchNumber2").value);
    let max = num1 > num2 ? num1 : num2;
    document.getElementById("output15c").innerText = "Max: " + max;
}

// Even or Odd
function switchCheckEvenOdd() {
    let number = document.getElementById("switchEvenOdd").value;
    let output = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById("output15d").innerText = output;
}

// Positive, Negative, or Zero
function switchCheckSign() {
    let number = document.getElementById("switchSign").value;
    let output;
    switch (true) {
        case (number > 0):
            output = "Positive";
            break;
        case (number < 0):
            output = "Negative";
            break;
        default:
            output = "Zero";
    }
    document.getElementById("output15e").innerText = output;
}

// Simple Calculator
function calculate() {
    let num1 = parseFloat(document.getElementById("calcNumber1").value);
    let num2 = parseFloat(document.getElementById("calcNumber2").value);
    let operator = document.getElementById("operator").value;
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operator";
    }
    document.getElementById("output15f").innerText = "Result: " + result;
}

// 16. Print Numbers 1 to 10
function printNumbers1to10() {
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }
    document.getElementById("output16").innerText = output;
}

// 17. Sum of First 10 Natural Numbers
function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    document.getElementById("output17").innerText = "Sum: " + sum;
}

// 18. Print Even Numbers Between 1 and 20
function printEvenNumbers1to20() {
    let output = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            output += i + " ";
        }
    }
    document.getElementById("output18").innerText = output;
}

// 19. Factorial of a Number
function calculateFactorial() {
    let number = parseInt(document.getElementById("factorialNumber").value);
    let factorial = 1;
    for (let i = number; i > 0; i--) {
        factorial *= i;
    }
    document.getElementById("output19").innerText = "Factorial: " + factorial;
}

// 20. Reverse a String
function reverseString() {
    let str = document.getElementById("reverseStringInput").value;
    let reversed = str.split('').reverse().join('');
    document.getElementById("output20").innerText = "Reversed: " + reversed;
}

// 21. Print Elements of an Array
function printArrayElements() {
    let array = document.getElementById("arrayInput").value.split(',').map(Number);
    document.getElementById("output21").innerText = "Elements: " + array.join(', ');
}

// 22. Find Maximum in an Array
function findMaxInArray() {
    let array = document.getElementById("maxArrayInput").value.split(',').map(Number);
    let max = Math.max(...array);
    document.getElementById("output22").innerText = "Max: " + max;
}

// 23. Print Multiplication Table of a Given Number
function printMultiplicationTableTo10() {
    let number = parseInt(document.getElementById("multiplicationNumber").value);
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += number + " x " + i + " = " + (number * i) + "<br>";
    }
    document.getElementById("output23").innerHTML = output;
}

// 24. Count Vowels in a String
function countVowels() {
    let str = document.getElementById("countVowelsString").value.toLowerCase();
    let count = 0;
    for (let char of str) {
        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            count++;
        }
    }
    document.getElementById("output24").innerText = "Vowels: " + count;
}

// 25. Check Prime Number
function checkPrime() {
    let number = parseInt(document.getElementById("primeNumber").value);
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    document.getElementById("output25").innerText = isPrime ? "Prime" : "Not Prime";
}

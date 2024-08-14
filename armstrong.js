// Function to calculate number of digits
function order(num) {
    let digits = 0;
    while (num > 0) {
        digits++;
        num = Math.floor(num / 10);
    }
    return digits;
}
//Function to check if a number is an armstrong number or not
function checkArmstrong(){
    var p = document.getElementById("result");
    var num = parseInt(f1.n1.value);
    let power = order(num);
    let temp = num;
    let sum = 0;
 
    // Loop until temp is greater than 0
    while (temp) {
        remainder = temp % 10;
 
        // Floor value of the quotient
        temp = Math.floor(temp / 10);
        sum = sum + Math.pow(remainder, power);
    }
    if (sum === num) {
        p.innerHTML=num + " is an Armstrong Number";
    }
    else {
        p.innerHTML=num + " is Not an Armstrong Number";
    }
}

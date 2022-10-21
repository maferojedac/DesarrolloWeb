const sum = (num1, num2) => {
    return num1 + num2;
}

//sobrecarga del metodo sum
const sum3= (num1, num2, num3) => {
    const result = sum(num1, num2);
    return result + sum3;
}

module.exports = {
    sum
}
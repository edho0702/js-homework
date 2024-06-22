// // 함수 시그니처

function getValueAtObject(obj, key) {
    if (!obj[key]) {
        throw new Error("Error !");
    }
    return obj[key];
}

// //예시코드

const person = {
    name: "Alice",
    age: 25,
    city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !

getValueAtObject(person, "key");

// 함수 시그니처

function getNumberAtArray(arr, index) {
    if (!arr[index]) {
        throw new Error("Error!");
    }

    return arr[index];
}

// 예시코드
const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!

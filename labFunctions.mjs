// creating functions - 5/10/24
//writing functions




//PART ONE
//takes an array of numbers and return the sum
const numbers = [1, 2, 3, 4];


function arrSum(numbers){
    let sum = 0;
    for (let i=0; i < numbers.length; i++) {
        sum += numbers[i]; //let the sum be updated everytime a value is added to the numbers array list
    }
    return sum;
}
console.log(arrSum(numbers));




//take an array of numbers and return the average.
function calculateAverage(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length; //add up each number then divide by the amount of numbers in the list
    return average;
}
console.log(calculateAverage(numbers));




//Take an array of strings and return the longest string.
const str = ["apple", "orange", "grapes"];


function longestString(strings){
    let fruits = ""; //creates an empty string for the longest string
    for (let i = 0; strings.length; i++) { //for every fruit, add 1
        if (strings[i].length > fruits.length) { // if the fruits current string is longer than the longest string, update the fruits string
            fruits = strings[i];
        }
    }
    return fruits;
}
console.log(longestString(str));






//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
const text = ['say', 'hello', 'in', 'the', 'morning'];
const numLength = 3;


function arrStrings (strings, number) { //check if the length of the strings in the array is greater than the number provided in the example
    let longerThanNum = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length > number) {
            longerThanNum.push(strings[i]); // add the string to the longerThanNum array at the end
        }
    }
    return longerThanNum; //return the new length of the array
}
console.log(arrStrings(text, numLength));




//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function numbers(n) {
    if (n <= 1){ //stop when n is less than 1
        console.log(n);
        return;
    }
    console.log(n);
    numbers(n-1); //subtract 1 from the number the code calls so it's between 1 and that number
}
numbers(10);








//PART TWO - using callback functions


//sort the array by age
const data = [
{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }
];


data.sort((a, b) ==> {
    return numSort(a.age) - numSort(b.age)
});
console.log(data);


//Filter the array to remove entries with an age greater than 50.
const filterData = data.filter(entry => entry.age <= "50");


console.log(filterData);

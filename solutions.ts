
function filterEvenNumbers(numbers:number[]) {
    return numbers.filter((number) => number % 2 === 0);
}


function reverseString(string:string) {
    let newArr: string[] = [];
    let makeArr = string.split('');
    
    for(let str of makeArr){
        newArr.unshift(str);
    }

    return newArr.join("");
}


type StringOrNumber = string | number;

function checkType(params:StringOrNumber) {
    if(typeof params === 'string'){
        return "String";

    }else {
        return "Number";
    }
}


function getProperty<T extends {name: string}, K extends keyof T >(userInfo: T, key: K) {
    return userInfo[key];
}


interface Book {
    author: string;
    title: string;
    publishedYear: number
}

function toggleReadStatus (params:Book) {
    return {
        ...params,
        isRead: true
    }
};



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}


function getIntersection(arr1: number[], arr2: number[]) {
    let newArr = [];
    let makeSet = new Set(arr1);
    for(let arr of arr2){
        if(makeSet.has(arr)){
            newArr.push(arr);
        }
    }
    return newArr;
}

// Q1 sol
const parent={
    firstName: "Abhishek",
    lastName: "Mahto",

    fullnames(){
        return (this.firstName + " " + this.lastName)
    }
}

const child={
    __proto__:parent
}
console.log(child.fullnames())
// Q2 sol

// creating an object constructor
function Student(name,age){
    this.name = name;
    this.age = age;
}
//creating an object of type student
let student1 = new Student('John',32)
let student2 = new Student('Mary',32)

console.log(student1);
console.log(student2);

//adding property to student1 instance dynamically
student1.sports = 'Cricket';

//adding property to the prototype of the Student
//this would add the gender property to all the 
//existing object instance of the Student object 
//and would initialize it to null
Student.prototype.gender = null

// although student3 is created with name and age
// initialized but the gender property would also 
//be attached to it and assigned as null because 
//of the above mentioned line of code.
let student3 = new Student('Anna',26)



// q3 sol
arr1=[1,3,5,7,8]
arr2=[8,5,6,4,6]
arr3=[9,6,4,9,3]

const arraySum={
    add:function(arr){
        let sum=0;
        arr.forEach(element => {
          sum+=element;
        });
        console.log(sum)
    }
}

Array.__proto__=arraySum;
Array.add(arr1);
Array.add(arr2)
Array.add(arr3)

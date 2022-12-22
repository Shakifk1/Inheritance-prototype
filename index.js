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
//2. Write code to explain prototype chaining
//2.Ans--> whatever we are creating in js like array,
// string etc it will attached with object methods
//  this object methods are comming from prototype
//  which is already predefined in js so 
// we can use this with putting (.)dot.
let object1={
    name:"Abhishek",
    city:"Ranchi",
    getInfo:function(){
        console.log(this.name + " from "+this.city);
    }
}

let object2={
    name:"Ronny"
}
// Never Do this
object2.__proto__=object1;

console.log(object2.name);//it will give me Ronny
console.log(object2.city);//now it will give me object1 city name.
object2.getInfo();//it will take name from object2 and city from object1.
// we can say it is also prototype inheritance
// it will making chan system.


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

// q4
//4. Write a JavaScript function to retrieve all the names of object's own and inherited properties.
let objt={
    name:"Dakota Jhonson",
    Profession:"Actress",
    MovieName:"fifty Shades Of Grey"
}
let allkey = Object.keys(objt);
console.log(allkey);

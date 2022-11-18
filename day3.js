//Objects

//Question 1
let obj1={
    name:'xyz',
    age:22,
}
for(let key in obj1){
    console.log(`${key} +: ${obj1[key]}`);
}

//Question 2
let x={
    a:'1',
    b:'2'
}

delete x.a;
console.log(x);

//Question 3

//because objets are passed by reference
let a={
    x:1
}
let b=a; //here b points the same reference as a
b.x=2;
console.log(b);

//Question 4
let c={
    'a':1,
    'name':'ravi'
}
let d=Object.assign({},c);
console.log(d);


//Question 5

let O1={
    name:'xyz',
    age:22,
}
let O2={
    name:'xyz',
    age:22,
}

const isEqual=(o1,o2)=>{
    for(let k1 in o1){
        if(o2[k1]!==undefined){
            if(o1[k1]!==o2[k1]){
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}
console.log(isEqual(O1,O2));


//Classes

// Question 1

class Queue extends Array{
    enqueue(e){
        super.unshift(e);
    }
    deque(){
        super.pop();
    }
    peek(){
        return !this.isEmpty() ? this[0] : undefined;
    }
    isEmpty(){
        return this.length===0;
    }
}

// Question 2

// instanceof is a binary operator we use to test if an object is of a given type. The result of the operation is either true or false.
class A{
    constructor(_name){
        this.name=_name;
    }
}
let OBJ = new A('ravi');
console.log(OBJ instanceof A);
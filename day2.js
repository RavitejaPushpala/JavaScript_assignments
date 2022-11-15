//Scope

// 1. o/p=12
// 2. o/p=12
// 3. o/p=12
// 4. o/p=10
// 5. o/p=12
// 6. o/p=15



// Arrays

// Question 1
// Array is passed by reference.
let a=[1,2,3,4];
const tmp = ar=>{
    ar[0]=10;
}
tmp(a);
console.log(a);


// Question 2

let b=a.map(num=>{
    return num;
});
let z=a.slice();
console.log(z);
console.log(b);


// Question 3

//The shift() method removes the first element from an array and returns that removed element.
a.shift();
console.log(a);

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
a.unshift(10);
console.log(a);

//The slice() method returns a  copy of a portion of an array into a new array  selected from start to end (end not included) where start and end represent the index of items in that array.

let c=a.slice(0,2);
console.log(c);

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let x=[1,2,3,4,5,6];
x.splice(2,1,'ravi','teja');
console.log(x);

//The pop() method removes the last element from an array and returns that element.

c.pop();
console.log(c);



//Loops

// Question 1
let d=[1,2,3,4,5];
for(let i=d.length-1;i>=0;i--){
    console.log(d[i]);
}

// Question 2

//for..of is majorly used for arrays.
//for..in is majorly used for objects.
//for..of in arrays iterates over values.
//for..in in arrays iterates over indices.
//for..in in objects iterates over keys.


//Iterators

// Question 1
let e=[2,4,6,8,10];
let f=e.map(num=>{
    return num*num;
});
console.log(f);


// Question 2
let g=[1,'two',3,'four',5,'six',7,'eight'];
let h=g.filter(x=>{
    return typeof x==='string';
});
console.log(h);


// Question 3

//the arguments are accumulator and currentValue;
let i=[1,3,5,7,9];
const sum = i.reduce((a, c) => {
    return a + c
  })
  console.log(sum);






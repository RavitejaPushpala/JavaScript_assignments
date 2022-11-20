// Introduction and Conditions


// Question 1
let s1=11,s2='11';
console.log(s1==s2);
console.log(s1===s2);
// (==) only compares the value,but (===) compares value and data types.


//Question 2
let x=12;
if((x>=10 && x%2===0) || (x<10 && x%2!=0)){
    console.log(true);
}


//Question 3
let output;
x%2==0 ? output='even':output='odd';


//Question 4
x=Math.floor(Math.random()*7)+1;
if(x==1) console.log('Sunday');
else if(x==2) console.log('Monday');
else if(x==3) console.log('Tuesday');
else if(x==4) console.log('Wednesday');
else if(x==5) console.log('Thursday');
else if(x==6) console.log('Friday');
else  console.log('Saturday');

//Question 5
switch(x){
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;

    case 3:
        console.log('Tuesday');
        break;

    case 4:
        console.log('Wednesday');
        break;

    case 5:
        console.log('Thursday');
        break;

    case 6:
        console.log('Friday');
        break;

    default:
        console.log('Saturday');
        break;

}


//Functions


// Question 1
//they have different syntax.
//function declaration allows hoisting, i.e we can call the function before creating it.
// The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.





// Question 2

//  1- Functions that take single argument doesn't need parenthesis around it.
//  2- Functions that take no arguments need parenthesis around it.
//  3- A function body composed of a single-line block does not need curly braces.


// Question 3
 function add(a,b){
    return a+b;
 }

 // Question 4
  const mult=function(a,b){
        return a*b;
  }


  // Question 5
  const sub = (a, b) => {
    return a-b;
  };
  

  // Question 6
  console.log((function (str){ 
    var ans="";
    for(let i=str.length-1;i>=0;i--){
        ans+=str[i];
    } 
    return ans;
    })('ravi')
    );







//Promises


// Question 1
//A Promise is in one of these states: 
// 1-pending: initial state, neither fulfilled nor rejected. 
// 2-fulfilled: meaning that the operation was completed successfully. 
// 3-rejected: meaning that the operation failed.

// Question 2

function delayedLowerCase(input){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(input.toLowerCase()),5000);
    })
}
delayedLowerCase('BEAUTIFUL CODE').then((value)=>{
    console.log(value);
});


// Question 3

function delayedLowerCase(input){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve(input.toLowerCase()),5000);
    })
}
delayedLowerCase('BEAUTIFUL CODE').then((value)=>{
    console.log(value+' -'+value.length);
});


// Question 4


//Async-Await
// "1. Rewrite the below using Async-Await syntax

function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v)  // returns a promise
    })
}


async function getProcessedData(url){
    try{
        const v=await downloadData(url);
        return processDataInWorker(v);
    }
    catch (e){
        return downloadFallbackData(url);
    }
}

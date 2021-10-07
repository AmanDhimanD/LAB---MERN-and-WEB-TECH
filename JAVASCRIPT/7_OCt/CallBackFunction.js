// function cal(func,a,b){
//     return func(a,b)
// }
// function sumValue(a,b){
//     return a+b;
// }

// const res = cal(sumValue,1,2);
// console.log(res);


// _________________
//2nd Approach
// function cal(func, a, b) {
//     return func(a, b)
// }
// const res = cal(function(a,b){
//     return a+b;
// },23,45);
// console.log(res);


// _________________
// Arrow function

// function cal(func, a, b) {
//     return func(a, b)
// }
// const res = cal((a, b) => {
//     return a + b;
// }, 23, 45);
// console.log(res);


//Linear Function 
function cal(func, a, b) {
    return func(a, b)
}

const res = cal((a,b)=>a+b,2,4);
console.log(res);
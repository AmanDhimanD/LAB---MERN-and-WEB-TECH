//This Rise issue while waiting 2 sec Print as Undefined  

// console.log("Start");
// function getName(name){
//     setTimeout(() => {
//         return "userName" + name;
//     }, 2000);
// }
// console.log("End");
// console.log(getName());

//To slove this Use Call Back Function or Promises
console.log("Start");
function getName(name,callback){
    setTimeout(() => {
        console.log("Inside Timeout");
        callback(name)
    }, 2000);
}
const check= getName("Mr.Coder",function(check){console.log(check)});
console.log("End");





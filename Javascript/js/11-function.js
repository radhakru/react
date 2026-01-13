//heisting
greeting();
//basic syntax of create an function
function greeting(){
    console.log('hello');
}
greeting();


const Greet=function (){
    console.log('hello2');
}
Greet();


const car={
    name:'mercidize',
    method1:function startButton(){
        console.log('engine starts');
    }
}
console.log(car.name);
//call method using that variable name using object.
car.method1();

//passing parameter into funnction
function value(param){
    console.log(param);
}
value(34);//print value

//passing function into another function as parameter
//this is called callback function.
function run(param){
    param(7,4);
}
run( (param1, param2 ) => {
    console.log(param1+param2);
});

//setTimeout in-build function
setTimeout(() => {
   console.log('timeout'); 
}, 3000);

console.log('uses setTimeout fun...');

setInterval(()=>{
    console.log('every day');
},3000);



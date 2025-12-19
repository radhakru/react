const value1=Math.random()
if(value1>0.5){
   console.log("This is block code..........");
    const value=value1;
    console.log("Block level random value = "+value);
} 
console.log(" Access global level random value= "+value1);


//object
const person={key:"name"};
person.key="Name";
console.log(person.key);//Name


//array
const array=["HTML","CSS"];
array.push("js");
console.log(array);

//data types
let bool=true;
if(bool){
    bool=false
    console.log("boolean value = "+bool)
}
let value2=null;
if(value2 === null){
    console.log("value2 is null")
}
let value3;
if(value3 === undefined){
    value3=20+23+" = new value";
    console.log(value3)
}
let num=98765678987654567898;
console.log("big int ="+num);

let bignum=87655678909866789098765678909876556789n;
console.log("big int ="+bignum);
console.log(typeof bignum );


const add=(a,b)=>{return a+b};
console.log("sum = "+add(12,22));

/*
const btnn=document.getElementById("btn");
console.log(btnn.getAttribute("id"));
if(btnn.getAttribute("id")==="btn"){
    let count=0;
    btnn.addEventListener("click",(e)=>{
        count++;
        e.preventDefault();
       const res= add(10,20);
       console.log("result = "+res);
    });
}

*/
  // Wait until DOM is loaded
    document.addEventListener("DOMContentLoaded", () => {
      const btnn = document.getElementById("btn");
      
      // Optional: check if button exists
      if (btnn) {
        // Add click listener
        let count = 0; // count clicks
        btnn.addEventListener("click", (e) => {
         // e.preventDefault(); // prevent form submit if button is inside form
          count++;
          const res = add(10, 20);
          console.log(`Click ${count}: result = ${res}`);
        });
      }
    });

//if(typeof bignum === )


// btnn.addEventListener("click",() =>{
//     console.log("ok button clicked");
// })
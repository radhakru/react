 let products=[];

function loadProducts(){
   const xhr= new XMLHttpRequest();

    xhr.addEventListener('load' , ()=>{
      products = JSON.parse(xhr.response);
    });


   xhr.open('GET' , 'https://supersimplebackend.dev/products');
   xhr.send();//asynchronus 

}
loadProducts();
  
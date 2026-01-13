//create an empty array for store the todo names

//one, two ,three after add function call
let todoOne=[];


//renderTodoList();

function renderTodoList(){
    let htmlCodeChange='';
    for(let i=0;i<todoOne.length;i++){
        const todovalObj=todoOne[i];
        const {Text,date}=todovalObj;
        //const date=todovalObj.date;
        const html=`
        <div>
            ${Text}
        </div>
        <div>
         ${date} 
        </div>

         <button onClick="
            todoOne.splice(${i},1);
            renderTodoList();//view the latest list
        " class="Delete-button">Delete</button>
        `
                    ;//create one html element for each element.
        htmlCodeChange+=html;
        
    }
    const todoListEle=document.querySelector('.js-todo-list');
    todoListEle.innerHTML = htmlCodeChange;

}



function Add(){
    const TodoEle=document.querySelector('.js-todo-input');
    console.log("value of the TodoElement = "+TodoEle.value);
    const Text=TodoEle.value;

    const Tododate=document.querySelector('.js-date');
    console.log("value of the date = "+Tododate.value);
    const date=Tododate.value;


    //now we need to insert the todo data into todoOne array
    if(Array.isArray(todoOne)){
        let len=todoOne.length;
        if(len>=0){
            todoOne
            .push({Text,date});
        }
    }
    console.log(todoOne);
    TodoEle.value='';
    Tododate.value='';
    //render list
    renderTodoList();

}

 
console.log('-- client-data.js');
//------------------------------------

let todoBtn=document.getElementById('todos-btn');
//console.log('-->'+todoBtn);

todoBtn.addEventListener('click',(event)=>{
    fetch('todos')
    .then(response=>response.json())
    .then(todos=>{
        console.log(todos);
        document.getElementById('my-data').innerHTML=todos;
    })
})

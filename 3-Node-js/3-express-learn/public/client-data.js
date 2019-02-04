console.log('-- client-data.js');
//------------------------------------

let todoBtn=document.getElementById('todos-btn');
let id=document.getElementById('prod-id');
let name=document.getElementById('prod-name');
let price=document.getElementById('price');
let saveBtn=document.getElementById('save-btn');


//console.log('-->'+todoBtn);

saveBtn.addEventListener('click',(e)=>{
    fetch('test',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:id.value,name:name.value,price:price.value})
    })
    .then(response => response.json())
    .then(data=>{
        console.log('data: '+data);
    })


})

todoBtn.addEventListener('click',(event)=>{
    fetch('todos')
    .then(response=>response.json())
    .then(todos=>{
        console.log(todos);
        document.getElementById('my-data').innerHTML=todos;
    })
})

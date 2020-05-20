let trashsvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M133.1 128l23.6 290.7c0 16.2 13.1 29.3 29.3 29.3h141c16.2 0 29.3-13.1 29.3-29.3L379.6 128H133.1zm61.6 265L188 160h18.5l6.9 233h-18.7zm70.3 0h-18V160h18v233zm52.3 0h-18.6l6.8-233H324l-6.7 233zM364 92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9 0-9.7 1.8-13.4 5L184 92h-36c-17.6 0-30 8.4-30 26h276c0-17.6-12.4-26-30-26z"/></svg>';
let checksvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg>';


let input = document.getElementById('input');
let add = document.getElementById('add');
let removePreview = document.getElementById('preview');
let list = document.createElement('li');




function addTaskList(){
    if(list.length == 0){
        removePreview.innerHTML('preview');
    }    
    else{
        let list = document.createElement('li');
        list.appendChild(document.createTextNode(input.value));
        let ul = document.querySelector('ul');

        //Action buttons
        let buttons = document.createElement('button');
        list.appendChild(buttons);

        let check = document.createElement('button');
        check.classList.add('check');
        check.innerHTML = checksvg;
        check.addEventListener('click', function(event){
            list.classList.toggle('lineThrough');
            list.classList.toggle('hoverColor');
        }); 
        buttons.appendChild(check);

        let trash = document.createElement('button');
        trash.classList.add('trash');
        trash.innerHTML = trashsvg;
        trash.addEventListener('click', function(){
            list.remove('li');
        }); 
        buttons.appendChild(trash);

        //Adds all the createdElements above to the parent (ul)
        ul.appendChild(list);
    };
};

//Following code executes above instructions 
function verifyInput(){
    if(input.value.length > 0){
        removePreview.remove('preview');
        addTaskList();
        input.value = "";
    } 
    else{
        alert('Please add a task !!');
    }
};

add.addEventListener('click', function(){
    verifyInput();
});

input.addEventListener('keypress', function(event){
    if(event.keyCode == 13){
        verifyInput();
    }
});


/*function restorePreview(){
    if(input.value.length == 0){
        let div = document.createElement('div');
        let section = document.querySelector('section');
        section.appendChild('div');
        
        removePreview.document.createElement('preview');
        let section = document.querySelector('section');
        section.appendChild('preview');
        
       }
};*/
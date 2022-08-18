let text = document.getElementById("text");
let add = document.querySelector(".btn");
let drop_down = document.getElementById('drop-down');
let todo = document.getElementsByClassName('todo')[0];

let completed = document.getElementsByClassName('comp');
let unCompleted = document.getElementsByClassName('ucomp');

// console.log(check);
let value = 'all';
let temp_new_list;


// text.addEventListener('keyup', () => {
//     console.log(text.value);
// });


function addTodo(){
    if(text.value != ''){
        let new_list = document.createElement('li');
        temp_new_list = new_list;
        new_list.classList.add('list');
        new_list.classList.add('ucomp');
        let new_div2 = document.createElement('div');
        new_div2.classList.add('buttons');

        let new_div = document.createElement('div');
        new_div.classList.add('main-text');
        new_div.innerHTML = text.value;
        let done = document.createElement('button');
        done.innerHTML = '<i class="fa fa-check"></i>'
        done.classList.add('li-btn');
        done.classList.add('btn1');
        let del = document.createElement('button');
        del.innerHTML = '<i class="fa fa-close"></i>';
        del.classList.add('li-btn');
        del.classList.add('btn2');


        done.addEventListener('click', () => {
            let temp = new_div.innerHTML;
            new_div.innerHTML = `<s>${temp}</s>`;
            new_list.style.opacity = '0.5';
            new_list.classList.remove('ucomp');
            new_list.classList.add('comp');
        });

        del.addEventListener('click', () => {
            todo.removeChild(new_list);
        });
        

        new_div2.appendChild(done);
        new_div2.appendChild(del);
        new_list.appendChild(new_div);
        new_list.appendChild(new_div2);
        todo.appendChild(new_list);
        text.value = '';
    }
    else{
        alert('Field should not be empty!!!');
    }
} 

add.addEventListener('click', () => {
    addTodo();
});


drop_down.addEventListener("change", function() {
    value = drop_down.options[drop_down.selectedIndex].value;
    // var text = drop_down.options[e.selectedIndex].text;
    console.log(value);
    if(value == "all"){

        for(let i = 0; i<completed.length; i++){
            completed[i].style.display = 'flex';
        }

        for(let i = 0; i<unCompleted.length; i++){
            unCompleted[i].style.display = 'flex';
        }
        
    }
    else if(value == "comp"){
        console.log("in comp");
        for(let i = 0; i<unCompleted.length; i++){
            unCompleted[i].style.display = 'none';
        }

        for(let i = 0; i<completed.length; i++){
            completed[i].style.display = 'flex';
        }
    }
    else if(value == "ucomp"){
        console.log("in ucomp");
        for(let i = 0; i<completed.length; i++){
            completed[i].style.display = 'none';
        }

        for(let i = 0; i<unCompleted.length; i++){
            unCompleted[i].style.display = 'flex';
        }
    }
});


window.addEventListener('keydown', (e) => {
    if(e.key == "Enter")
        addTodo();
});


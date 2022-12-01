
// const sortableList = document.getElementById('ul-list');

// Sortable.create(sortableList);



// light/dark mode toggle

const toggleIcon = document.querySelector('.toggle');

toggleIcon.addEventListener('click', () => {

    document.body.classList.toggle('light')

    if (document.body.classList.contains('light')) {

        toggleIcon.src = './images/icon-moon.svg'

    } else {

        toggleIcon.src = './images/icon-sun.svg'
    }
})

// add items to list

const todosList = document.querySelector('.list-container ul');
const addBtn = document.getElementById('add-btn');
const itemInput = document.getElementById('todo');
const enterInput = document.querySelector('.input-container');

// adds todos when clicking button

addBtn.addEventListener('click', () => {

    if (itemInput.value.length > 0) {

        addItem(itemInput.value);
        itemInput.value = '';
    }
})

// adds todos when pressing enter

enterInput.addEventListener('keypress', (event) => {

    if (event.charCode === 13 && itemInput.value.length > 0) {

        addItem(itemInput.value);
        itemInput.value = '';

    }
})

// items left counter 

const itemCount = document.getElementById('items-left');

function updateItemsLeft(num) {

    itemCount.innerText = +itemCount.innerText + num;

}


function addItem(item) {

    const listItem = document.createElement('li');

    listItem.innerHTML = 
    `
    <label class="list">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${item}</span>
    </label>
    <span class="remove"></span>
    `;

    todosList.append(listItem);
    updateItemsLeft(1);
}

const checkbox = document.querySelectorAll('.checkbox');
const clearBtn = document.getElementById('clear-btn');

// clears completed todos

clearBtn.addEventListener('click', () => {

    const completedTodo = document.querySelectorAll('.list input[type="checkbox"]:checked');

    completedTodo.forEach(item => {

        item.closest('li').remove();
        updateItemsLeft(-1);


    })
})




// closes todos with X icon

todosList.addEventListener('click',(event)=>{
    if(event.target.classList.contains('remove')){

        event.target.closest('li').remove();
        updateItemsLeft(-1);

    }
})

// Filters

const allItems = document.querySelectorAll('li');
const all = document.getElementById('alltest');
const active = document.getElementById('activetest');
const completed = document.getElementById('comtest');

// shows active todos

active.addEventListener('click', () => {

    all.classList.remove('blue');
    active.classList.add('blue');
    completed.classList.remove('blue');

allItems.forEach(item => {

    if (item.querySelector('input').checked) {

        item.classList.add('hidden');
    } else {

        item.classList.remove('hidden');
    }

})
})

//shows completed todos

completed.addEventListener('click', () => {

    all.classList.remove('blue');
    active.classList.remove('blue');
    completed.classList.add('blue');

allItems.forEach(item => {

    if (item.querySelector('input').checked) {


        item.classList.remove('hidden');
    } else {

        item.classList.add('hidden');
    }

})
})

//shows all todos

all.addEventListener('click', () => {

    all.classList.add('blue');
    active.classList.remove('blue');
    completed.classList.remove('blue');

    allItems.forEach(item => {

        item.classList.remove('hidden');

    })
})


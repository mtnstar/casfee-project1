function fetchTasks() {
   const myRequest = new Request('http://localhost:3000/tasks.json');
   fetch(myRequest)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${ response.status }`);
            }
            return response.json();
        })
        .then((json) => {
            const tasks = document.querySelector('#tasks');
            tasks.insertAdjacentHTML('beforebegin', json[0].title);
        });
}

// const btn1 = document.querySelector('#btn-name')

// btn1.addEventListener('click', function() {
    // fetchTasks();
// });
//

function action_taskEdit(event) {
    console.log(event);
}

function attachEventHandlers() {
    const buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener('click', buttonClick);
    }
}

function buttonClick(event) {
    const id = event.target.getAttribute("id");
    const action = `action_${id}`;
    eval(action)(event);
}

attachEventHandlers();

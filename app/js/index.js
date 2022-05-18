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

const btn1 = document.querySelector('#btn-name')

btn1.addEventListener('click', function() {
    fetchTasks();
});

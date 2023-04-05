const btn = document.querySelector("#formBtn");

const taskArr = JSON.parse(localStorage.getItem("taskList")) || [];

const name = document.getElementById("name");
const email = document.getElementById("email");
const taskName = document.getElementById("taskName");
const description = document.getElementById("description");
const start = document.getElementById("start-date");
const end = document.getElementById("end-date");
const priority = document.getElementById("priority");

const formSubmit = () => {
    const taskObj = {
        Name:name.value,
        Email:email.value,
        TaskName:taskName.value,
        Desc:description.value,
        Start:start.value,
        End:end.value,
        Priority:priority.value
    };

    console.log(taskObj);

    taskArr.push(taskObj);

    localStorage.setItem("taskList",JSON.stringify(taskArr));

}

btn.addEventListener("click", formSubmit);


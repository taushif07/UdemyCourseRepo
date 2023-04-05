const tbody = document.querySelector("#tableBody");

const doneArr = JSON.parse(localStorage.getItem("doneList")) || [];

const priorityArr = JSON.parse(localStorage.getItem("priorityList")) || [];

const totallist = document.querySelector("#task-count");

totallist.textContent = priorityArr.length;



const allPriority = document.querySelector("#flexRadioDefault1");

const lowPriority = document.querySelector("#flexRadioDefault2");

const medPriority = document.querySelector("#flexRadioDefault3");

const highPriority = document.querySelector("#flexRadioDefault4");





allPriority.addEventListener("click", function () {
    const allPriorityArr = priorityArr;

    console.log(priorityArr);

    totallist.textContent = allPriorityArr.length;

    tbody.innerHTML = "";

    display(allPriorityArr);

});




lowPriority.addEventListener("click", function () {
    const lowPriorityArr = priorityArr;

    let data = lowPriorityArr.filter(
        element => element.Priority == "Low");

        console.log(data);
        console.log(priorityArr);

        totallist.textContent = data.length;

        tbody.innerHTML = "";

        display(data);
});


medPriority.addEventListener("click", function () {
    const medPriorityArr = priorityArr;

    let data = medPriorityArr.filter(
        elem => elem.Priority == "Medium"
    );

    console.log(data);

    console.log(priorityArr);

    totallist.textContent = data.length;

    tbody.innerHTML = "";

    display(data);

});



highPriority.addEventListener("click", function () {
    const highPriorityArr = priorityArr;

    let data = highPriorityArr.filter(
        elem => elem.Priority == "High"
    );

    console.log(data);

    console.log(priorityArr);

    totallist.textContent = data.length;

    tbody.innerHTML = "";

    display(data);

});





function display(priorityArr) {


    priorityArr.forEach(function(elem,index) {

       
        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.setAttribute("scope","row");
        let count = index + 1;
        th.textContent = count;

        let name = document.createElement("td");
        name.textContent = elem.Name;

        let email = document.createElement("td");
        email.textContent = elem.Email;

        let taskName = document.createElement("td");
        taskName.textContent = elem.TaskName;

        let description = document.createElement("td");
        description.textContent = elem.Desc;

        let start = document.createElement("td");
        start.textContent = elem.Start;

        let end = document.createElement("td");
        end.textContent = elem.End;

        let priority = document.createElement("td");
        priority.textContent = elem.Priority;

        let addBtnTD = document.createElement("td");
        let addBtn = document.createElement("button");
        addBtn.setAttribute("type","button");
        addBtn.setAttribute("class","btn btn-primary");
        addBtn.textContent = "Add";
        addBtn.addEventListener("click", function () {
            removeFunction(index);
            priorityFunction(elem);
        })
        addBtnTD.append(addBtn);

        let removeBtnTD = document.createElement("td");
        let removeBtn = document.createElement("button");
        removeBtn.setAttribute("type","button");
        removeBtn.setAttribute("class","btn btn-danger");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
            removeFunction(index);
        });
        removeBtnTD.append(removeBtn);

        tr.append(th,name,email,taskName,description,priority,start,end,addBtnTD,removeBtnTD);

        tbody.append(tr);

    });
    
};

const removeFunction = (index) => {
    let removedItem = priorityArr.splice(index,1);
    console.log(removedItem)
    localStorage.setItem("priorityList",JSON.stringify(priorityArr));
    totallist.textContent = priorityArr.length;
    tbody.innerHTML = "";
    display(priorityArr);
}


const priorityFunction = (elem) => {
    doneArr.push(elem);
    localStorage.setItem("doneList",JSON.stringify(doneArr));
}

display(priorityArr);
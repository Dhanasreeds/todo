const indata = document.getElementById("indata");
const taskList = document.getElementsByClassName("taskList")[0];

function addTask(){
    if (indata.value === ''){
        alert("Enter some text");
    } else {
        let li = document.createElement("li");
        li.innerHTML = indata.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "delete";
        li.appendChild(span);
    }
    indata.value = " ";
    saveData();
}
taskList.addEventListener ("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("task");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();
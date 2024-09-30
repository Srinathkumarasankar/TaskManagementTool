const body = document.querySelector("body");
      sidebar = body.querySelector(".sidebar");
      toggle = body.querySelector(".toggle");
      searchBtn = body.querySelector(".search-box");
      modeSwitch = body.querySelector(".toggle-switch");
      modeText = body.querySelector(".mode-text");

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");
      });

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      // ----------------------clock--------------------------

      function updateClock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2,'0')
        let minutes = now.getMinutes().toString().padStart(2,'0')
        // let seconds = now.getSeconds().toString().padStart(2,'0')
        let timeString = hours + ':' + minutes 
        document.getElementById('time').textContent = timeString;
    }
    
    setInterval(updateClock, 1000);

    // -----------------------Adding Task-------------------

    const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskValue = inputBox.value.trim(); // Trim whitespace

    if (taskValue === '') {
        alert("You must write something!!");
    } else {
        const listItem = document.createElement("li");
        listItem.textContent = taskValue;
        listContainer.appendChild(listItem);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span)
    }

    inputBox.value = ''; // Clears the input field
    saveData();
}

const addButton = document.getElementById("addButton"); 
addButton.addEventListener("click", addTask);

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();
const input = document.getElementById("entryBar");
const list = document.getElementById("listSection");

function toDoList() {

    if(input.value === '') {

        alert("You must Write Something!");

    }

    else {

        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    input.value = '' ;
}

list.addEventListener("click", function(e) {

    if(e.target.tagName === "LI"){

        e.target.classList.toggle("checked");

    }

    else if(e.target.tagName === "SPAN"){ 

        e.target.parentElement.remove();

    }

}, false);

let title = document.getElementById("title");
let dateInput = document.getElementById("dateInput");
let typeInput = document.getElementsByName("type");
let desc = document.getElementById("desc");
let priority = document.getElementById("priority");
let statusInput = document.getElementById("status");
let add = document.getElementById("save");
let addTask = document.getElementById("to-do-tasks");
let toDoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");

taskLoad();

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("save")
        .addEventListener("click", formValidation);
});

let formValidation = () => {
    if (title.value === "") {
        console.log("failure");
    } else {
        console.log("success");
        acceptData();
        $('#modal-task').modal('hide')
    }
};
var type_value;
let acceptData = () => {
    for (var i = 0; i < typeInput.length; i++) {
        if (typeInput[i].checked) {
            type_value = typeInput[i].value;
        }
    }
    let data = {
        'title': title.value,
        'type': type_value,
        'priority': priority.value,
        'status': statusInput.value,
        'date': dateInput.value,
        'description': desc.value
    };
    tasks.push(data);
    taskLoad();
    resetTasks();
};

function taskLoad() {
  toDoTasks.innerHTML = "";
  inProgressTasks.innerHTML = "";
  doneTasks.innerHTML = "";
    var id = 1;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") {
            toDoTasks.innerHTML += `
                <button
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                >
                  <div class="">
                    <i class=""></i>
                  </div>
                  <div class="mt-2 text-start ms-1 mb-1">
                    <div class="text-white">
                      <i class="bi bi-check-circle-fill text-success me-2"></i
                      >${tasks[i].title}
                    </div>
                    <div class="ms-4">
                      <div class="text-white">#${id} created in ${tasks[i].date}</div>
                      <div
                        class="text-white"
                        title=""
                      >
                        ${tasks[i].description}
                      </div>
                    </div>
                    <div class="mt-2 text-start ms-4 mb-1">
                      <span
                        class="btn rounded-3 text-white p-1"
                        style="background-color: #e94560"
                        >${tasks[i].priority}</span
                      >
                      <span
                        class="btn rounded-3 p-1"
                        style="background-color: white; color: #e94560"
                        >${tasks[i].type}</span
                      >
                    </div>
                  </div>
                </button>
      `;
        }
        else if (tasks[i].status == "In Progress") {
            inProgressTasks.innerHTML += `
              <button
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                >
                  <div class="">
                    <i class=""></i>
                  </div>
                  <div class="mt-2 text-start ms-1 mb-1">
                    <div class="text-white">
                      <i
                        class="spinner-border text-success spinner-border-sm me-2"
                        role="status"
                      ></i
                      >${tasks[i].title}
                    </div>
                    <div class="ms-4">
                      <div class="text-white">#${id} created in ${tasks[i].date}</div>
                      <div
                        class="text-white"
                        title=""
                      >
                        ${tasks[i].description}
                      </div>
                    </div>
                    <div class="mt-2 text-start ms-4 mb-1">
                      <span
                        class="btn rounded-3 text-white p-1"
                        style="background-color: #e94560"
                        >${tasks[i].priority}</span
                      >
                      <span
                        class="btn rounded-3 p-1"
                        style="background-color: white; color: #e94560"
                        >${tasks[i].type}</span
                      >
                    </div>
                  </div>
                </button>
      `;
        }
        else if (tasks[i].status == "Done") {
            doneTasks.innerHTML += `
              <button
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                >
                  <div class="">
                    <i class=""></i>
                  </div>
                  <div class="mt-2 text-start ms-1 mb-1">
                    <div class="text-white">
                      <i class="bi bi-check-circle-fill text-success me-2"></i
                      >${tasks[i].title}
                    </div>
                    <div class="ms-4">
                      <div class="text-white">#${id} created in ${tasks[i].date}</div>
                      <div
                        class="text-white"
                        title=""
                      >
                       ${tasks[i].description}
                      </div>
                    </div>
                    <div class="mt-2 text-start ms-4 mb-1">
                      <span
                        class="btn rounded-3 text-white p-1"
                        style="background-color: #e94560"
                        >${tasks[i].priority}</span
                      >
                      <span
                        class="btn rounded-3 p-1"
                        style="background-color: white; color: #e94560"
                        >${tasks[i].type}</span
                      >
                    </div>
                  </div>
                </button>
      `;
        }
        id++;
    }
}
let resetTasks = () => {
    title.value = "";
    type_value = "";
    priority.value = "";
    statusInput.value = "";
    dateInput.value = "";
    desc.value = "";
};



/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
}

function saveTask() {

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}
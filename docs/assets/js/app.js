const title = document.getElementById("title");
const dateInput = document.getElementById("dateInput");
const typeInput = document.getElementsByName("type");
const desc = document.getElementById("desc");
const priority = document.getElementById("priority");
const statusInput = document.getElementById("status");
const add = document.getElementById("save");
const addTask = document.getElementById("to-do-tasks");
const toDoTasks = document.getElementById("to-do-tasks");
const inProgressTasks = document.getElementById("in-progress-tasks");
const doneTasks = document.getElementById("done-tasks");
const modelud = document.getElementById("delete-update-task");

taskLoad();

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("save")
        .addEventListener("click", formValidation);
});

document.getElementById("")

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
        'id': (tasks.length) + 1,
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
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") {
            toDoTasks.innerHTML += `
                <button
                data-bs-toggle="modal"
                data-bs-target="#delete-update-task"
                onClick="editTask(this.id);"
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                  id = "${tasks[i].id}"
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
                      <div class="text-white">#${tasks[i].id} created in ${tasks[i].date}</div>
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
              data-bs-toggle="modal"
              data-bs-target="#delete-update-task"
              onClick="editTask(this.id)"
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                  id = "${tasks[i].id}"
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
                      <div class="text-white">#${tasks[i].id} created in ${tasks[i].date}</div>
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
              onClick="editTask(this.id)"
              data-bs-toggle="modal"
              data-bs-target="#delete-update-task"
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                  id = "${tasks[i].id}"
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
                      <div class="text-white">#${tasks[i].id} created in ${tasks[i].date}</div>
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

function editTask(index) {
  for (let i of tasks){
    if(i.id == index){
      modelud.innerHTML = `
      <div class="modal-dialog">
      <div class="modal-content">
        <div
          class="modal-header"
          style="
            background-image: linear-gradient(#e94560, #0f3460);
            border: none;
          "
        >
          <h5 class="modal-title text-white">Task</h5>
        </div>
        <div class="modal-body" style="background-color: #0f3460">
          <div class="" id="taskForm">
            <label class="col-form-label text-white">Title</label>
            <input
              type="text"
              class="form-control"
              style="background-color: #c8c8c8"
              id="title"
              value="${tasks[index - 1].title}"
            />
          </div>
          <label class="col-form-label text-white" id="typ">Type</label>
          <div class="d-flex">
            <div class="form-check ms-3">
              <input
                name="type"
                value="Bug"
                class="form-check-input"
                type="radio"
              />
              <label class="form-check-label text-white">Bug</label>
            </div>
            <div class="form-check ms-3">
              <input
                name="type"
                value="Feature"
                class="form-check-input"
                type="radio"
                checked
              />
              <label class="form-check-label text-white">Feature</label>
            </div>
          </div>
          <div class="">
            <label class="col-form-label text-white">Priority</label>
            <select
              class="form-select"
              style="background-color: #c8c8c8"
              id="priority"
            >
              <option disabled selected>Please select</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div class="">
            <label class="col-form-label text-white">Status</label>
            <select
              class="form-select"
              style="background-color: #c8c8c8"
              id="status"
            >
              <option disabled selected>Please select</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div class="">
            <label class="col-form-label text-white">Date</label>
            <input
              type="date"
              class="form-control"
              style="background-color: #c8c8c8"
              id="dateInput"
              value="${tasks[index - 1].date}"
            />
          </div>
          <div class="">
            <label class="col-form-label text-white">Description</label>
            <textarea
              class="form-control"
              style="background-color: #c8c8c8"
              id="desc"
            >${tasks[index - 1].description}</textarea>
          </div>
        </div>
        <div
          class="modal-footer"
          style="background-color: #0f3460; border: none"
        >
          <button
            id = "delete"
            type="button"
            style="
              background-color: #c8c8c8;
              color: #e94560;
              font-weight: bold;
            "
            class="btn btn-light border rounded-pill"
          >
          DELETE
          </button>
          <button
            type="submit"
            id="update"
            style="background-color: #e94560; font-weight: bold"
            class="btn btn-primary rounded-pill text-white"
          >
          UPDATE
          </button>
        </div>
      </div>
      </div>
      `;

    }
  }
  
}

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
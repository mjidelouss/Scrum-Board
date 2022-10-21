// loaded tasks
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
const toDoTaskCount = document.getElementById('to-do-tasks-count');
const inProgressTaskCount = document.getElementById('in-progress-tasks-count');
const doneTaskCount = document.getElementById('done-tasks-count');
//


let toDoCount = 0;
let inProgressCount = 0;
let doneCount = 0;
taskLoad();

document.addEventListener("DOMContentLoaded", () => {
    document
        .getElementById("save")
        .addEventListener("click", formValidation);
});

// document.getElementById("update").addEventListener("click", );

let formValidation = () => {
    if (title.value === "") {
        console.log("failure");
    } else {
        console.log("success");
        acceptData();
        $('#modal-task').modal('hide')
        // Swal.fire(
        //   'Good job!',
        //   'You clicked the button!',
        //   'success'
        //  )
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
  toDoCount = 0;
  inProgressCount = 0;
  doneCount = 0;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") {
            toDoCount++;
            toDoTasks.innerHTML += `
                <button
                data-bs-toggle="modal"
                data-bs-target="#delete-update-task"
                onclick="loadExistingTask(this.id)"
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                  id="${tasks[i].id}"
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
                        ${tasks[i].description.slice(0,55)}...
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
            inProgressCount++;
            inProgressTasks.innerHTML += `
              <button
              data-bs-toggle="modal"
              data-bs-target="#delete-update-task"
              onclick="loadExistingTask(this.id)"
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                  id="${tasks[i].id}"
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
                        ${tasks[i].description.slice(0,55)}...
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
            doneCount++;
            doneTasks.innerHTML += `
              <button
              onclick="loadExistingTask(this.id)"
              data-bs-toggle="modal"
              data-bs-target="#delete-update-task"
                  class="col-12"
                  style="
                    background-color: #0f3460;
                    border: none;
                    border-bottom: 1px solid white;
                  "
                  id="${tasks[i].id}"
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
                       ${tasks[i].description.slice(0,60)}...
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
    toDoTaskCount.innerText = toDoCount;
    inProgressTaskCount.innerText = inProgressCount;
    doneTaskCount.innerText = doneCount;
}

let resetTasks = () => {
    title.value = "";
    type_value = "";
    priority.value = "";
    statusInput.value = "";
    dateInput.value = "";
    desc.value = "";
};

function loadExistingTask(index) {
  for(t of tasks){
    if(t.id == index){
      if (t.type === "Feature") {
        document.getElementById("feature").checked = true;
        document.getElementById("bug").checked = false;
    } else {
        document.getElementById("feature").checked = false;
        document.getElementById("bug").checked = true;
    }
    
    }
  }
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
              id="update_title"
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
                id="bug"
              />
              <label class="form-check-label text-white">Bug</label>
            </div>
            <div class="form-check ms-3">
              <input
                name="type"
                value="Feature"
                class="form-check-input"
                type="radio"
                id="feature"
              />
              <label class="form-check-label text-white">Feature</label>
            </div>
          </div>
          <div class="">
            <label class="col-form-label text-white">Priority</label>
            <select
              class="form-select"
              style="background-color: #c8c8c8"
              id="update_priority"
              value="${tasks[index - 1].priority}"
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
              id="update_status"
              value="${tasks[index - 1].status}"
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
              id="update_dateInput"
              value="${tasks[index - 1].date}"
            />
          </div>
          <div class="">
            <label class="col-form-label text-white">Description</label>
            <textarea
              class="form-control"
              style="background-color: #c8c8c8"
              id="update_desc"
            >${tasks[index - 1].description}</textarea>
          </div>
        </div>
        <div
          class="modal-footer"
          style="background-color: #0f3460; border: none"
        >
          <button
            type="button"
            style="
              background-color: #c8c8c8;
              color: #e94560;
              font-weight: bold;
            "
            class="btn btn-light border rounded-pill"
            id = "${index}"
            onclick="deleteTask(this.id)"
          >
          DELETE
          </button>
          <button
            type="submit"
            style="background-color: #e94560; font-weight: bold"
            class="btn btn-primary rounded-pill text-white"
            onClick="editTask(this.id)"
            id = "${index}"
          >
          UPDATE
          </button>
        </div>
      </div>
      </div>
      `;
}

function editTask(index){
const updateTitle = document.getElementById("update_title");
const updateDate = document.getElementById("update_dateInput");
const updateDesc = document.getElementById("update_desc");
const updateStatus = document.getElementById("update_status");
const updatePriority = document.getElementById("update_priority");
  for (let j = 0; j < typeInput.length; j++) {
    if (typeInput[j].checked) {
        type_value = typeInput[j].value;
    }
}
for(t of tasks){
  if(t.id == index){
    t.title =  updateTitle.value,
    t.type = type_value,
    t.priority = updatePriority.value,
    t.status = updateStatus.value,
    t.date = updateDate.value,
    t.description = updateDesc.value
  }
}
$('#delete-update-task').modal('hide')
taskLoad();
}

function deleteTask(index) {
  let item = index - 1;
  tasks.splice(item, 1);
  console.log(tasks);
  $('#delete-update-task').modal('hide');
  taskLoad();
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

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}
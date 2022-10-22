// Task variables
const title = document.getElementById("title");
const dateInput = document.getElementById("dateInput");
const typeInput = document.getElementsByName("type");
const desc = document.getElementById("desc");
const priority = document.getElementById("priority");
const statusInput = document.getElementById("status");

// Tables Variables
const toDoTasks = document.getElementById("to-do-tasks");
const inProgressTasks = document.getElementById("in-progress-tasks");
const doneTasks = document.getElementById("done-tasks");
const modelFooter = document.getElementById("modalFooter");

// Tasks Count Variables
const toDoTaskCount = document.getElementById("to-do-tasks-count");
const inProgressTaskCount = document.getElementById("in-progress-tasks-count");
const doneTaskCount = document.getElementById("done-tasks-count");

// update & delete model variables
const updateTitle = document.getElementById("update_title");
const updateDate = document.getElementById("update_dateInput");
const updateDesc = document.getElementById("update_desc");
const updateStatus = document.getElementById("update_status");
const updatePriority = document.getElementById("update_priority");

// Variables Declarations
let toDoCount = 0;
let inProgressCount = 0;
let doneCount = 0;
var type_value;

taskLoad();
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("save").addEventListener("click", checkValidForm);
});

function checkValidForm(){
  if (title.value === "") {
    console.log("failure");
  } else {
    console.log("success");
    addTasks();
    $("#modal-task").modal("hide");
    Swal.fire("Added Successfully", "Good Job!", "success");
  }
}
// Add Task Function
function addTasks() {
  getType(typeInput, type_value);
  let data = {
    title: title.value,
    type: type_value,
    priority: priority.value,
    status: statusInput.value,
    date: dateInput.value,
    description: desc.value,
  };
  tasks.push(data);
  taskLoad();
  resetTasks();
}
// Load Tasks Function
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
                onclick="initializeTask(${i})"
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
                      <div class="text-white">#${i + 1} created in ${
        tasks[i].date
      }</div>
                      <div
                        class="text-white"
                        title=""
                      >
                        ${tasks[i].description.slice(0, 60)}...
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
    } else if (tasks[i].status == "In Progress") {
      inProgressCount++;
      inProgressTasks.innerHTML += `
              <button
              data-bs-toggle="modal"
              data-bs-target="#delete-update-task"
              onclick="initializeTask(${i})"
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
                      <div class="text-white">#${i + 1} created in ${
        tasks[i].date
      }</div>
                      <div
                        class="text-white"
                        title=""
                      >
                        ${tasks[i].description.slice(0, 60)}...
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
    } else if (tasks[i].status == "Done") {
      doneCount++;
      doneTasks.innerHTML += `
              <button
              onclick="initializeTask(${i})"
              data-bs-toggle="modal"
              data-bs-target="#delete-update-task"
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
                      <div class="text-white">#${i + 1} created in ${
        tasks[i].date
      }</div>
                      <div
                        class="text-white"
                        title=""
                      >
                       ${tasks[i].description.slice(0, 60)}...
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
// Clear Task Variables Function
let resetTasks = () => {
  title.value = "";
  type_value = "";
  priority.value = "";
  statusInput.value = "";
  dateInput.value = "";
  desc.value = "";
};
// Load Task Data Function
function initializeTask(index) {
  modelFooter.innerHTML = `<button
      type="button"
      style="
        background-color: #c8c8c8;
        color: #e94560;
        font-weight: bold;
      "
      class="btn btn-light border rounded-pill"
      data-bs-dismiss="modal"
    >
    Cancel
    </button>
      <button
      type="button"
      style="
        background-color: #FF0660;
        color: white;
        font-weight: bold;
      "
      class="btn btn-light border rounded-pill"
      onclick="deleteTask(${index + 1})"
    >
    DELETE
    </button>
    <button
      type="submit"
      style="background-color: green; font-weight: bold"
      class="btn btn-primary rounded-pill text-white"
      onClick="editTask(${index})"
    >
    UPDATE
    </button>`;
  updateTitle.value = tasks[index].title;
  if (tasks[index].type === "Feature") {
    document.getElementById("feature").checked = true;
    document.getElementById("bug").checked = false;
  } else {
    document.getElementById("feature").checked = false;
    document.getElementById("bug").checked = true;
  }
  updatePriority.value = tasks[index].priority;
  updateStatus.value = tasks[index].status;
  updateDate.value = tasks[index].date;
  updateDesc.value = tasks[index].description;
}
// Update Task Data Function
function editTask(index) {
  getType(typeInput, type_value);
  (tasks[index].title = updateTitle.value),
    (tasks[index].type = type_value),
    (tasks[index].priority = updatePriority.value),
    (tasks[index].status = updateStatus.value),
    (tasks[index].date = updateDate.value),
    (tasks[index].description = updateDesc.value);
  $("#delete-update-task").modal("hide");
  Swal.fire("Updated Successfully", "Good Job!", "success");
  taskLoad();
}
// Delete Task from Table Function
function deleteTask(index) {
  let item = index - 1;
  tasks.splice(item, 1);
  console.log(tasks);
  $("#delete-update-task").modal("hide");
  Swal.fire("Deleted Successfully", "Good Job!", "success");
  taskLoad();
  resetTasks();
}
// Get the Type Variable in Task Form Function
function getType(typeInput, type_value) {
  for (var i = 0; i < typeInput.length; i++) {
    if (typeInput[i].checked) {
      type_value = typeInput[i].value;
    }
  }
}

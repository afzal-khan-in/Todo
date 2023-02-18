/* Adding task */
document.getElementById("submit-task").onclick = function () {
  if (document.getElementById("task-input").value == "") {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks ul").innerHTML += `
     <li class='flex justify-between hover:bg-slate-100 p-2'> ${
       document.querySelector("#task-input").value
     }
    <button type="button" id="delete-task">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-1 hover:stroke-2 bg-red-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
    </button>


     </li>
      `;
  }
  /* End Add task */
  var currentTask = document.querySelectorAll("#delete-task");

  for (var i = 0; i < currentTask.length; i++) {
    console.log("Current task: ", currentTask[i]);
    currentTask[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};

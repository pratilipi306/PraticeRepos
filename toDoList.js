"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoList = toDoList;
var readline = require("readline-sync");
// **To-Do List (Console App)**
//    * Add, remove, list tasks.
//    * Practice: Arrays, interfaces, enums.
var taskstatus;
(function (taskstatus) {
    taskstatus["pending"] = "Pending";
    taskstatus["completed"] = "Done";
})(taskstatus || (taskstatus = {}));
function toDoList() {
    var list = [];
    var tasks = Number(readline.question("how many number of to do items you have to add to the list? "));
    for (var i = 1; i <= tasks; i++) {
        list.push({ taskname: readline.question("Enter the to do item# ".concat(i, ": ")), tstatus: taskstatus.pending });
    }
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var l = list_1[_i];
        var complete = readline.question("is this task completed - ".concat(l.taskname, " ?Y/N : "));
        (complete === "Y") ? l.tstatus = taskstatus.completed : console.log("".concat(l.taskname, " stays in the list"));
    }
    var updatedList = list.filter(function (item) { return item.tstatus === taskstatus.pending; });
    console.log(" Updated To-Do List:");
    updatedList.forEach(function (item) {
        console.log("".concat(item.taskname, " -- [").concat(item.tstatus, "]\n"));
    });
}

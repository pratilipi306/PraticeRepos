import * as readline from 'readline-sync';

// **To-Do List (Console App)**

//    * Add, remove, list tasks.
//    * Practice: Arrays, interfaces, enums.
enum taskstatus {
    pending = "Pending",
    completed = "Done"

}
interface Tasks {
    taskname: string,
    tstatus: taskstatus
}

export function toDoList() {
    let list: Tasks[] = [];
    const tasks = Number(readline.question("how many number of to do items you have to add to the list? "));
    for (let i = 1; i <= tasks; i++) {
        list.push({ taskname: readline.question(`Enter the to do item# ${i}: `), tstatus: taskstatus.pending });

    }
    for (let l of list) {
        const complete = readline.question(`is this task completed - ${l.taskname} ?Y/N : `);
        (complete === "Y") ? l.tstatus = taskstatus.completed : console.log(`${l.taskname} stays in the list`);

    }
    const updatedList = list.filter(item => item.tstatus === taskstatus.pending);

    console.log(" Updated To-Do List:");
    updatedList.forEach(item => {
        console.log(`${item.taskname} -- [${item.tstatus}]\n`);
    })



}
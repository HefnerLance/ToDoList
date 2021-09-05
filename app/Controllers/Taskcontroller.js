import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { taskService } from "../Services/TaskService.js";

export class taskController{
    constructor(){
     console.log("hello from the task controller");

    }

    createTask(listData){
        window.event.preventDefault();
        debugger
        console.log("look here plz", listData)
        let form = event.target
        let taskData = {
            // @ts-ignore
            type: form.taskInput.value,
            id: listData.id
            

        }
        taskService.newTask(taskData)
    }
    
}
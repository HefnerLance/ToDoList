import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

export class taskController{
    constructor(){

    }

    addTask(listData){
        let form= event.target
        event.preventDefault()
        let taskData= {
            // @ts-ignore
            type: form.taskInput.value,
            id: listData.id
            

        }
    }
}
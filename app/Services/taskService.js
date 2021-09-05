import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

export class taskService {
    constructor(){

    }
    addTask(taskData){
        ProxyState.Tasks= [... ProxyState.Tasks, new Task]
        console.log("add task func", ProxyState.Tasks )
    }
}
export const taskservice = new taskService
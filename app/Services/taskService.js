import { ProxyState } from "../AppState.js";
import { Task } from "../Models/Task.js";

export class TaskService {
    
    constructor(){
        console.log('hello from the task service');
        
    }
    newTask(taskData) {
        debugger
        console.log("add task func", ProxyState.Tasks )
        ProxyState.Tasks = [... ProxyState.Tasks, new Task]
    }
    
}
export const taskService = new TaskService();
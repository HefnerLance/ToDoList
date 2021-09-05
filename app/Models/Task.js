import { generateId } from "../Utils/generateId.js";


export class Task{

    constructor(taskData){

        this.id = taskData.id || generateId();
        this.name=taskData.name.value
        

    }
    get Template(){
        return /*html*/ `
        
        `
    }
}
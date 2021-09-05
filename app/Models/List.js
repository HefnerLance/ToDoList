import { generateId } from "../Utils/generateId.js";

export class List {
    constructor(listData){
        this.id= listData.id|| generateId()
        this.color= listData.color
        this.type= listData.type

        // console.log("list")
    }
    get Template(){
       return /*html*/`
        <div class="card ${this.color}" style="width: 18rem;">
       <div class="card-header" id="listCategory">
         ${this.type}
       </div>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">task1</li>
       <li class="list-group-item">task2</li>
       <li class="list-group-item">task3</li>
       <button type="submit"> Add Task</button>
       <form onsubmit="app.TaskController.addTask()">
         <input type="text" name="taskInput">
         </form>
         <button> Delete List </button>
       </ul>
       </div>`

    }
}
// ? operator on card bg for value of form color choice to set approp color ex.... this.color==1 ?
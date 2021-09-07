import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js";
import { listService } from "../Services/ListService.js";
import { TaskService } from "../Services/TaskService.js";



ProxyState

function _drawList(){
 let lists= ProxyState.Lists
 let template= ''
 ProxyState.Lists.forEach(l => template += l.Template)
 document.getElementById("lists").innerHTML = template

//  ProxyState.Lists= ProxyState.Lists
}




export class ListController {
    constructor(){
       
        console.log("List controller")
        ProxyState.on ("Lists", _drawList)
        ProxyState.on ("Tasks", _drawList)
        _drawList()
    }

    createList(){
        
        console.log("is this working?")
        event.preventDefault();
        let form = event.target
        let listData = {

            type : form.listCategory.value,
            color: form.listColor.value
        } 
        listService.createList(listData)
        
 
    } 
    deleteList(listid){
        listService.deleteList(listid)

    }
    Alert(listid){
        var response = confirm("delete?")
        if( response == true) {
            this.deleteList(listid)
        }
    }
    

   
}
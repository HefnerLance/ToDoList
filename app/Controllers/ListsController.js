import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { listService } from "../Services/ListService.js";
import { taskservice } from "../Services/taskService.js";



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
        ProxyState.on("Lists", _drawList)
    }

    createList(){
        debugger
        console.log("is this working?")
        event.preventDefault();
        let form = event.target
        let listData = {

            type : form.listCategory.value,
            color: form.listColor.value
        } 
        listService.createList(listData)
        
 
    } 


   
}
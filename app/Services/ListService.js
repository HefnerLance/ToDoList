import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListService {
    constructor(){
        
    }

    createList(listData){
        ProxyState.Lists = [... ProxyState.Lists, new List(listData)]
        console.log(ProxyState.Lists)    
    }
}

export const listService= new ListService();
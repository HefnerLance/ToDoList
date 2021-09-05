import { ListController } from "./Controllers/ListsController.js";
import { taskController } from "./Controllers/Taskcontroller.js";


class App {
  listController = new ListController();
  taskcontroller = new taskController();

}

window["app"] = new App();

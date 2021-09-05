import { ListController } from "./Controllers/ListsController.js";
import { taskController } from "./Controllers/Taskcontroller.js";


class App {
  listController = new ListController();
  taskController = new taskController();

}

window["app"] = new App();

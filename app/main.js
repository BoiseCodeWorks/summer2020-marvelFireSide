import ValuesController from "./Controllers/ValuesController.js";
import HeroesController from "./Controllers/HeroesController.js";

class App {
  valuesController = new ValuesController();
  heroesController = new HeroesController();
}

window["app"] = new App();

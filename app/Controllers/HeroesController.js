import _hs from "../Services/HeroesService.js"
import store from "../store.js";



function _drawApi() {
  // console.log("api hero draw");
  let template = ""
  let heroes = store.State.apiHeroes
  heroes.forEach(h => template += h.Template)
  document.getElementById("apiHeroes").innerHTML = template
}
function _drawMine() {
  console.log("my hero draw");
  let template = ""
  let heroes = store.State.myHeroes
  heroes.forEach(h => template += h.Template)
  document.getElementById("myHeroes").innerHTML = template
}
export default class HeroesController {
  constructor() {
    console.log("Hi from heroes controller");
    store.subscribe("apiHeroes", _drawApi)
    store.subscribe("myHeroes", _drawMine)
  }

  recruitHero(heroId) {
    _hs.recruitHero(heroId)
  }
  disbandHero(heroId) {
    console.log(heroId);

    _hs.disbandHero(heroId)
  }

}
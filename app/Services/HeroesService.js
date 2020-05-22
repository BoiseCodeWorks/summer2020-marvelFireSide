import Hero from "../Models/Hero.js";
import store from "../store.js";

let _api = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100',
  timeout: 3000
})

let _sandBoxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/tim/heroes',
  timeout: 15000
})

class HeroesService {
  disbandHero(heroId) {
    _sandBoxApi.delete(heroId).then(res => this.getMyHeroes())
  }

  constructor() {
    console.log("hero serv");
    this.getApiHeroes()
    this.getMyHeroes()
  }
  getApiHeroes() {
    _api.get()
      .then(res => {
        console.log(res.data.data.results)
        let heroes = res.data.data.results.map(h => new Hero(h)).filter(h => h.img != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg")
        console.log(heroes);
        store.commit("apiHeroes", heroes)

      })
  }

  recruitHero(heroId) {
    let heroToRecruit = store.State.apiHeroes.find(hero => hero.id == heroId)
    if (heroToRecruit) {
      _sandBoxApi.post("", heroToRecruit).then(res => this.getMyHeroes())
    }
  }

  getMyHeroes() {
    _sandBoxApi.get().then(res => {
      store.commit("myHeroes", res.data.data.map(h => new Hero(h)))
      console.log("myheroes", store.State.myHeroes);

    })
  }
}





const HEROESSERIVCE = new HeroesService()
export default HEROESSERIVCE
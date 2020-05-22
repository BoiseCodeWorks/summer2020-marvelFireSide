export default class Hero {
  constructor(data) {
    console.log("hero");
    this.name = data.name
    this.img = data.img || data.thumbnail.path + "." + data.thumbnail.extension
    this.description = data.description || "Unknown Backstory"
    this.id = data.id || data._id
    this.user = false
    if (data.user) {
      this.user = true
    }
  }

  //can use a ternary to evaluate a property to add or remove attribute or classes
  get Template() {
    return ` <div class="card col-12 col-md-4">
                        <img class="card-img-top" src="${this.img}" alt="">
                        <div class="card-body">
                
                            <h4 class="card-title ${this.user ? "text-primary fa-spin" : ''}">${this.name}</h4>
                            <p class="card-text overflow-content ">${this.description}</p>
                        </div>
                        ${this.SubTemplate}
                    </div>`
  }


  get SubTemplate() {
    if (!this.user) {
      return `                    <button class="btn btn-success" onclick="app.heroesController.recruitHero('${this.id}')"> <i class="fa fa-plus" aria-hidden="true"></i></button>
  `
    }
    return `                    <button class="btn btn-danger" onclick="app.heroesController.disbandHero('${this.id}')"> <i class="fa fa-minus" aria-hidden="true"></i></button>
  `
  }
  //   Character {
  //id(int, optional): The unique ID of the character resource.,
  //name(string, optional): The name of the character.,
  //description(string, optional): A short bio or description of the character.,
  //modified(Date, optional): The date the resource was most recently modified.,
  //resourceURI(string, optional): The canonical URL identifier for this resource.,
  //urls(Array[Url], optional): A set of public web site URLs for the resource.,
  //thumbnail(Image, optional): The representative image for this character.,
  //comics(ComicList, optional): A resource list containing comics which feature this character.,
  //stories(StoryList, optional): A resource list of stories in which this character appears.,
  //events(EventList, optional): A resource list of events in which this character appears.,
  //series(SeriesList, optional): A resource list of series in which this character appears.
  // }
}
class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.api = new Api();
  }

  init() {
    console.log("Инициализация memes app");
  }
}

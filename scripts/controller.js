class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.api = new Api();
  }

  init() {
    const memes = this.api.getMemes();

    this.model.setMemes(memes);

    const memesList = this.model.getMemes();

    this.view.renderMemesSelect(memesList);

    const preview = this.model.getPreview();

    this.view.renderPreview(preview);
  }
}

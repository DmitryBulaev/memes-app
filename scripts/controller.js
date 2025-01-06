class Controller {
  constructor() {
    this.model = new Model({
      onCurrentMemeIdChandge: this.handleModelCurrentMemeChange,
    });

    this.view = new View({
      onMemeChange: this.handleViewMemeChange,
    });

    this.api = new Api();
  }

  init() {
    const memes = this.api.getMemes();
    this.model.setMemes(memes);

    this.model.setCurrentMemeId(memes[0].id);
    const memeId = this.model.getCurrentMemeId();
    const memesList = this.model.getMemes();
    this.view.renderMemesSelect(memesList, memeId);
  }

  handleViewMemeChange(id) {
    this.model.setCurrentMemeId(id);
  }

  handleModelCurrentMemeChange() {
    const preview = {
      ...this.model.getPreview(),
      url: this.model.getCurrentMeme().url,
    };

    this.view.renderPreview(preview);
  }
}

class Controller {
  constructor() {
    this.model = new Model({
      onMemesChange: this.handleModelMemesChange,
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
  }

  handleModelMemesChange = () => {
    const memeId = this.model.getCurrentMemeId();
    const memesList = this.model.getMemes();
    this.view.renderMemesSelect(memesList, memeId);
  };

  handleViewMemeChange = (id) => {
    this.model.setCurrentMemeId(id);
  };

  handleModelCurrentMemeChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
}

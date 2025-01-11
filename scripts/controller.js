class Controller {
  constructor() {
    this.model = new Model({
      onMemesChange: this.handleModelMemesChange,
      onCurrentMemeIdChandge: this.handleModelCurrentMemeChange,
      onTextTopChange: this.handleModelTextTopChange,
      onTextBottomChange: this.handleModelTextBottomChange,
    });

    this.view = new View({
      onMemeChange: this.handleViewMemeChange,
      onTextTopChange: this.handleViewTextTopChange,
      onTextBottomChange: this.handleViewlTextBottomChange,
    });

    this.api = new Api();
  }

  init() {
    this.api.getMemes().then((data) => {
      const memes = data.data.memes;
      memes.length = 100;
      this.model.setMemes(memes);
    });
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

  handleViewTextTopChange = (text) => {
    if (text.length <= 10) {
      this.model.setTextTop(text);
    }
  };

  handleViewlTextBottomChange = (text) => {
    if (text.length <= 10) {
      this.model.setTextBottom(text);
    }
  };

  handleModelTextTopChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };

  handleModelTextBottomChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
}

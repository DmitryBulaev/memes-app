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
    // задать ограничение массива в 100 элементов
    this.api.getMemes().then((data) => {
      const memes = data.data.memes;
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
    // добавить проверку на кол-во символов
    this.model.setTextTop(text);
  };

  handleViewlTextBottomChange = (text) => {
    // добавить проверку на кол-во символов
    this.model.setTextBottom(text);
  };

  handleModelTextTopChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };

  handleModelTextBottomChange = () => {
    this.view.renderPreview(this.model.getPreview());
  };
}

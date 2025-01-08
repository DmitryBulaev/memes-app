class Model {
  constructor({
    onCurrentMemeIdChandge,
    onMemesChange,
    onTextTopChange,
    onTextBottomChange,
  }) {
    this.memes = [];
    this.currentMemeId = null;
    this.textTop = "";
    this.textBottom = "";

    this.onMemesChange = onMemesChange;
    this.onCurrentMemeIdChandge = onCurrentMemeIdChandge;
    this.onTextTopChange = onTextTopChange;
    this.onTextBottomChange = onTextBottomChange;
  }

  setMemes(memes) {
    this.memes = memes;
    this.currentMemeId = memes[0].id;

    this.onMemesChange();
    this.onCurrentMemeIdChandge();
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;

    this.onCurrentMemeIdChandge();
  }

  setTextTop(text) {
    this.textTop = text;

    this.onTextTopChange();
  }

  setTextBottom(text) {
    this.textBottom = text;

    this.onTextBottomChange();
  }

  getMemes() {
    return this.memes;
  }

  getPreview = () => {
    return {
      textTop: this.textTop,
      textBottom: this.textBottom,
      url: this.getCurrentMeme().url,
    };
  };

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getCurrentMeme() {
    let currentMeme = null;

    this.memes.forEach((meme) => {
      if (meme.id === this.getCurrentMemeId()) {
        currentMeme = meme;
      }
    });

    return currentMeme;
  }
}

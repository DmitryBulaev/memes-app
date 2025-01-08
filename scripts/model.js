const PREVIEW_MOCK = {
  textTop: "Когда все пытаются как-то куртиться в этой жизни",
  textBottom: "А ты просто чилловый парень",
};

class Model {
  constructor({ onCurrentMemeIdChandge, onMemesChange }) {
    this.memes = [];
    this.currentMemeId = null;
    this.textTop = "";
    this.textBottom = "";

    this.onMemesChange = onMemesChange;
    this.onCurrentMemeIdChandge = onCurrentMemeIdChandge;
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

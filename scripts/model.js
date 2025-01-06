const PREVIEW_MOCK = {
  textTop: "Когда все пытаются как-то куртиться в этой жизни",
  textBottom: "А ты просто чилловый парень",
};

class Model {
  constructor({ onCurrentMemeIdChandge }) {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;

    this.onCurrentMemeIdChandge = onCurrentMemeIdChandge;
  }

  setMemes(memes) {
    this.memes = memes;
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;

    this.onCurrentMemeIdChandge();
  }

  getMemes() {
    return this.memes;
  }

  getPreview() {
    return this.preview;
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getCurrentMeme() {
    return this.memes[this.getCurrentMemeId];
  }
}

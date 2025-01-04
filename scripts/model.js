const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/9au02y.jpg",
  textTop: "Когда все пытаются как-то куртиться в этой жизни",
  textBottom: "А ты просто чилловый парень",
};

class Model {
  constructor() {
    this.memes = [];
    this.currentMemeId = null;
    this.preview = PREVIEW_MOCK;
  }

  setMemes(memes) {
    this.memes = memes;
  }

  getMemes() {
    return this.memes;
  }

  getPreview() {
    return this.preview;
  }

  setCurrentMemeId(currentMemeId) {
    this.currentMemeId = currentMemeId;
  }

  getCurrentMemeId() {
    return this.currentMemeId;
  }

  getCurrentMeme() {
    return this.memes[this.getCurrentMemeId];
  }
}

const PREVIEW_MOCK = {
  url: "https://i.imgflip.com/9au02y.jpg",
  textTop: "Когда все пытаются как-то куртиться в этой жизни",
  textBottom: "А ты просто чилловый парень",
};

class Model {
  constructor() {
    this.preview = PREVIEW_MOCK;
  }

  getPreview() {
    return this.preview;
  }
}

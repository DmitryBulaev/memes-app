class View {
  constructor() {
    this.selectNode = document.querySelector("#select");
    this.previewTextTopNode = document.querySelector("#text-top");
    this.previewTextBottomNode = document.querySelector("#text-bottom");
    this.previewMemeImageNode = document.querySelector("#meme-image");
  }

  render(preview) {
    const { url, textTop, textBottom } = preview;

    this.previewMemeImageNode.src = url;
    this.previewTextTopNode.innerText = textTop;
    this.previewTextBottomNode.innerText = textBottom;
  }
}

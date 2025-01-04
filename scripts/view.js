class View {
  constructor() {
    this.selectNode = document.querySelector("#select");
    this.previewTextTopNode = document.querySelector("#text-top");
    this.previewTextBottomNode = document.querySelector("#text-bottom");
    this.previewMemeImageNode = document.querySelector("#meme-image");
  }

  renderPreview(preview) {
    const { url, textTop, textBottom } = preview;

    this.previewMemeImageNode.src = url;
    this.previewTextTopNode.innerText = textTop;
    this.previewTextBottomNode.innerText = textBottom;
  }

  renderMemesSelect(memes, currentMemeId) {
    memes.forEach((meme) => {
      const { id, name } = meme;

      const optionNode = document.createElement("option");
      optionNode.setAttribute("value", id);
      optionNode.innerText = name;

      if (id === currentMemeId) {
        optionNode.setAttribute("selected", true);
      }

      this.selectNode.insertAdjacentElement("afterbegin", optionNode);
    });
  }
}

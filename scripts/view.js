class View {
  constructor({ onMemeChange, onTextTopChange, onTextBottomChange }) {
    this.previewTextTopNode = document.querySelector("#text-top");
    this.previewTextBottomNode = document.querySelector("#text-bottom");
    this.previewMemeImageNode = document.querySelector("#meme-image");

    this.selectNode = document.querySelector("#select");
    this.textTopInputNode = document.querySelector("#input-top");
    this.textBottomInputNode = document.querySelector("#input-bottom");

    this.onMemeChange = onMemeChange;
    this.onTextTopChange = onTextTopChange;
    this.onTextBottomChange = onTextBottomChange;

    this.selectNode.addEventListener("change", this._handleSelectChange);
    this.textTopInputNode.addEventListener("input", this._handleTextTopChange);
    this.textBottomInputNode.addEventListener("input", this._handleTextBottomChange);
  }

  renderPreview(preview) {
    const { url, textTop, textBottom } = preview;

    this.previewMemeImageNode.src = url;
    this.previewTextTopNode.innerText = textTop;
    this.previewTextBottomNode.innerText = textBottom;
  }

  renderMemesSelect(memes) {
    memes.forEach((meme) => {
      const { id, name } = meme;

      const optionNode = document.createElement("option");

      optionNode.setAttribute("value", id);
      optionNode.innerText = name;

      this.selectNode.append(optionNode);
    });
  }

  _handleSelectChange = () => {
    const id = this.selectNode.value;

    this.onMemeChange(id);
  };

  _handleTextTopChange = (event) => {
    this.onTextTopChange(event.target.value);
  };

  _handleTextBottomChange = (event) => {
    this.onTextBottomChange(event.target.value);
  };
}

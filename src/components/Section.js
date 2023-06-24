export default class Section {
  constructor(renderer, selectorContainer) {
    this._container = document.querySelector(selectorContainer)
    this.renderer = renderer
  }

  addCardFromArray(cardData) {
    cardData.forEach(element => {
     this.renderer(element)
    })
  }

  addItem(domElement){
    this._container.append(domElement);
  }
}
export default class Section {
  constructor({ items, renderer}, selectorContainer) {
    this._container = document.querySelector(selectorContainer)
    this._initialCard = items
    this.renderer = renderer
  }

  addCardFromArray() {
    this._initialCard.forEach(element => {
     this.addItem(this.renderer(element)) 

    })
  }

  addItem(DomElement){
    this._container.prepend(DomElement);
  }
}
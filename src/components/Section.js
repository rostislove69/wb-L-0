export default class Section {
  constructor({renderer}, goodsSelector, missingGoodsSelector){
    this._renderer = renderer;
    this._goodsContainer = document.querySelector(goodsSelector);
    this._missingGoodsContainer = document.querySelector(missingGoodsSelector);
  }

  renderItems(data){
    Array.from(data).forEach(item => {
        this._renderer(item);
    });
  }

  addItem(element, status){
    if(status == true){
      this._goodsContainer.append(element);
    } else if (status == false){
      this._missingGoodsContainer.append(element);
    }
  }
}
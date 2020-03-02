
var ButtonController = function(id,value,options) {
  var btnModel, btnView, scope = this;
  var init =function(){
    btnModel = new ButtonModel(id, value, options);
    btnView = new ButtonView(btnModel);
    btnView.onclick = function (event) {
      scope.onClickHandler(event,id,value);
    }
  }

  this.onClickHandler = function (event,id,value){
  }

  this.getButtonElement = function(){
    return btnView;
  }
  init();
  return this;
}



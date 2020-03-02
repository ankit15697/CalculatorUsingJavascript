var OperatorButtonController = function (id, value, options) {
    ButtonController.call(this, id, value, options);

    var _this=this;
    var optBtnView,optBtnModel;
    var init =function(){
        optBtnModel=new OperatorButtonModel(id, value, options);
        optBtnView = new OperatorButtonView(optBtnModel);
        optBtnView.onclick = function (event) {
          _this.onClickHandler(event, id, value);
        }
      }
      init();
      return this;
}

OperatorButtonController.prototype = Object.create (new ButtonController());
OperatorButtonController.prototype.constructor = OperatorButtonController;
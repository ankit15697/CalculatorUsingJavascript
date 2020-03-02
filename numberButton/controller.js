
var NumberButtonController = function (id, value, options) {
    ButtonController.call(this, id, value, options);

    var _this=this;
    var numBtnView,numBtnModel;
    var init =function(){
        numBtnModel=new NumberButtonModel(id, value, options);
        numBtnView = new NumberButtonView(numBtnModel);
        numBtnView.onclick = function (event) {
          _this.onClickHandler(event, id, value);
        }
      }
      init();
      return this;
}
NumberButtonController.prototype = Object.create (new ButtonController());
NumberButtonController.prototype.constructor = NumberButtonController;

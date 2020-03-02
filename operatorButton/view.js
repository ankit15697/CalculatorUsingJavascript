var OperatorButtonView = function(model) {

    ButtonView.call(this, model);
    var _this=this;

   // This is used to initialize the data
   var init = function() {
      _this.createButtonElement();
   }

   init();
   return this.btnElement;
};

OperatorButtonView.prototype = Object.create (ButtonView.prototype);
OperatorButtonView.prototype.constructor = OperatorButtonView;
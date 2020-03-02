// This will be responsible for creating the view of Numeric Buttons

// This is used to create button view

var NumberButtonView = function(model) {

    ButtonView.call(this, model);
    var _this=this;

   // This is used to initialize the data
   var init = function() {
      _this.createButtonElement();
   }

   init();
   return this.btnElement;
};
NumberButtonView.prototype = Object.create (ButtonView.prototype);
NumberButtonView.prototype.constructor = NumberButtonView;



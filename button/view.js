// This is used to create button view
var ButtonView = function(model) {
     var btnElement;
   // This is used to initialize  the data
   var _this=this;
   var init = function() {
      _this.createButtonElement();
   }

   // This function will create button element
   _this.createButtonElement = function() {
       btnElement = document.createElement("button");
       btnElement.innerHTML = model.value;
       btnElement.setAttribute("value",model.value);
       btnElement.setAttribute("id",model.id);
       btnElement.style.width=model.options.width;
       btnElement.style.height=model.options.height;
   }

   init();

   // Button Element will be returned
   return btnElement;
};

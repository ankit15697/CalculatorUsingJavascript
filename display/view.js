// This will be responsible for creating the screen
var DisplayView = function (model) {
     var screenElement;
     var init = function () {
         createScreenElement();
     }
     var createScreenElement = function () {
         screenElement = document.createElement("input");
         screenElement.setAttribute("id", model.id);
         screenElement.setAttribute("value", model.options.value);
         screenElement.style.height = model.options.height;
         screenElement.style.width = model.options.width;
     }

     init();
     return screenElement;
}
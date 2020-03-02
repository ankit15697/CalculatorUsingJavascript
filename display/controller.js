// This is used to create screen controller

var DisplayController = function (id, options) {
  var scope, displayModel, displayView;
  var init =function(){
    displayModel=new DisplayModel(id, options);
    displayView = new DisplayView(displayModel);
  }

  this.displayText = function(text) {
    displayView.value = text;
  }

  // This function will return the view of display
  this.getDisplayElement = function() {
    return displayView;
  }

  init();
  return this;
}


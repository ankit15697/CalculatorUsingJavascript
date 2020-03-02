// This will be used to create calculator view
var calculatorView = function (model, numericButtons, operatorButtons, display) {
    var _this=this;
    var calculatorView;
    var numberButtonsView,operatorButtonsView;
    var init = function () {
        numberButtonsView=document.createElement("div");
        numberButtonsView.style.height='auto';
        numberButtonsView.style.width='auto';
        numberButtonsView.setAttribute("name","numberButton");
        operatorButtonsView = document.createElement("div");
        operatorButtonsView.style.height = 'auto';
        operatorButtonsView.style.width = 'auto';
        operatorButtonsView.setAttribute("name","operatorButton");
        _this.renderCalculator();
    }

    this.renderCalculator = function () {

        // Creating calculator View
        calculatorView = document.createElement("div");
        calculatorView.setAttribute("tabindex","-1");
        calculatorView.setAttribute("id",model.id);
        calculatorView.style.height=model.options.height;
        calculatorView.style.width=model.options.width;
        calculatorView.style.backgroundColor= model.options.color;
        document.body.appendChild(calculatorView);
        calculatorView.appendChild(display);
        putButtons ();
        calculatorView.appendChild(numberButtonsView);
        calculatorView.appendChild(operatorButtonsView);
    }

     var putButtons = function () {

        // Put Number
        for (var i = 0; i < numericButtons.length; i++) {
            numberButtonsView.appendChild(numericButtons[i]);
        }

        // Put operator buttons
        for(var i = 0; i < operatorButtons.length; i++) {
            operatorButtonsView.appendChild(operatorButtons[i]);
        }
    }
    init();
    return this;
}
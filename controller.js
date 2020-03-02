// This class will be responsible for creating the Controller of the calculator
var CalculatorController = function(id) {
    var cId, calcModel, display, currentDisplayValue, numberButtons=[], operatorButtons=[], scope=this;
    var calcView;
    var sendDisplay;
    var checkResult=true;
    var init =function(){
        cId='cId-' + id;
        renderCalculator();
        addBodyEventListener();
    }

    var renderCalculator = function() {

        calcModel = new CalculatorModel(cId);
        //get display
        var disId = cId +'-display';
        display = new DisplayController(disId);
        sendDisplay =display.getDisplayElement();
        //get the number buttons
        getNumberButtons(calcModel);
        getOperatorButtons(calcModel);

        calcView = new calculatorView(calcModel, numberButtons, operatorButtons, sendDisplay);

    }
    // This function will return the number buttons
    function getNumberButtons (model) {
        var nb = model.options.numberButtons;
        var btnCtl;
        for(var i = 0; i < nb.length; i++) {
            btnCtl = new NumberButtonController(cId+'-nb-'+i, nb[i]);
            btnCtl.onClickHandler = function(event, id, value) {
                calculateValues('number', value);
            }
            numberButtons.push(btnCtl.getButtonElement());
        }
    }

    // This function will return operator buttons
    function getOperatorButtons (model){
        var ob = model.options.operatorButtons;
        var btnCtl;

        for(var i=0;i<ob.length;i++){
            btnCtl=new OperatorButtonController(cId+'-ob'+ob[i], ob[i]);
            btnCtl.onClickHandler = function(event, id, value) {
                calculateValues('operator', value);
            }
            operatorButtons.push(btnCtl.getButtonElement());
        }
    }

    // This function is responsible for calculating the values
    var calculateValues = function(type, value) {
        var calcValue = value;
        var currentValue=display.getDisplayElement().value
        if(type === 'operator') {
                if(value === "C"){
                    calcValue ="0";
                    checkResult=true;
                }
                else if(value === "="){
                    calcValue=eval(currentValue);
                    checkResult=true;
                }
                else{
                    calcValue=currentValue+""+value;
                    checkResult=false;
                }
        }
        else {
                if(checkResult) {
                    calcValue=value;
                    checkResult=false;
                }
                else{
                     calcValue=currentValue+""+value;
                    }
        }
        updateDisplayValue(calcValue);
    }

    // This function will update display value which will be shown in the screen
    var updateDisplayValue = function(value) {
        currentDisplayValue = value;
        display.getDisplayElement().value = currentDisplayValue;
    }

    var addBodyEventListener=function () {

        document.addEventListener("keypress",function(event){
        console.log(event.keyCode);
        var extractValue=String.fromCharCode(event.keyCode);
        if (calcModel.options.operatorButtons.includes(extractValue)) {
               calculateValues('operator',extractValue);
         }
        else if (event.keyCode >= 48 && event.keyCode <= 57){
            calculateValues('numeric',extractValue);
        }

        });
    }
    init();
  }


  
  
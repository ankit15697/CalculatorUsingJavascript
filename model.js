// This is calculator model and will be used to store calculator info
var CalculatorModel = function(id,options) {
        this.options = {
            type:'basic',
            numberButtons :[0,1,2,3,4,5,6,7,8,9],
            operatorButtons :['C','*','/','+','-','='],
            height:'320px',
            width:'320px',
            color:'grey'
        };
        this.id = id;
}
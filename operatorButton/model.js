var OperatorButtonModel = function(id,value,options){
    ButtonModel.call(this,id,value,options);
    this.type="operator";
};
OperatorButtonModel.prototype = Object.create(new ButtonModel());
OperatorButtonModel.prototype.constructor = NumberButtonModel;

// This will inherit the properties of the Button Model

var NumberButtonModel = function(id,value,options){
    ButtonModel.call(this,id,value,options);
    this.type="numeric";
};
NumberButtonModel.prototype = Object.create(new ButtonModel());
NumberButtonModel.prototype.constructor = NumberButtonModel;

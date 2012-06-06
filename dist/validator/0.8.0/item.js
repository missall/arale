define("#validator/0.8.0/item",["$","./parser","widget","./async","./rule"],function(require,exports,module){function _metaValidate(ele,rules,display,callback){if(!$.isArray(rules))throw"No validation rule specified or not specified as an array.";var tasks=[];$.each(rules,function(i,item){var obj=parser.parseRule(item),ruleName=obj.name,param=obj.param,rule=Rule.getOperator(ruleName);if(!rule)throw'Validation rule with name "'+ruleName+'" cannot be found.';var options=$.extend({},param,{element:ele,display:param&&param.display||display||$(ele).attr("name"),rule:ruleName});tasks.push(function(cb){rule(options,cb)})}),async.series(tasks,function(err,results){callback&&callback(err,results[results.length-1])})}var $=require("$"),parser=require("./parser"),Widget=require("widget"),async=require("./async"),Rule=require("./rule"),Item=Widget.extend({attrs:{rule:"",display:null,triggerType:null,required:!1,checkNull:!0},setup:function(){this.get("required")&&(!this.get("rule")||this.get("rule").indexOf("required")<0)&&this.set("rule","required "+this.get("rule"))},execute:function(callback){function upperFirstLetter(str){return str[0].charAt(0).toUpperCase()+str.slice(1)}this.trigger("itemValidate",this.element);var rules=parser.parseRules(this.get("rule")),that=this;return rules?(_metaValidate(this.element,rules,this.get("display"),function(err,msg){if(err)var message=that.get("errormessage")||that.get("errormessage"+upperFirstLetter(err))||msg;else var message=msg;that.trigger("itemValidated",err,message,that.element),callback&&callback(err,message,that.element)}),this):this}});module.exports=Item});
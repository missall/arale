define("#dialog/0.9.0/dialog",["$","position","overlay","mask","events"],function(a,b,c){var d=a("$"),e=a("position"),f=a("overlay"),g=a("mask"),h=a("events"),i=f.extend({options:{trigger:null,triggerType:"click",comfirmElement:null,cancelElement:null,closeElement:null,hasMask:!1,onComfirm:function(){},onClose:function(){}},parseElement:function(){i.superclass.parseElement.call(this);var a=this.options;a.trigger=d(a.trigger),a.comfirmElement=this.$(a.comfirmElement),a.cancelElement=this.$(a.cancelElement),a.closeElement=this.$(a.closeElement)},delegateEvents:function(){var a=this.options,b=this;a.trigger.bind(a.triggerType,function(){a.hasMask&&g.show(),b.render().show()});var c=function(c){c.preventDefault(),b.trigger("comfirm"),a.hasMask&&g.hide(),b.hide()};a.comfirmElement.bind("click",c);var d=function(c){c.preventDefault(),b.trigger("close"),a.hasMask&&g.hide(),b.hide()};a.cancelElement.bind("click",d),a.closeElement.bind("click",d),h.mixTo(this.element[0]),this.element[0].on("comfirm",c),this.element[0].on("close cancel",d)}});c.exports=i});
define("#dropdown/0.9.1/dropdown",["jquery","overlay"],function(a,b,c){var d=a("jquery"),e=a("overlay"),f=e.extend({attrs:{trigger:{value:null,getter:function(a){return d(a)}},triggerType:{value:"mouseenter",getter:function(a){return a.replace(/hover|mouseover/i,"mouseenter")}},delay:100,timeout:100,offset:{value:[],getter:function(a){return a.length||(a=[0,this.get("trigger").height()]),a}},visible:!1},_bindTrigger:function(){var a=this,b=this.get("trigger"),c=this.get("triggerType"),d,e,f=function(){window.clearTimeout(d),e=window.setTimeout(function(){a.set("visible",!1)},a.get("timeout"))},g=function(){window.clearTimeout(e)};b.on(c,function(b){b.preventDefault(),window.clearTimeout(e),c==="click"?a.set("visible",!a.get("visible")):d=window.setTimeout(function(){a.set("visible",!0)},a.get("delay"))}),b.add(this.element).hover(g,f)},_onChangeVisible:function(a){a?this.show():this.hide()},_onChangeOffset:function(a){debuggervar b=this.get("align"),c=this.get("trigger");this.set("align",{selfXY:b.selfXY,baseElement:c[0],baseXY:a})},setup:function(){f.superclass.setup.call(this),this._bindTrigger()}});c.exports=f});
define("#switchable/0.9.0/carousel",["./switchable"],function(a,b,c){var d=a("./switchable"),e="ui-switchable-",f="prevBtn",g="nextBtn",h=e+"panel-internal",i=c.exports=d.extend({attrs:{circular:!0,prevButtonClass:e+"prev-btn",nextButtonClass:e+"next-btn",disableButtonClass:e+"disable-btn"},_bindAction:function(){var a=this;i.superclass._bindAction.apply(this,arguments);var b=this.element,c=this.get("circular");this[f]=this.$("."+this.get("prevButtonClass")),this[g]=this.$("."+this.get("nextButtonClass"));var d={};d["mousedown ."+this.get("prevButtonClass")]=function(a){a.preventDefault(),(this.get("activeIndex")!=0||this.get("circular"))&&this.prev()},d["mousedown ."+this.get("nextButtonClass")]=function(a){var b=this.length-1;a.preventDefault(),(this.get("activeIndex")!=b||this.get("circular"))&&this.next()},c||this.on("switch",function(b,c){a.updateBtnStatus(b,c)}),d["click ."+h]=function(a){var b=a.currentTarget;this.trigger("itemSelected",{item:b})},this.delegateEvents(d)},updateBtnStatus:function(a,b){var c=this.get("disableButtonClass"),d=$(this[f]),e=$(this[g]);d.removeClass(c),e.removeClass(c),a==0&&d.addClass(c),a==this.length-1&&e.addClass(c)}})});
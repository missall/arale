define("#validator/0.8.2/validator-mobile",["#widget/0.9.16/widget","#base/0.9.16/base","#class/0.9.2/class","#events/0.9.1/events","#base/0.9.16/aspect","#base/0.9.16/attribute","#zepto/0.8.0/zepto","#widget/0.9.16/daparser","#widget/0.9.16/auto-render","#validator/0.8.2/core","#validator/0.8.2/async","#validator/0.8.2/utils","#validator/0.8.2/rule","#validator/0.8.2/item"],function(e,t,n){var r=e("#validator/0.8.2/core"),i=e("#widget/0.9.16/widget"),s=e("#zepto/0.8.0/zepto"),o=r.extend({events:{"mouseenter .{{attrs.inputClass}}":"mouseenter","mouseleave .{{attrs.inputClass}}":"mouseleave","mouseenter .{{attrs.textareaClass}}":"mouseenter","mouseleave .{{attrs.textareaClass}}":"mouseleave","focus .{{attrs.itemClass}}":"focus","blur .{{attrs.itemClass}}":"blur"},attrs:{explainClass:"ui-form-explain",itemClass:"ui-form-item",itemHoverClass:"ui-form-item-hover",itemFocusClass:"ui-form-item-focus",itemErrorClass:"ui-form-item-error",inputClass:"ui-input",textareaClass:"ui-textarea",showMessage:function(e,t){this.getExplain(t).html(e),this.getItem(t).addClass(this.get("itemErrorClass"))},hideMessage:function(e,t){this.getExplain(t).html(t.data("explain")||" "),this.getItem(t).removeClass(this.get("itemErrorClass"))}},addItem:function(e){o.superclass.addItem.apply(this,[].slice.call(arguments));var t=this.query(e.element);return this._saveExplainMessage(t),this},_saveExplainMessage:function(e){var t=this,n=e.element,r=n.data("explain");!r&&n.data("explain",n.attr("data-explain")||this.getExplain(n).html())},getExplain:function(e){var t=this.getItem(e),n=t.find("."+this.get("explainClass"));if(n.length==0)var n=s('<div class="'+this.get("explainClass")+'"></div>').appendTo(t);return n},getItem:function(e){e=s(e);var t=e.parents("."+this.get("itemClass"));return t},mouseenter:function(e){this.getItem(e.target).addClass(this.get("itemHoverClass"))},mouseleave:function(e){this.getItem(e.target).removeClass(this.get("itemHoverClass"))},focus:function(e){var t=e.target;this.getItem(t).removeClass(this.get("itemErrorClass")),this.getItem(t).addClass(this.get("itemFocusClass")),this.getExplain(t).html(s(t).data("explain")||" ")},blur:function(e){this.getItem(e.target).removeClass(this.get("itemFocusClass"))}});n.exports=o});
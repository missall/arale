define("#dialog/0.9.0/confirmBox",["$","animDialog"],function(a,b,c){var d=a("$"),e=a("animDialog"),f=e.extend({template:'<div class="ui-confirmBox">                    <div class="ui-confirmBox-action">                        <a title="关闭" class="ui-confirmBox-close" href="javascript:;">×</a>                    </div>                    <div class="ui-confirmBox-box">                        <div class="ui-confirmBox-title sl-linear-light"><h2></h2></div>                        <div class="ui-confirmBox-container">                            <div class="ui-confirmBox-content"></div>                            <div class="ui-confirmBox-operation">                                <div class="ui-button ui-button-sorange ui-confirmBox-confirm">                                    <a href="javascript:;" class="ui-button-text">确定</a>                                </div>                                <div class="ui-button ui-button-swhite ui-confirmBox-cancel">                                    <a href="javascript:;" class="ui-button-text">取消</a>                                </div>                            </div>                        </div>                    </div>               </div>',attrs:{confirmElement:".ui-confirmBox-confirm",cancelElement:".ui-confirmBox-cancel",closeElement:".ui-confirmBox-close",titleElement:".ui-confirmBox-title h2",title:"默认标题",contentElement:".ui-confirmBox-content",content:"默认内容",width:500,hasMask:!0,effect:null,align:{selfXY:["50%","50%"],baseXY:["50%","38%"]},hasTitle:!0,hasOk:!0,hasCancel:!0,hasCloseX:!0},setup:function(){e.superclass.setup.call(this),this.get("hasTitle")||this.$(".ui-confirmBox-title").remove(),!this.get("hasOk")&&this.get("confirmElement")&&this.get("confirmElement").remove(),!this.get("hasCancel")&&this.get("cancelElement")&&this.get("cancelElement").remove(),!this.get("hasCloseX")&&this.get("closeElement")&&this.get("closeElement").remove(),!this.get("hasOk")&&!this.get("hasCancel")&&this.$(".ui-confirmBox-operation").remove()}});f.message=function(a,b){var c=(new f({content:a,className:"ui-confirmBox-message",hasTitle:!1,hasOk:!1,hasCancel:!1,hasCloseX:!1,hasMask:!1,effect:{type:"slide"},width:"auto",align:{selfXY:["50%","0%"],baseXY:["50%","0%"]}})).show();setTimeout(function(){c.hide()},b||4e3)},f.alert=function(a,b){(new f({content:a,hasTitle:!1,hasCancel:!1,hasCloseX:!1,onConfirm:function(){b&&b(),this.hide()}})).show()},f.confirm=function(a,b,c,d){(new f({content:a,title:b||"确认框",hasCloseX:!1,onConfirm:function(){c&&c(),this.hide()},onClose:function(){d&&d()}})).show()},c.exports=f});
!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=66)}({66:function(t,e){PennController._AddElementType("Scale",function(t){function e(){this.table.find("input").attr("disabled",!0),this.table.find("td").css("cursor",""),this.disabled=!0}function i(){if("slider"==this.scaleType&&"vertical"==this.orientation){let t=this.table.find("input");this.table.css({"table-layout":"fixed",height:t.width(),width:this.table.width()-t.width()+t.height()+10+"px"}),t.parent().css("width",t.height()),t.css("margin-left",-.5*(t.width()-t.height())+"px")}}function s(){let t=this.defaultValue,e=this.orientation,s=this.scaleType;this.table.empty();let n=[];for(let e=0;e<this.buttons.length;e++){let i=$("<td>").addClass("PennController-"+this.type+"-scaleButton"),h=$("<td>").addClass("PennController-"+this.type+"-label"),o=this.buttons[e];switch(h.html(o),o||(o=e),s){case"buttons":i.html(o),this.disabled||i.css("cursor","pointer"),i.click(()=>{this.disabled||(this.choice(o),this.table.find("td").css("border",""),i.css("border","dotted 1px gray"))}),t!=o&&t!=e||(i.css("border","dotted 1px gray"),this.choices.push(["Default",t,Date.now(),"button"]));break;case"slider":if(t==o||t==e)var l=e;break;case"radio":default:let n=$("<input>").attr({name:this.id,value:o,type:"radio"});t!=o&&t!=e||(n.attr("checked",!0),this.choices.push(["Default",t,Date.now(),"radio"])),this.disabled&&n.attr("disabled",!0),i.append(n),n.click(()=>this.choice(o))}n.push([i,h])}if("slider"==s){var h=$("<input>").attr({type:"range",min:"0",max:String(this.buttons.length-1),value:String((this.buttons.length-1)/2),step:"1"});void 0!=l&&(h.attr("value",l),this.choices.push(["Default",t,Date.now(),"slider"])),this.disabled&&h.attr("disabled",!0),h[0].onchange=(()=>this.choice(h[0].value))}if(e&&"horizontal"!=e)n.map(t=>{let e=$("<tr>");e.append(t[0]),"top"==this.labels?e.prepend(t[1]):"bottom"==this.labels&&e.append(t[1]),this.table.append(e)}),h&&(n[0][0].after($("<td>").attr("rowspan",n.length).append(h.css({transform:"rotate(-90deg)"}))),n.map(t=>t[0].css("width",0)),this.jQueryElement.parent().length&&i.apply(this));else{let t=$("<tr>").addClass("PennController-"+this.type+"-scale"),e=$("<tr>").addClass("PennController-"+this.type+"-labels");n.map(i=>{t.append(i[0].css("text-align","center")),e.append(i[1].css("text-align","center"))}),this.table.append(t),"top"==this.labels?this.table.prepend(e):"bottom"==this.labels&&this.table.append(e),h&&t.after($("<tr>").append($("<td>").attr("colspan",n.length).append(h.css("width","100%"))))}}this.immediate=function(e,...i){i.length?Number(i[0])>0?this.buttons=new Array(Number(i[0])):this.buttons=i:console.error("Invalid parameters for scale "+e+" in PennController #"+t.controllers.underConstruction.id)},this.uponCreation=function(t){this.table=$("<table>"),this.jQueryElement=$("<div>").css("display","inline-block").append(this.table),this.choices=[],this.log=!1,this.labels=!1,this.disabled=!1,this.vertical=!1,this.scaleType="radio",this.defaultValue=null,this.orientation="horizontal",this.choice=(t=>{this.disabled||this.choices.push(["Choice",t,Date.now(),this.scaleType])}),t()},this.end=function(){if(this.log&&this.log instanceof Array)if(this.choices.length)if(1==this.choices.length)t.controllers.running.save(this.type,this.id,...this.choices[0]);else if(this.log.indexOf("all")>-1)for(let e in this.choices)t.controllers.running.save(this.type,this.id,...this.choices[e]);else this.log.indexOf("first")>-1&&t.controllers.running.save(this.type,this.id,...this.choices[0]),this.log.indexOf("last")>-1&&t.controllers.running.save(this.type,this.id,...this.choices[this.choices.length-1]);else t.controllers.running.save(this.type,this.id,"Choice","NA","Never","No selection happened")},this.value=function(){return this.choices.length?this.choices[this.choices.length-1][1]:NaN},this.actions={print:function(e,n){s.apply(this);t.elements.standardCommands.actions.print.apply(this,[()=>{i.apply(this),e()},n])},wait:function(t,e){if("first"==e&&this.choices.length)t();else{let i=!1,s=this.choice;this.choice=(n=>{s.apply(this,[n]),i||(e instanceof Object&&e._runPromises&&e.success?e._runPromises().then(e=>{"success"==e&&(i=!0,t())}):(i=!0,t()))})}}},this.settings={button:function(t){this.scaleType="buttons",s.apply(this),t()},default:function(e,i){this.buttons.indexOf(i)>-1||Number(i)>=0&&Number(i)<this.buttons.length?this.defaultValue=i:console.warn("Invalid default value for scale "+this.id+" in controller #"+t.controllers.running.id,i),e()},disable:function(t){e.apply(this),t()},enable:function(t){(function(){this.jQueryElement.find("input").removeAttr("disabled"),this.jQueryElement.find("td.PennController-"+this.type+"-scaleButton").css("cursor","pointer"),this.disabled=!1}).apply(this),t()},horizontal:function(t){this.orientation="horizontal",t()},labels:function(t,e){this.labels=e,t()},log:function(t,...e){e.length?this.log=e:this.log=["last"],t()},once:function(t){if(this.hasClicked)e.apply(this);else{let t=this.choice;this.choice=(i=>{t.apply(this,[i]),e.apply(this)})}t()},radio:function(t){this.scaleType="radio",s.apply(this),t()},slider:function(t,e){this.scaleType="slider",s.apply(this),t()},vertical:function(t){this.orientation="vertical",t()}},this.test={selected:function(t,e){if(this.choices.length){if(void 0==e)return!0;if(e==this.choices[this.choices.length-1][1])return!0;{let t=this.buttons.indexOf(e);return t>-1&&e==this.buttons[t]}}return!1}}})}});
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=71)}({71:function(e,t){window.PennController._AddElementType("Canvas",function(e){this.immediate=function(e,t,n){this.width=t,this.height=n},this.uponCreation=function(e){this.jQueryElement=$("<div>").css({width:this.width,height:this.height,overflow:"visible",position:"relative",display:"inline-block"}),this.elementCommands=[],this.showElement=((e,t,n,i)=>new Promise(r=>{e.print(this.jQueryElement)._runPromises().then(()=>{let o=e._element,s=o.jQueryElement,a=String(t).match(/^(.+) at (.+)$/i),l=String(n).match(/^(.+) at (.+)$/i);a&&a[2].match(/^\d+(\.\d+)?$/)&&(a[2]=String(a[2])+"px"),l&&l[2].match(/^\d+(\.\d+)?$/)&&(l[2]=String(l[2])+"px"),a&&(t=a[1].match(/center|middle/i)?"calc("+a[2]+" - "+o.jQueryContainer.width()/2+"px)":a[1].match(/right/i)?"calc("+a[2]+" - "+o.jQueryContainer.width()+"px)":a[2]),l&&(n=l[1].match(/center|middle/i)?"calc("+l[2]+" - "+o.jQueryContainer.height()/2+"px)":a[1].match(/bottom/i)?"calc("+l[2]+" - "+o.jQueryContainer.height()+"px)":l[2]),o.jQueryContainer?(o.jQueryContainer.css({position:"absolute",left:t,top:n}),(Number(i)>0||Number(i)>0)&&o.jQueryContainer.css("z-index",i)):(s.css({position:"absolute",left:t,top:n}),(Number(i)>0||Number(i)>0)&&s.css("z-index",i)),r()})})),e()},this.end=function(){this.log&&(this.printTime?e.controllers.running.save(this.type,this.id,"Print",this.printTime,"NULL"):e.controllers.running.save(this.type,this.id,"Print","NA","Never"))},this.value=function(){return this.elementCommands.length},this.actions={print:async function(t,n){let i=this;e.elements.standardCommands.actions.print.apply(this,[async function(){for(let e in i.elementCommands)await i.showElement(...i.elementCommands[e]);t()},n])}},this.settings={add:function(e,t,n,i,r){i.hasOwnProperty("_element")&&i._element.jQueryElement instanceof jQuery?(this.elementCommands.push([i,t,n,r]),this.jQueryElement.parent().length?this.showElement(i,t,n,r).then(e):e()):(console.warn("Invalid element referenced to add to canvas"),e())}}})}});
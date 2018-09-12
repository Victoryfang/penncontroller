!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=73)}({73:function(e,t){PennController._AddElementType("Audio",function(e){this.immediate=function(t,s){let i=!s.match(/^http/i);this.resource=e.resources.fetch(s,function(e){this.object=new Audio(this.value),this.object.addEventListener("canplay",e)},i)},this.uponCreation=function(e){this.resource.object.controls=!0,this.audio=this.resource.object,this.hasPlayed=!1,this.disabled=!1,this.resource.object.style=null,this.resource.object.currentTime=0,this.jQueryElement=$(this.audio),this.jQueryDisable=null,this.playEvents=[],this.endEvents=[],this.pauseEvents=[],this.seekEvents=[],this.bufferEvents=[],this.whatToSave=[],this.resource.object.onplay=(()=>{this.playEvents.push(["play",this.audio.currentTime,Date.now()])}),this.resource.object.onended=(()=>{this.hasPlayed=!0,this.endEvents.push(["end",this.audio.currentTime,Date.now()])}),this.resource.object.onpause=(()=>{this.pauseEvents.push(["pause",this.audio.currentTime,Date.now()])}),this.resource.object.onseeked=(()=>{this.seekEvents.push(["seek",this.audio.currentTime,Date.now()])}),this.resource.object.waiting=(()=>{this.bufferEvents.push(["buffer",this.audio.currentTime,Date.now()])}),this.printDisable=(()=>{this.jQueryDisable instanceof jQuery&&this.jQueryDisable.remove(),this.jQueryDisable=$("<div>").css({position:"absolute",display:"inline-block","background-color":"gray",opacity:.5,width:this.jQueryElement.width(),height:this.jQueryElement.height()}),this.jQueryElement.before(this.jQueryDisable),this.jQueryElement.addClass("PennController-"+this.type+"-disabled")}),e()},this.end=function(){if(this.whatToSave&&this.whatToSave.indexOf("play")>-1){this.playEvents.length||e.controllers.running.save(this.type,this.id,"play","NA","Never");for(let t in this.playEvents)e.controllers.running.save(this.type,this.id,...this.playEvents[t])}if(this.whatToSave&&this.whatToSave.indexOf("end")>-1){this.endEvents.length||e.controllers.running.save(this.type,this.id,"end","NA","Never");for(let t in this.endEvents)e.controllers.running.save(this.type,this.id,...this.endEvents[t])}if(this.whatToSave&&this.whatToSave.indexOf("pause")>-1){this.pauseEvents.length||e.controllers.running.save(this.type,this.id,"pause","NA","Never");for(let t in this.pauseEvents)e.controllers.running.save(this.type,this.id,...this.pauseEvents[t])}if(this.whatToSave&&this.whatToSave.indexOf("seek")>-1){this.seekEvents.length||e.controllers.running.save(this.type,this.id,"seek","NA","Never");for(let t in this.seekEvents)e.controllers.running.save(this.type,this.id,...this.seekEvents[t])}for(let t in this.bufferEvents)e.controllers.running.save(this.type,this.id,...this.bufferEvents[t]);this.jQueryDisable&&this.jQueryDisable.remove()},this.value=function(){return this.endEvents.length?this.endEvents[this.endEvents.length-1][2]:0},this.actions={play:function(e){this.hasOwnProperty("audio")&&this.audio instanceof Audio?this.audio.play():console.warn("No audio to play for element ",this.id),e()},pause:function(e){this.audio.pause(),e()},print:function(t,s){e.elements.standardCommands.actions.print.apply(this,[()=>{this.disabled&&this.printDisable(),t()},s])},stop:function(e){this.audio.pause(),this.currentTime=0,e()},wait:function(e,t){if("first"==t&&this.hasPlayed)e();else{let s=!1,i=this.audio.onended;this.audio.onended=function(...n){i.apply(this,n),s||(t instanceof Object&&t._runPromises&&t.success?t._runPromises().then(t=>{"success"==t&&(s=!0,e())}):(s=!0,e()))}}}},this.settings={disable:function(e){this.printDisable(),this.disabled=!0,e()},enable:function(e){this.jQueryDisable instanceof jQuery&&(this.disabled=!1,this.jQueryDisable.remove(),this.jQueryDisable=null,this.jQueryElement.removeClass("PennController-"+this.type+"-disabled")),e()},once:function(e){if(this.hasPlayed)this.disabled=!0,e();else{let t=this.audio.onended,s=this;this.audio.onended=function(...i){t.apply(this,i),s.disabled=!0,e()}}},log:function(e,...t){1==t.length&&"string"==typeof t[0]?this.whatToSave.push(t):t.length>1?this.whatToSave=this.whatToSave.concat(t):this.whatToSave=["play","end","pause","seek"],e()}},this.test={hasPlayed:function(){return this.hasPlayed},playing:function(){return this.audio.currentTime&&!this.audio.paused}}})}});
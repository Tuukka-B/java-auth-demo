(function(e){function t(t){for(var r,i,o=t[0],c=t[1],s=t[2],f=0,p=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"00ab":function(e,t,n){"use strict";n("53e2")},"0b77":function(e,t,n){"use strict";n("1ae8")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},"1ae8":function(e,t,n){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"53e2":function(e,t,n){},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("cf05"),u=n.n(a),i=Object(r["d"])("img",{alt:"Vue logo",src:u.a},null,-1);function o(e,t,n,a,u,o){var c=Object(r["l"])("ApiTestForm");return Object(r["g"])(),Object(r["c"])(r["a"],null,[i,Object(r["f"])(c)],64)}var c=n("d4ec"),s=n("262e"),l=n("2caf"),f=n("9ab4"),p=n("ce1f"),d=function(e){return Object(r["j"])("data-v-767f4e02"),e=e(),Object(r["h"])(),e},b=d((function(){return Object(r["d"])("h3",null,"Input Data",-1)})),v=d((function(){return Object(r["d"])("br",null,null,-1)})),h={id:"myForm",ref:"myForm"},m=Object(r["e"])('<label for="first-name" data-v-767f4e02>Name</label><input type="text" id="first-name" required data-v-767f4e02><label for="surname" data-v-767f4e02>Surname</label><input type="text" id="surname" required data-v-767f4e02><label for="email" data-v-767f4e02>E-mail</label><input type="text" id="email" required data-v-767f4e02><label for="tel" data-v-767f4e02>Phone Number</label><input type="text" id="tel" data-v-767f4e02><label for="city" data-v-767f4e02>City</label><input type="text" id="city" data-v-767f4e02><label for="username" data-v-767f4e02>Username</label><input type="text" id="username" value="api-user" data-v-767f4e02><label for="password" data-v-767f4e02>Password</label><input type="text" id="password" value="Q29uZ3JhdHNPbkZpbmRpbmdUaGlzRWFzdGVyRWdnIQ==" data-v-767f4e02><input type="submit" id="submitBtn" value="SUBMIT" data-v-767f4e02>',15),y=[m],O=["id"];function j(e,t,n,a,u,i){return Object(r["g"])(),Object(r["c"])(r["a"],null,[b,v,Object(r["d"])("form",h,y,512),Object(r["d"])("div",{ref:"results",class:"results-div",id:e.determineResultStyle()},null,8,O)],64)}var g=n("1da1"),w=n("bee2"),x=(n("96cf"),n("159b"),n("498a"),n("4fad"),n("99af"),n("d3b7"),n("279c")),R=n.n(x),k=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(w["a"])(n,[{key:"data",value:function(){return{result:"none"}}},{key:"mounted",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$refs.myForm,t.addEventListener("submit",function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(r){var a,u,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r.preventDefault(),a=t.querySelectorAll("input"),u={},a.forEach((function(e){u[e.id]=e.value})),i=u.username.trim(),o=u.password.trim(),delete u.username,delete u.password,delete u.submitBtn,console.log("Sent data (does not include authentication headers):"),console.log(u),console.log("Authentication information will be created from the password and the username"),n.generateMessage(i,o,u);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"afterApiRequestSuccess",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.status/400>=1)){e.next=2;break}return e.abrupt("return",this.afterApiRequestFailure(t,n));case 2:n.innerHTML="Request sent succesfully",this.$data.result="success",setTimeout((function(){"success"==r.$data.result&&(n.innerHTML="",r.$data.result="none")}),5e3);case 5:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"afterApiRequestFailure",value:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,u=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,a="",Object.entries(r).forEach((function(e){a+="".concat(e[0],": ").concat(e[1],"<br>")})),n.innerHTML=a,this.$data.result="error",setTimeout((function(){"error"==u.$data.result&&(n.innerHTML="",u.$data.result="none")}),5e3);case 8:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"determineResultStyle",value:function(){switch(this.$data.result){case"success":return"api-success";case"error":return"api-error";case"none":return}}},{key:"generateMessage",value:function(e,t,n){var r=this,a=new Headers;a.set("Authorization","Basic "+e+":"+t),a.append("Content-Type","application/json"),a.append("Access-Control-Allow-Origin","https://localhost:8080");var u="$2a$10$eMwbUMmFcP78eUAix65gFe";R.a.hash(t,u,(function(t,u){a.set("Authorization",e+":"+u),r.sendData(a,n)}))}},{key:"sendData",value:function(e,t){var n=this,r=fetch("http://localhost:8080/post-data",{method:"POST",mode:"cors",headers:e,body:JSON.stringify(t)}),a=this.$refs.results;r.then(function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.afterApiRequestSuccess(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.afterApiRequestFailure(t,a);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}]),n}(p["b"]);k=Object(f["a"])([Object(p["a"])({props:{}})],k);var S=k,A=(n("00ab"),n("6b0d")),M=n.n(A);const T=M()(S,[["render",j],["__scopeId","data-v-767f4e02"]]);var P=T,$=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(p["b"]);$=Object(f["a"])([Object(p["a"])({components:{ApiTestForm:P}})],$);var F=$;n("0b77");const q=M()(F,[["render",o]]);var _=q;Object(r["b"])(_).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.d81270ad.js.map
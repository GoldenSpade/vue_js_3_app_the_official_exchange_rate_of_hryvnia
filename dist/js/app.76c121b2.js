(function(e){function t(t){for(var r,a,n=t[0],s=t[1],b=t[2],d=0,u=[];d<n.length;d++)a=n[d],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&u.push(l[a][0]),l[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);o&&o(t);while(u.length)u.shift()();return i.push.apply(i,b||[]),c()}function c(){for(var e,t=0;t<i.length;t++){for(var c=i[t],r=!0,n=1;n<c.length;n++){var s=c[n];0!==l[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=c[0]))}return e}var r={},l={app:0},i=[];function a(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=r,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(c,r,function(t){return e[t]}.bind(null,r));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=t,n=n.slice();for(var b=0;b<n.length;b++)t(n[b]);var o=s;i.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"02dc":function(e,t,c){"use strict";c("5c91")},"0ab3":function(e,t,c){e.exports=c.p+"img/header-logo.d7792f06.jpg"},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23"),l=(c("fb6a"),Object(r["f"])(" Офіційний курс гривні до іноземних валют та облікова ціна банківських металів ")),i=Object(r["f"])(" © Copyright "),a=Object(r["f"])(". All rights reserved. ");function n(e,t,c,n,s,b){var o=this,d=Object(r["k"])("app-header"),u=Object(r["k"])("app-date"),j=Object(r["k"])("app-loader"),O=Object(r["k"])("app-currencies"),h=Object(r["k"])("app-metals"),v=Object(r["k"])("app-footer");return Object(r["h"])(),Object(r["c"])(r["a"],null,[Object(r["g"])(d,null,{default:Object(r["n"])((function(){return[l]})),_:1}),Object(r["g"])(u,{value:s.thisDate,disabled:""},null,8,["value"]),this.loader?(Object(r["h"])(),Object(r["c"])(j,{key:0})):Object(r["d"])("",!0),this.loader?Object(r["d"])("",!0):(Object(r["h"])(),Object(r["c"])(O,{key:1,thisDate:s.thisDate,firstCurrencies:b.firstCurrencies,otherCurrencies:b.otherCurrencies},null,8,["thisDate","firstCurrencies","otherCurrencies"])),this.loader?Object(r["d"])("",!0):(Object(r["h"])(),Object(r["c"])(h,{key:2,bankMetals:b.bankMetals},null,8,["bankMetals"])),this.loader?Object(r["d"])("",!0):(Object(r["h"])(),Object(r["c"])(v,{key:3},{default:Object(r["n"])((function(){return[i,Object(r["g"])("span",null,Object(r["l"])(o.thisDate.slice(0,4)),1),a]})),_:1}))],64)}c("ac1f"),c("5319"),c("a15b"),c("1276"),c("4de4"),c("d81d"),c("4e82");var s=c("bc3a"),b=c.n(s),o=c("0ab3"),d=c.n(o),u={class:"header"},j={class:"container"},O={class:"header__content"},h=Object(r["g"])("a",{href:"#"},[Object(r["g"])("img",{src:d.a,class:"header__logo"})],-1),v={class:"header__title"};function p(e,t,c,l,i,a){return Object(r["h"])(),Object(r["c"])("div",u,[Object(r["g"])("div",j,[Object(r["g"])("div",O,[h,Object(r["g"])("h1",v,[Object(r["j"])(e.$slots,"default")])])])])}var f={};f.render=p;var m=f,g={class:"date"},_={class:"container"},y={class:"date__content"},P=Object(r["g"])("label",{for:"date",class:"date__label"},"Сьогодні:",-1);function k(e,t,c,l,i,a){return Object(r["h"])(),Object(r["c"])("div",g,[Object(r["g"])("div",_,[Object(r["g"])("div",y,[P,Object(r["g"])("input",{type:"date",class:"date__calendar",id:"date",value:c.value,disabled:c.disabled},null,8,["value","disabled"])])])])}var A={props:{value:String,disabled:Boolean}};A.render=k;var w=A,C={class:"loader"};function x(e,t,c,l,i,a){return Object(r["h"])(),Object(r["c"])("div",C)}var D={};D.render=x;var U=D,S=(c("b680"),{class:"currencies"}),X={class:"container"},M={class:"currencies__content"},I=Object(r["g"])("h2",{class:"currencies__title"},"Валюти",-1),B={class:"table"},R={class:"table-content"},T=Object(r["e"])('<div class="table-head"><div class="table-item table-item--hide">Валюта</div><div class="table-item table-item--hide">Назва</div><div class="table-item table-item--hide">Курс НБУ (грн)</div><div class="table-item table-item--hide">Хочу <br>придбати</div><div class="table-item table-item--hide"> Результат <br>(грн.) </div><div class="table-item table-item--hide">Дата</div></div>',1),F={class:"table-item table-item--bold table-item--blue"},L={class:"table-item"},N={class:"table-item table-item--bold"},E={class:"table-item"},G={class:"table-item table-item--bold table-item--blue"},V={class:"table-item table-item--hide"},$={key:0},J={class:"table-item table-item--bold table-item--blue"},H={class:"table-item"},q={class:"table-item table-item--bold"},z={class:"table-item"},K={class:"table-item table-item--bold table-item--blue"},Q={class:"table-item table-item--hide"};function W(e,t,c,l,i,a){var n=this,s=Object(r["k"])("app-button");return Object(r["h"])(),Object(r["c"])("section",S,[Object(r["g"])("div",X,[Object(r["g"])("div",M,[I,Object(r["g"])("div",B,[Object(r["g"])("div",R,[T,Object(r["g"])("div",null,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(c.firstCurrencies,(function(e){return Object(r["h"])(),Object(r["c"])("div",{class:"table-row",key:e.r030},[Object(r["g"])("div",F,Object(r["l"])(e.cc),1),Object(r["g"])("div",L,Object(r["l"])(e.txt),1),Object(r["g"])("div",N,Object(r["l"])(e.rate),1),Object(r["g"])("div",E,[Object(r["o"])(Object(r["g"])("input",{type:"text",class:"table-item__input","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.curPlaceholder=e}),onInput:t[2]||(t[2]=function(e){return a.checkInput(i.curPlaceholder)})},null,544),[[r["m"],i.curPlaceholder,void 0,{number:!0}]])]),Object(r["g"])("div",G,Object(r["l"])((e.rate*n.curPlaceholder).toFixed(2)),1),Object(r["g"])("div",V,Object(r["l"])(e.exchangedate),1)])})),128))]),i.showAllCurrencies?(Object(r["h"])(),Object(r["c"])("div",$,[(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(c.otherCurrencies,(function(e){return Object(r["h"])(),Object(r["c"])("div",{class:"table-row",key:e.r030},[Object(r["g"])("div",J,Object(r["l"])(e.cc),1),Object(r["g"])("div",H,Object(r["l"])(e.txt),1),Object(r["g"])("div",q,Object(r["l"])(e.rate),1),Object(r["g"])("div",z,[Object(r["o"])(Object(r["g"])("input",{type:"text",class:"table-item__input","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.curPlaceholder=e}),onInput:t[4]||(t[4]=function(e){return a.checkInput(i.curPlaceholder)})},null,544),[[r["m"],i.curPlaceholder,void 0,{number:!0}]])]),Object(r["g"])("div",K,Object(r["l"])((e.rate*n.curPlaceholder).toFixed(2)),1),Object(r["g"])("div",Q,Object(r["l"])(n.thisDate.split("-").reverse().join(".")),1)])})),128))])):Object(r["d"])("",!0)]),Object(r["g"])(s,{showAllCurrencies:i.showAllCurrencies,onShowAll:t[5]||(t[5]=function(e){return i.showAllCurrencies=!i.showAllCurrencies})},null,8,["showAllCurrencies"])])])])])}var Y={class:"button__content"};function Z(e,t,c,l,i,a){return Object(r["h"])(),Object(r["c"])("div",Y,[Object(r["g"])("button",{class:["button",{button__if:c.showAllCurrencies}],onClick:t[1]||(t[1]=function(t){return e.$emit("showAll")})},Object(r["l"])(c.showAllCurrencies?"Менше валют":"Всі валюти"),3)])}var ee={props:{showAllCurrencies:Boolean},emits:["showAll"]};ee.render=Z;var te=ee,ce={props:{thisDate:String,firstCurrencies:Array,otherCurrencies:Array},data:function(){return{curPlaceholder:100,showAllCurrencies:!1}},methods:{checkInput:function(e){"string"===typeof e&&0!==e.length&&(alert("Будь ласка, введіть число."),this.curPlaceholder=100)}},components:{AppButton:te}};ce.render=W;var re=ce,le={class:"currencies"},ie={class:"container"},ae={class:"currencies__content"},ne=Object(r["g"])("h2",{class:"currencies__title"},"Банківські метали",-1),se={class:"table"},be={class:"table-content"},oe=Object(r["e"])('<div class="table-head"><div class="table-item table-item--hide">Метал</div><div class="table-item table-item--hide">Назва</div><div class="table-item table-item--hide"> Курс НБУ <br>(грн / тр.ун.) </div><div class="table-item table-item--hide"> Вартість <br>(грн / г.) </div><div class="table-item table-item--hide"> Хочу <br>придбати (г.) </div><div class="table-item table-item--hide"> Результат <br>(грн.) </div><div class="table-item table-item--hide">Дата</div></div>',1),de={class:"table-item table-item--bold table-item--blue"},ue={class:"table-item"},je={class:"table-item table-item--bold"},Oe={class:"table-item table-item--hide"},he={class:"table-item"},ve={class:"table-item table-item--bold table-item--blue"},pe={class:"table-item table-item--hide-metals"};function fe(e,t,c,l,i,a){return Object(r["h"])(),Object(r["c"])("section",le,[Object(r["g"])("div",ie,[Object(r["g"])("div",ae,[ne,Object(r["g"])("div",se,[Object(r["g"])("div",be,[oe,(Object(r["h"])(!0),Object(r["c"])(r["a"],null,Object(r["i"])(c.bankMetals,(function(e){return Object(r["h"])(),Object(r["c"])("div",{class:"table-row",key:e.r030},[Object(r["g"])("div",de,Object(r["l"])(e.cc),1),Object(r["g"])("div",ue,Object(r["l"])(e.txt),1),Object(r["g"])("div",je,Object(r["l"])(e.rate),1),Object(r["g"])("div",Oe,Object(r["l"])((e.rate/31.1035).toFixed(2)),1),Object(r["g"])("div",he,[Object(r["o"])(Object(r["g"])("input",{type:"text",class:"table-item__input","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.metPlaceholder=e}),onInput:t[2]||(t[2]=function(e){return a.checkInput(i.metPlaceholder)})},null,544),[[r["m"],i.metPlaceholder,void 0,{number:!0}]])]),Object(r["g"])("div",ve,Object(r["l"])((e.rate/31.1035*i.metPlaceholder).toFixed(2)),1),Object(r["g"])("div",pe,Object(r["l"])(e.exchangedate),1)])})),128))])])])])])}var me={props:{bankMetals:Array},data:function(){return{metPlaceholder:1}},methods:{checkInput:function(e){"string"===typeof e&&0!==e.length&&(alert("Будь ласка, введіть число."),this.metPlaceholder=1)}}};me.render=fe;var ge=me,_e={class:"footer"},ye={class:"container"},Pe={class:"footer__content"};function ke(e,t,c,l,i,a){return Object(r["h"])(),Object(r["c"])("footer",_e,[Object(r["g"])("div",ye,[Object(r["g"])("div",Pe,[Object(r["j"])(e.$slots,"default")])])])}var Ae={};Ae.render=ke;var we=Ae,Ce={data:function(){return{currencies:[],loader:!0,thisDate:(new Date).toLocaleDateString().split(".").reverse().join(".").replace(/\./g,"-")}},mounted:function(){var e=this;setTimeout((function(){b.a.get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=".concat(e.thisDate.replace(/-/g,""),"&json")).then((function(t){e.currencies=t.data,e.loader=!1})).catch((function(t){console.log(t,"Помилка бази даних. Будь ласка, спробуйте пізніше."),alert("Помилка бази даних. Будь ласка, спробуйте пізніше."),e.loader=!1}))}),1e3)},computed:{firstCurrencies:function(){var e=[];return e=this.currencies.filter((function(e){return"USD"===e.cc||"EUR"===e.cc||"PLN"===e.cc||"RUB"===e.cc})),e.map((function(e){"USD"===e.cc&&(e.id=1),"EUR"===e.cc&&(e.id=2),"PLN"===e.cc&&(e.id=3),"RUB"===e.cc&&(e.id=4)})),e.sort((function(e,t){return e.id-t.id})),e},otherCurrencies:function(){var e=[];return e=this.currencies.filter((function(e){return"USD"!==e.cc&&"EUR"!==e.cc&&"PLN"!==e.cc&&"RUB"!==e.cc&&"XAU"!==e.cc&&"XAG"!==e.cc&&"XPT"!==e.cc&&"XPD"!==e.cc})),e.sort((function(e,t){return e.cc.localeCompare(t.cc)})),e},bankMetals:function(){var e=[];return e=this.currencies.filter((function(e){return"XAU"===e.cc||"XAG"===e.cc||"XPT"===e.cc||"XPD"===e.cc})),e.map((function(e){"XAU"===e.cc&&(e.id=1),"XAG"===e.cc&&(e.id=2),"XPT"===e.cc&&(e.id=3),"XPD"===e.cc&&(e.id=4)})),e.sort((function(e,t){return e.id-t.id})),e}},components:{AppHeader:m,AppDate:w,AppLoader:U,AppCurrencies:re,AppMetals:ge,AppFooter:we}};c("02dc");Ce.render=n;var xe=Ce;c("7046");Object(r["b"])(xe).mount("#app")},"5c91":function(e,t,c){},7046:function(e,t,c){}});
//# sourceMappingURL=app.76c121b2.js.map
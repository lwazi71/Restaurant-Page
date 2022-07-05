(()=>{"use strict";var n={426:(n,e,i)=>{i.d(e,{Z:()=>l});var s=i(81),a=i.n(s),t=i(645),r=i.n(t),c=i(667),m=i.n(c),o=new URL(i(877),i.b),p=r()(a()),d=m()(o);p.push([n.id,"*{\n    margin:0;\n    padding:0;\n}\n.noHome{\n    display:none\n}\n[data-tab-content]{\n    display:none;\n}\n\n.current[data-tab-content]{\n    display:block;\n}\n.tab-content{\n  background-image: url("+d+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height:100vh;\n}\n#header-items{\n    display:flex;\n    justify-content: space-between;\n\n}\n.pages{\n    display: flex;\n    gap:35px;\n}\n#home-items{\n    position:fixed;\n    top: 50%;\n    left: 50%;\n    margin: -100px 0 0 -150px;\n}\n.burger-name{\n}\na, a:hover, a:focus, a:active {\n    text-decoration: none;\n    color: inherit;\n}\n\n.container{\n    max-width:1200px;\n    margin:0 auto;\n    padding:1.5em;\n}\n\n.menu{\n    font-family: sans-serif;\n    font-size: 14px;\n}\n\n.menu-group-heading {\n    margin: 0;\n    padding-bottom: 1em;\n    border-bottom:2px solid #ccc;\n\n}\n.menu-group{\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1.5em;\n    padding: 1.5em 0;\n}\n.menu-items{\n    display:flex;\n}\n.menu-item-image{\n    width:150px;\n    height:150px;\n    flex-shrink: 0;\n    object-fit:cover;\n    margin-right:1.5em;\n\n}\n.menu-item-text{\n    flex-grow:1;\n}\n.menu-item-heading{\n    display:flex;\n    justify-content: space-between;\n    margin:0;\n}\n\n.menu.item.name{\n    margin-right: 1.5em;\n\n}\n.menu-item-description{\n    line-height:1.6;\n}\n@media screen and (min-width: 992px) {\n    .menu {\n        font-size: 16px;\n\n    }\n    .menu-group {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .menu-item-image{\n        width:175px;\n        height:175px;\n    }\n}",""]);const l=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",s=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),s&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),s&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,s,a,t){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(s)for(var c=0;c<this.length;c++){var m=this[c][0];null!=m&&(r[m]=!0)}for(var o=0;o<n.length;o++){var p=[].concat(n[o]);s&&r[p[0]]||(void 0!==t&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=t),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function i(n){for(var i=-1,s=0;s<e.length;s++)if(e[s].identifier===n){i=s;break}return i}function s(n,s){for(var t={},r=[],c=0;c<n.length;c++){var m=n[c],o=s.base?m[0]+s.base:m[0],p=t[o]||0,d="".concat(o," ").concat(p);t[o]=p+1;var l=i(d),u={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var h=a(u,s);s.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}r.push(d)}return r}function a(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,a){var t=s(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<t.length;r++){var c=i(t[r]);e[c].references--}for(var m=s(n,a),o=0;o<t.length;o++){var p=i(t[o]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}t=m}}},569:n=>{var e={};n.exports=function(n,i){var s=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(i)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,i)=>{n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var s="";i.supports&&(s+="@supports (".concat(i.supports,") {")),i.media&&(s+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(s+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),s+=i.css,a&&(s+="}"),i.media&&(s+="}"),i.supports&&(s+="}");var t=i.sourceMap;t&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),e.styleTagTransform(s,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},877:(n,e,i)=>{n.exports=i.p+"0996b54f7bf75e2003de.jpg"}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var t=e[s]={id:s,exports:{}};return n[s](t,t.exports,i),t.exports}i.m=n,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var s in e)i.o(e,s)&&!i.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:e[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var s=e.getElementsByTagName("script");s.length&&(n=s[s.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.b=document.baseURI||self.location.href,i.nc=void 0,(()=>{const n=document.createElement("div"),e=((()=>{const e=document.querySelector("#content");n.classList.add("tab-content"),n.innerHTML='\n    <div class = "tab-content">\n        <div id = "header-items">\n   </div>\n</div>\n    <div id = "home-items">\n        <h2 class = "headingt-burger">Best Burgers in Bremerton</h2>\n        <p class = "burger-paragraph">Locally Sourced x Crafted with Love</p>\n        <button class = "burger-button">Order Now</button>\n    </div>\n    </div>\n</div>\n        ',e.appendChild(n)})(),document.createElement("div"));(()=>{const n=document.querySelector("#content");e.setAttribute("id",",menu"),e.setAttribute("data-tab-content",""),e.innerHTML='\n    <div class = "container">\n    <div class = "menu">\n       <h2 class = "menu-group-heading">\n          Burgers\n       </h2>\n       <div class = "menu-group">\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/Breakfast.jpg" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Sausage, Egg, & Cheese Croissan\'Wich</span>\n                   <span class="menu-item-price"> $3.49</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our grab-and-go Sausage, Egg & Cheese Croissan’wich is now made with 100% butter for a soft, flaky croissant piled high with savory sizzling sausage, fluffy eggs, and melted American cheese. Served with Hash Browns, your choice of Drink.\n                </p>\n             </div>\n          </div>\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/Chicken.jpeg" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Crispy Chicken Sandwich</span>\n                   <span class="menu-item-price">$6.99</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our Crispy Sandwich is made with 100% white meat chicken filet, seasoned and breaded and carefully layered with fresh lettuce, ripe tomato, and creamy mayonnaise on a potato bun.\n                </p>\n             </div>\n          </div>\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/Bacon.jpg" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Bacon King</span>\n                   <span class="menu-item-price">$6.49</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our Bacon King Sandwich features two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise all on a soft sesame seed bun.\n                </p>\n             </div>\n          </div>\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/RodeoKing.png" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Rodeo King</span>\n                   <span class="menu-item-price">$6.00</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our new Rodeo Burger features a savory flame-grilled beef patty topped with sweet and smoky BBQ sauce and crispy, golden onion rings served on a toasted, sesame seed bun.\n                </p>\n             </div>\n          </div>\n       </div>\n       <h2 class = "menu-group-heading">\n           Sides\n        </h2>\n        <div class = "menu-group">\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Fries2.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Classic Fries</span>\n                     <span class="menu-item-price">$1.49</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                     Piping hot and perfectly salted.\n                  </p>\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Nuggets.jpeg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Chicken Nuggets 10pz </span>\n                     <span class="menu-item-price">5.99</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                      Made with white meat, our bite-sized Chicken Nuggets are tender and juicy on the inside and crispy on the outside\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/OnionRing.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n               <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Onion Rings</span>\n                   <span class="menu-item-price">$1.79</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Crisp, fried, a bit sweet\n                </p>\n              </div>\n           </div>\n           <div class="menu-items">\n              <img class="menu-item-image" src="./images/Sticks.jpeg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n                 <h3 class="menu-item-heading">\n                    <span class="menu-item-name">4pz Mozzarella Sticks</span>\n                    <span class="menu-item-price">$1.49</span>\n                 </h3>\n                 <p class = "menu-item-description">\n                   Try our delicious Mozzarella cheese sticks. Served with marinara dipping sauce, Mozzarella sticks are always a great snack\n                 </p>\n              </div>\n           </div>\n        </div>\n        <h2 class = "menu-group-heading">\n           Dessert\n        </h2>\n        <div class = "menu-group">\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Cake.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Hershey\'s Pie</span>\n                     <span class="menu-item-price">$1.69</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   One part crunchy chocolate crust and one part chocolate crème filling, garnished with a delicious topping and real HERSHEYS® Chocolate Chips.\n                  </p>\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Cone.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Soft Serve Cone</span>\n                     <span class="menu-item-price">1.00</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   Creamy, and velvety Vanilla Soft Serve, served in a cone.\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Milk.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n               <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Vanilla Shake</span>\n                   <span class="menu-item-price">$3.59</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Cool down with our creamy Hand Spun Shake. Velvety vanilla soft serve and your choice of flavor are blended to perfection just for you.\n                </p>\n              </div>\n           </div>\n           <div class="menu-items">\n              <img class="menu-item-image" src="./images/Chocolate.jpeg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n                 <h3 class="menu-item-heading">\n                    <span class="menu-item-name">Chocolate Shake</span>\n                    <span class="menu-item-price">$3.59</span>\n                 </h3>\n                 <p class = "menu-item-description">\n                   Cool down with our creamy Hand Spun Shake. Velvety chocolate soft serve and your choice of flavor are blended to perfection just for you.\n                 </p>\n              </div>\n           </div>\n        </div>\n        <h2 class = "menu-group-heading">\n           Drinks\n        </h2>\n        <div class = "menu-group">\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Coke.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Coca-Cola</span>\n                     <span class="menu-item-price">$2.39</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   Carbonated soft drink flavored with vanilla, cinnamon, citrus oils and other flavorings.\n                  </p>\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Sprite.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Sprite</span>\n                     <span class="menu-item-price">1.59</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   Crisp, refreshing and clean-tasting\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Lemonade.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n               <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Lemonade</span>\n                   <span class="menu-item-price">$2.09</span>\n                </h3>\n                <p class = "menu-item-description">\n                  Ice cold hand picked lemons with sugar\n                </p>\n              </div>\n           </div>\n           <div class="menu-items">\n              <img class="menu-item-image" src="./images/PL.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n                 <h3 class="menu-item-heading">\n                    <span class="menu-item-name">Pink Lemonade</span>\n                    <span class="menu-item-price">$2.69</span>\n                 </h3>\n                 <p class = "menu-item-description">\n                   Mixed with raspberries, strawberries, grapefruit that give a more natural pink color and a sweeter and fruitier flavor.\n                 </p>\n              </div>\n   </div>\n    </div>\n    </div>\n </div>',n.appendChild(e)})();var s=i(379),a=i.n(s),t=i(795),r=i.n(t),c=i(569),m=i.n(c),o=i(565),p=i.n(o),d=i(216),l=i.n(d),u=i(589),h=i.n(u),g=i(426),v={};v.styleTagTransform=h(),v.setAttributes=p(),v.insert=m().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),a()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const f=document.getElementById("menu");document.getElementById("about"),document.getElementById("contact"),f.addEventListener("click",(()=>{e.classList.add("current"),n.remove("current")}))})()})();
(()=>{"use strict";var n={426:(n,e,i)=>{i.d(e,{Z:()=>p});var t=i(81),a=i.n(t),s=i(645),o=i.n(s),r=i(667),c=i.n(r),l=new URL(i(37),i.b),m=o()(a());m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Vollkorn:ital@1&display=swap);"]);var d=c()(l);m.push([n.id,"*{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n}\nbody{\n    margin: 0px;\n    padding: 0px;\n}\n\n.noHome{\n    display:none}\n\n[data-tab-content] {\n    display: none;\n}\n.current[data-tab-content]{\n    display:block;\n}\n/*Home Styling */\n#tab-content{\n    background: url("+d+') no-repeat center center fixed;\n  background-size: cover;\n  height:92vh\n}\n.logo{\n    cursor:pointer;\n    width:70px\n}/*\n.nav_links {\n    list-style:none;\n}\n.nav_links li {\n    display: inline-block;\n    padding:0px 20px;\n}\n\n.nav_links li a {\n    transition: all 0.3s ease 0s;\n}\n.nav_links li a:hover {\n   color:#0088a9;\n}\n.contactb {\n    padding: 9px 25px;\n    background-color: rgba(0,136,169,1);\n    border:none;\n    border-radius:  50px;\n    cursor:pointer;\n    color: #ecf0f1;\n    transition: all 0.3s ease 0s;\n    margin-right:22px;\n}\n.contactb :hover {\n    background-color: rgba(0,136,169,0.8)\n}\nli,a{\n    font-family:"Montserrat", sans-serif;\n    font-weight:500;\n    font-size:16px;\n    color: #ecf0f1;\n    list-style-type:none;\n}\n*/\nheader{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: \t#000000;\n    height: 70px;\n    \n}\n\nli{\n    list-style: none;\n    color:white;\n}\na{\n    color:white;\n    text-decoration: none;\n}\n.navbar{\n    min-height:70px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding:0 24px;\n}\n.nav-menu{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap:60px;\n}\n.nav-branding{\n    font-size:2rem;\n}\n.nav-link{\n    transition: 0.7s ease;\n}\n.nav-link:hover{\n    color: dodgerblue;\n}\n.hamburger{\n    display:none;\n    cursor: pointer;\n}\n.bar{\n    display: block;\n    width:25px;\n    height:3px;\n    margin:5px auto;\n    -webkit-transition: all 0.3 ease-in-out;\n    transition: all 0.3 ease-in-out;\n    background-color: white;\n}\n@media(max-width:768px) {\n    .hamburger {\n        display: block;\n    }\n    .hamburger.active .bar:nth-child(2){\n        opacity: 0;\n    }\n    .hamburger.active .bar:nth-child(1){\n        transform: translateY(8px) rotate(45deg);\n    } \n    .hamburger.active .bar:nth-child(3){\n        transform: translateY(-8px) rotate(-45deg);\n    }\n    .nav-menu {\n        position: fixed;\n        left: -100%;\n        top: 70px;\n        gap:0;\n        flex-direction: column;\n        background-color: #262626;\n        width:100%;\n        text-align: center;\n        transition: 0.3s;\n    }\n    nav-item {\n        margin:16px 0;\n    }\n    .nav-menu.active{\n        left:0;\n\n    }\n}\n.pages{\n    display: flex;\n    gap:35px;\n}\n#home-items{\n    position:absolute;\n    color: #ecf0f1;\n    top: 50%;\n    left: 50%;\n    margin: -100px 0 0 -150px;\n}\n.burger-paragraph {\n    font-size:22px;\n}\n.order-now{\n    padding: 10px 19px;\n    border-radius: 25px;\n    font-size: 22px;\n    cursor: pointer;\n    text-decoration:none;\n    color:palegoldenrod;\n    background-color: red;\n    transition: all 0.3s ease 0s;\n\n}\n.order-now :hover{\n    color: #ed1250;\n}\n.burger-name{\n}\na, a:hover, a:focus, a:active {\n    text-decoration: none;\n    color: inherit;\n}\n\n.container{\n    max-width:1200px;\n    margin:0 auto;\n    padding:1.5em;\n}\n/* menu page styling */\n.menu{\n    font-family: sans-serif;\n    font-size: 14px;\n}\n\n.menu-group-heading {\n    margin: 0;\n    padding-bottom: 1em;\n    border-bottom:2px solid #ccc;\n\n}\n.menu-group{\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1.5em;\n    padding: 1.5em 0;\n}\n.menu-items{\n    display:flex;\n}\n.menu-item-image{\n    width:150px;\n    height:150px;\n    flex-shrink: 0;\n    object-fit:cover;\n    margin-right:1.5em;\n\n}\n.menu-item-text{\n    flex-grow:1;\n}\n.menu-item-heading{\n    display:flex;\n    justify-content: space-between;\n    margin:0;\n}\n\n.menu.item.name{\n    margin-right: 1.5em;\n\n}\n.menu-item-description{\n    line-height:1.6;\n}\n@media screen and (min-width: 992px) {\n    .menu {\n        font-size: 16px;\n\n    }\n    .menu-group {\n        grid-template-columns: repeat(2, 1fr);\n    }\n\n    .menu-item-image{\n        width:175px;\n        height:175px;\n    }\n}\n/* About page styling */\n*{\n    margin:0px;\n    padding:0px;\n    box-sizing: border-box;   \n    font-family: \'Lobster\', cursive;\n}\n.wrapper{\n    width: 100%;\n    min-height: 100vh;\n    overflow:hidden;\n    background-color: #fcf3ec;\n}\n.row{\n    width:100%;\n    padding:50px 100px;\n}\n.image-section{\n    width:30%;\n    float:left;\n}\n.image-section img{\n    width:100%;\n    height:auto;\n}\n.content{\n    width:60%;\n    float:left;\n    margin-left:50px;\n}\n.content h1 {\n    font-size: 90px;\n    letter-spacing: 3.5px;\n    margin-top:25px;\n    color:#222;\n}\n.about{\n    width:800px;\n}\n.content h2{\n    font-style:40px;\n    font-family: sans-serif;\n    color:#222;\n    margin-top:25px;\n}\n.content p {\n    font-size:20px;\n    font-family: serif;\n    margin-top:10px;\n    line-height:1.5;\n}\n@media screen and (max-width: 768px){\n    .image-section{\n        width:100%;\n        float:none;\n    }\n.content{\n    width:100%;\n    float: none;\n    margin-left:0px;\n}\n.content h1 {\n    font-size: 60px;\n    letter-spacing: 2px;\n    margin-top:30px;\n}\n.content h2{\n    font-style:30px;\n}\n.content p {\n    font-size:18px;\n}\n}\n/* Contact-Page Styling*/\n\n*\n{\n    margin:0;\n    padding:0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n}\n.thrid\n{\n    background: linear-gradient(90deg, #006241 0%, #006241 30%,#fcf3ec 30%, #fcf3ec 100%); \n}\n.contactUS{\n    position: relative;\n    width:100%;\n    padding:40px 100px;\n\n}\n.contactUS .title{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size:2em;\n}\n.contactUS .title h2 {\n    color: black;\n    font-weight:500;\n}\n.form{\n    grid-area: form;\n}\n.info{\n    grid-area: info;\n}\n.map{\n    grid-area: map;\n}\n.contact{\n    padding:40px;\n    background: #fff;\n    box-shadow: 0 5px 35px rgba(0,0,0,0.15);\n}\n.box{\n    position: relative; \n    display:grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: 5fr 4fr;\n    grid-template-areas: \n    "form info"\n    "form map";\n    grid-gap:20px;\n    margin-top:20px;\n}\n.contact h3 {\n    color: #0e3959;\n    font-weight: 500;\n    font-size: 1.4em;\n    margin-bottom: 10px;\n}\n/*form*/\n.formBox{\n    position: relative;\n    width:100%;\n\n}\n.formBox .row50 {\n    display: flex;\n    gap:20px;\n\n}\n.inputBox{\n    display:flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    width:50%;\n}\n.formBox .row100 .inputBox{\n    width: 100%;\n}\n.inputBox span {\n    color: #00FF00; \n    margin-top: 10px;\n    margin-bottom: 5px;\n    font-weight: 500;\n}\n.inputBox input {\n    padding: 10px;\n    font-size: 1.1em;\n    outline: none;\n    border: 1px solid #333;\n}\n.inputBox textarea {\n    padding: 10px;\n    font-size: 1.1em;\n    outline: none;\n    border: 1px solid #333;\n    resize:none;\n    min-height: 220px;\n    margin-bottom: 10px;\n\n}\n.inputBox input[type = "submit"] {\n    background:  #006241;\n    color:#fff;\n    border:none;\n    font-size:1.1em;\n    max-width: 120px;\n    font-weight: 500;\n    cursor: pointer;\n    padding:14px 15px;\n}\n.inputBox ::placeholder {\n    color: #999;\n}\n\n/* info*/\n.info{\n    background: #20B2AA;\n}\n.info h3{\n    color:#fff;\n}\n.info .infoBox div {\n    display:flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n.info .infoBox div span { \n    min-width: 40px;\n    height:40px;\n    color:#fff;\n    background:#00FA9A;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size:1.5em;\n    border-radius:50%;\n    margin-right: 15px;\n}\n\n.info .infoBox div p {\n    color:#fff;\n\n}\n.info .infoBox div a {\n    color:#fff;\n    text-decoration: none;\n    font-size:1.1em;\n}\n.sci {\n    margin-top:40px;\n    display:flex;\n}\n.sci li {\n    list-style:none;\n    margin-right:15px;\n}\n.sci li a {\n    color:#fff;\n    font-size:2em;\n    color:#ccc;\n}\n.sci li a:hover {\n    color:#fff;\n\n}\n.map{\n    padding:0;\n}\n.map iframe {\n    width:100%;\n    height:100%;\n}\n\n/*Responsive Design*/\n@media (max-width: 991px)\n{\n    .contactUs{\n        padding: 20px;\n\n    }\n    .box{\n        position: relative;\n        display:grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: auto;\n        grid-template-areas: \n            "form"\n            "info"\n            "map";\n    }\n    .formBox .row50 {\n        display: flex;\n        gap:0;\n        flex-direction: column;\n    }\n    .inputBox {\n        width:100%;    \n    }\n    .contact {\n        padding:30px;\n\n    }\n    .map{\n        min-height:300px;\n        padding:0;\n    }\n}',""]);const p=m},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var i="",t=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),t&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=n(e),t&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(n,i,t,a,s){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var r=0;r<this.length;r++){var c=this[r][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var m=[].concat(n[l]);t&&o[m[0]]||(void 0!==s&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=s),i&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=i):m[2]=i),a&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=a):m[4]="".concat(a)),e.push(m))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function i(n){for(var i=-1,t=0;t<e.length;t++)if(e[t].identifier===n){i=t;break}return i}function t(n,t){for(var s={},o=[],r=0;r<n.length;r++){var c=n[r],l=t.base?c[0]+t.base:c[0],m=s[l]||0,d="".concat(l," ").concat(m);s[l]=m+1;var p=i(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var g=a(u,t);t.byIndex=r,e.splice(r,0,{identifier:d,updater:g,references:1})}o.push(d)}return o}function a(n,e){var i=e.domAPI(e);return i.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;i.update(n=e)}else i.remove()}}n.exports=function(n,a){var s=t(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<s.length;o++){var r=i(s[o]);e[r].references--}for(var c=t(n,a),l=0;l<s.length;l++){var m=i(s[l]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}s=c}}},569:n=>{var e={};n.exports=function(n,i){var t=function(n){if(void 0===e[n]){var i=document.querySelector(n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(n){i=null}e[n]=i}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(i)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,i)=>{n.exports=function(n){var e=i.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(i){!function(n,e,i){var t="";i.supports&&(t+="@supports (".concat(i.supports,") {")),i.media&&(t+="@media ".concat(i.media," {"));var a=void 0!==i.layer;a&&(t+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),t+=i.css,a&&(t+="}"),i.media&&(t+="}"),i.supports&&(t+="}");var s=i.sourceMap;s&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,i)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},37:(n,e,i)=>{n.exports=i.p+"f0ac9578507ad8befbfb.jpg"}},e={};function i(t){var a=e[t];if(void 0!==a)return a.exports;var s=e[t]={id:t,exports:{}};return n[t](s,s.exports,i),s.exports}i.m=n,i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;i.g.importScripts&&(n=i.g.location+"");var e=i.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=n})(),i.b=document.baseURI||self.location.href,i.nc=void 0,(()=>{const n=document.createElement("div"),e=((()=>{const e=document.querySelector("#content");n.innerHTML='<div id="home" class="current" data-tab-content>\n    <div id = "tab-content" >\n        <div id = "header-items">\n   </div>\n</div>\n    <div id = "home-items">\n        <h1 class = "headingt-burger">Best Burgers in Bremerton</h1>\n        <br>\n        <p class = "burger-paragraph">Locally Sourced x Crafted with Love</p>\n        <br>\n        <a data-tab-target = "#menu" class = "order-now">Order Now</a>\n        <br>\n    </div>\n    </div>\n</div>\n        ',e.appendChild(n)})(),document.createElement("div")),t=((()=>{const n=document.querySelector("#content");e.setAttribute("id","menu"),e.setAttribute("data-tab-content",""),e.innerHTML='\n    <div class = "container">\n    <div class = "menu">\n       <h2 class = "menu-group-heading">\n          Burgers\n       </h2>\n       <div class = "menu-group">\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/Breakfast.jpg" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Sausage, Egg, & Cheese Croissan\'Wich</span>\n                   <span class="menu-item-price"> $3.49</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our grab-and-go Sausage, Egg & Cheese Croissan’wich is now made with 100% butter for a soft, flaky croissant piled high with savory sizzling sausage, fluffy eggs, and melted American cheese. Served with Hash Browns, your choice of Drink.\n                </p>\n             </div>\n          </div>\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/Chicken.jpeg" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Crispy Chicken Sandwich</span>\n                   <span class="menu-item-price">$6.99</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our Crispy Sandwich is made with 100% white meat chicken filet, seasoned and breaded and carefully layered with fresh lettuce, ripe tomato, and creamy mayonnaise on a potato bun.\n                </p>\n             </div>\n          </div>\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/Bacon.jpg" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Bacon King</span>\n                   <span class="menu-item-price">$6.49</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our Bacon King Sandwich features two ¼ lb* savory flame-grilled beef patties, topped a with hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayonnaise all on a soft sesame seed bun.\n                </p>\n             </div>\n          </div>\n          <div class="menu-items">\n             <img class="menu-item-image" src="./images/RodeoKing.png" alt="Crispy Chicken">\n             <div class="menu-item-text">\n                <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Rodeo King</span>\n                   <span class="menu-item-price">$6.00</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Our new Rodeo Burger features a savory flame-grilled beef patty topped with sweet and smoky BBQ sauce and crispy, golden onion rings served on a toasted, sesame seed bun.\n                </p>\n             </div>\n          </div>\n       </div>\n       <h2 class = "menu-group-heading">\n           Sides\n        </h2>\n        <div class = "menu-group">\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Fries2.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Classic Fries</span>\n                     <span class="menu-item-price">$1.49</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                     Piping hot and perfectly salted.\n                  </p>\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Nuggets.jpeg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Chicken Nuggets 10pz </span>\n                     <span class="menu-item-price">$5.99</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                      Made with white meat, our bite-sized Chicken Nuggets are tender and juicy on the inside and crispy on the outside\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/OnionRing.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n               <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Onion Rings</span>\n                   <span class="menu-item-price">$1.79</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Crisp, fried, a bit sweet\n                </p>\n              </div>\n           </div>\n           <div class="menu-items">\n              <img class="menu-item-image" src="./images/Sticks.jpeg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n                 <h3 class="menu-item-heading">\n                    <span class="menu-item-name">4pz Mozzarella Sticks</span>\n                    <span class="menu-item-price">$1.49</span>\n                 </h3>\n                 <p class = "menu-item-description">\n                   Try our delicious Mozzarella cheese sticks. Served with marinara dipping sauce, Mozzarella sticks are always a great snack\n                 </p>\n              </div>\n           </div>\n        </div>\n        <h2 class = "menu-group-heading">\n           Dessert\n        </h2>\n        <div class = "menu-group">\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Cake.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Hershey\'s Pie</span>\n                     <span class="menu-item-price">$1.69</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   One part crunchy chocolate crust and one part chocolate crème filling, garnished with a delicious topping and real HERSHEYS® Chocolate Chips.\n                  </p>\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Cone.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Soft Serve Cone</span>\n                     <span class="menu-item-price">$1.00</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   Creamy, and velvety Vanilla Soft Serve, served in a cone.\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Milk.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n               <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Vanilla Shake</span>\n                   <span class="menu-item-price">$3.59</span>\n                </h3>\n                <p class = "menu-item-description">\n                   Cool down with our creamy Hand Spun Shake. Velvety vanilla soft serve and your choice of flavor are blended to perfection just for you.\n                </p>\n              </div>\n           </div>\n           <div class="menu-items">\n              <img class="menu-item-image" src="./images/Chocolate.jpeg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n                 <h3 class="menu-item-heading">\n                    <span class="menu-item-name">Chocolate Shake</span>\n                    <span class="menu-item-price">$3.59</span>\n                 </h3>\n                 <p class = "menu-item-description">\n                   Cool down with our creamy Hand Spun Shake. Velvety chocolate soft serve and your choice of flavor are blended to perfection just for you.\n                 </p>\n              </div>\n           </div>\n        </div>\n        <h2 class = "menu-group-heading">\n           Drinks\n        </h2>\n        <div class = "menu-group">\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Coke.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Coca-Cola</span>\n                     <span class="menu-item-price">$2.39</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   Carbonated soft drink flavored with vanilla, cinnamon, citrus oils and other flavorings.\n                  </p>\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Sprite.jpg" alt="Crispy Chicken">\n               <div class="menu-item-text">\n                  <h3 class="menu-item-heading">\n                     <span class="menu-item-name">Sprite</span>\n                     <span class="menu-item-price">$1.59</span>\n                  </h3>\n                  <p class = "menu-item-description">\n                   Crisp, refreshing and clean-tasting\n              </div>\n           </div>\n           <div class="menu-items">\n               <img class="menu-item-image" src="./images/Lemonade.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n               <h3 class="menu-item-heading">\n                   <span class="menu-item-name">Lemonade</span>\n                   <span class="menu-item-price">$2.09</span>\n                </h3>\n                <p class = "menu-item-description">\n                  Ice cold hand picked lemons with sugar\n                </p>\n              </div>\n           </div>\n           <div class="menu-items">\n              <img class="menu-item-image" src="./images/PL.jpg" alt="Crispy Chicken">\n              <div class="menu-item-text">\n                 <h3 class="menu-item-heading">\n                    <span class="menu-item-name">Pink Lemonade</span>\n                    <span class="menu-item-price">$2.69</span>\n                 </h3>\n                 <p class = "menu-item-description">\n                   Mixed with raspberries, strawberries, grapefruit that give a more natural pink color and a sweeter and fruitier flavor.\n                 </p>\n              </div>\n   </div>\n    </div>\n    </div>\n </div>',n.appendChild(e)})(),document.createElement("div")),a=((()=>{t.setAttribute("id","about"),t.setAttribute("data-tab-content","");const n=document.querySelector("#content");t.innerHTML='\n    <div class="wrapper">\n    <div class="row">\n        <div class="image-section">\n            <img class = "about" src= "./images/about.jpg" alt="">\n        </div>\n        <div class="content">\n            <h1>About Us</h1>\n            <h2>Our Restaurant</h2>\n            <p>\n                Hospitality-focused, dedicated to excellence, and highly knowledgeable are just a few terms most often used to describe Brementon\'s Burgers. We prepare and serve high quality, simple food, at a great value in a home-like envrionment. Come down to Brementon to  have a laugh and try our tasty burgers.\n            </p>\n        <br>\n        <h2>Our Mission</h2>\n        <p>\n            At Brementon\'s Burgers our mission is simple: enhance and educate the palate with the freshest ingredients and flavors, while surprising and exciting each guest with personal care and service.\n        </p>\n        </div>\n    </div>\n</div>',n.appendChild(t)})(),document.createElement("div"));(()=>{const n=document.querySelector("#content");a.setAttribute("id","contact"),a.setAttribute("data-tab-content",""),a.innerHTML='\n    <!DOCTYPE html>\n    <html lang="en">\n       <head>\n          <meta charset="UTF-8">\n          <meta http-equiv="X-UA-Compatible" content="IE=edge">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <title>Contact Page</title>\n          <link rel = "stylesheet" href="styles.css">\n       </head>\n       <body class = "thrid">\n          <div class="contactUS">\n             <div class="title">\n                <h2>Get in touch</h2>\n             </div>\n             <div class = "box">\n                \x3c!--Form--\x3e\n                <div class = "contact form">\n                   <h3>Send us a Message!</h3>\n                   <form>\n                      <div class = "formBox">\n                         <div class = "row50">\n                            <div class = "inputBox">\n                               <span>First Name</span>\n                               <input type = "text" placeholder="Lwazi">\n                            </div>\n                            <div class = "inputBox">\n                               <span>Last Name</span>\n                               <input type = "text" placeholder="Harden">\n                            </div>\n                         </div>\n                         <div class = "row50">\n                            <div class = "inputBox">\n                               <span>Email</span>\n                               <input type = "text" placeholder="lwazim1@gmail.com">\n                            </div>\n                            <div class = "inputBox">\n                               <span>Mobile</span>\n                               <input type = "text" placeholder="201-867-5309">\n                            </div>\n                         </div>\n                         <div class = "row50">\n                            <div class = "inputBox">\n                               <span>Email</span>\n                               <input type = "text" placeholder="lwazim1@gmail.com">\n                            </div>\n                         </div>\n                         <div class = "row100">\n                            <div class = "inputBox">\n                               <span>Message</span>\n                               <textarea placeholder="Write your message..."></textarea>\n                            </div>\n                         </div>\n                         <div class = "row100">\n                            <div class = "inputBox">\n                               <input type = "submit" value = "Send">\n                            </div>\n                         </div>\n                      </div>\n                   </form>\n                </div>\n                \x3c!--info Box--\x3e\n                <div class = "contact info">\n                   <h3>Contact Info</h3>\n                   <div class = "infoBox">\n                      <div>\n                         <span>\n                            <ion-icon name="location"></ion-icon>\n                         </span>\n                         <p> Kistap County, Bremerton <br> Washington </p>\n                      </div>\n                      <div>\n                         <span>\n                            <ion-icon name="mail"></ion-icon>\n                         </span>\n                         <a href = "malito:loremipsum@gmail.com">BremertonBurgers@gmail.com</a>\n                      </div>\n                      <div>\n                         <span>\n                            <ion-icon name="call"></ion-icon>\n                         </span>\n                         <a href = "tel:+16034134124">+1 603-413-4124</a>\n                      </div>\n                      \x3c!--Social Media Links--\x3e\n                      <ul class = "sci">\n                         <li>\n                            <a href = "#">\n                               <ion-icon name="logo-facebook"></ion-icon>\n                            </a>\n                         </li>\n                         <li>\n                            <a href = "#">\n                               <ion-icon name="logo-twitter"></ion-icon>\n                            </a>\n                         </li>\n                         <li>\n                            <a href = "#">\n                               <ion-icon name="logo-linkedin"></ion-icon>\n                            </a>\n                         </li>\n                         <li>\n                            <a href = "#">\n                               <ion-icon name="logo-instagram"></ion-icon>\n                            </a>\n                         </li>\n                      </ul>\n                   </div>\n                </div>\n                \x3c!--Map--\x3e\n                <div class = "contact map">\n                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43075.625752914246!2d-122.71899485119029!3d47.56337919946291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1658165793856!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">\n                   </iframe>\n                </div>\n             </div>\n          </div\n       </body>\n    </html>\n        ',n.appendChild(a)})();var s=i(379),o=i.n(s),r=i(795),c=i.n(r),l=i(569),m=i.n(l),d=i(565),p=i.n(d),u=i(216),g=i.n(u),h=i(589),f=i.n(h),v=i(426),x={};x.styleTagTransform=f(),x.setAttributes=p(),x.insert=m().bind(null,"head"),x.domAPI=c(),x.insertStyleElement=g(),o()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;const b=document.querySelectorAll("[data-tab-target]"),y=document.querySelectorAll("[data-tab-content]");b.forEach((n=>{n.addEventListener("click",(e=>{const i=document.querySelector(n.dataset.tabTarget);y.forEach((n=>{n.classList.remove("current")})),i.classList.add("current"),b.forEach((n=>{n.classList.remove("current")})),e.target.classList.add("current")}))}))})()})();
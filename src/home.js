const homePage = document.createElement("div");

const initialPageLoad = (() => {
    const contentContainer = document.querySelector("#content");
    homePage.innerHTML = `<div id="home" class="current" data-tab-content>
    <div id = "tab-content" >
        <div id = "header-items">
   </div>
</div>
    <div id = "home-items">
        <h2 class = "headingt-burger">Best Burgers in Bremerton</h2>
        <br>
        <p class = "burger-paragraph">Locally Sourced x Crafted with Love</p>
        <br>
        <a data-tab-target = "#menu" class = "order-now">Order Now</a>
        <br>
    </div>
    </div>
</div>
        `
    contentContainer.appendChild(homePage);
})();

export { initialPageLoad, homePage}
const homePage = document.createElement("div");

const initialPageLoad = (() => {
    const contentContainer = document.querySelector("#content");
    homePage.classList.add("tab-content");
    homePage.innerHTML = `
    <div class = "tab-content">
        <div id = "header-items">
   </div>
</div>
    <div id = "home-items">
        <h2 class = "headingt-burger">Best Burgers in Bremerton</h2>
        <br>
        <p class = "burger-paragraph">Locally Sourced x Crafted with Love</p>
        <br>
        <button class = "burger-button">Order Now</button>
        <br>
    </div>
    </div>
</div>
        `
    contentContainer.appendChild(homePage);
})();

export { initialPageLoad, homePage}
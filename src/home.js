const initialPageLoad = (() => {
    const contentContainer = document.querySelector("#content");

    const homePage = document.createElement("div");
    homePage.innerHTML = `
    <div class = "burger-background">
    <div id = "header-items">
    <div id = "home-items">
    <h2 class = "headingt-burger">Best Burgers in Bremerton</h2>
    <p class = "burger-paragraph">Locally Sourced x Crafted with Love</p>
    <button class = "burger-button">Order Now</button>

        </div>
        </div>
        </div>
        `
    contentContainer.appendChild(homePage);
})();

export { initialPageLoad }
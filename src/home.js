const createHomePage = (() => {
    const homeContainer = document.querySelector("#content");

    const home = document.createElement("div");
    home.innerHTML = `
    <div class = "hero">
        <h1 class = "desc">Best Burgers in Bremerton</h1>
        <p> Locally Sourced x Crafed with Care </p> 
        <div class = "btn-container">
            <a class = "order-now"Order Now</a>
        </div>
    </div>`;

    homeContainer.appendChild(home);
})();

export {createHomePage};
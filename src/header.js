const headerPage = (() => {
    const contentContainer = document.querySelector("#content");

    const header = document.createElement("div")

    header.innerHTML = `
    <ul class = "pages">
        <a href = "">Burger Bros</a>
        <a href = "#about">About</a>
        <a href = "#menu">Menu</a>
        <a href = "#contact">Contact</a>
    </ul>`;
    contentContainer.appendChild(header);
})();
export {headerPage}
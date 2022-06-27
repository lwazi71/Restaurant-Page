function initialPageLoad(){
    const contentContainer = document.querySelector("#content");

    const burgerBackground = document.createElement("div");
    burgerBackground.classList.add("burger-background");
    contentContainer.appendChild(burgerBackground);
    
    const heading = document.createElement("h2");
    heading.textContent = "Best Burgers in Bremerton";
    heading.classList.add("heading-burger");
    burgerBackground.appendChild(heading);

    const burgerParagraph = document.createElement("p");
    burgerParagraph.classList.add("burger-paragraph");
    burgerParagraph.textContent = "Locally Sourced x Crafted with Love";
    burgerBackground.appendChild(burgerParagraph);

    const burgerButton = document.createElement("button");
    burgerButton.classList.add("burger-button");
    burgerButton.textContent = "Order Now";
    burgerBackground.appendChild(burgerButton);
}

export { initialPageLoad }
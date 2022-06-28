function initialPageLoad(){
    const contentContainer = document.querySelector("#content");
    const homeItems = document.querySelector("#home-items");
    const headerItems = document.querySelector("#header-items");


    const burgerBackground = document.createElement("div");
    burgerBackground.classList.add("burger-background");
    contentContainer.appendChild(burgerBackground);
    burgerBackground.appendChild(homeItems);
    burgerBackground.appendChild(headerItems);
    
    const heading = document.createElement("h2");
    heading.textContent = "Best Burgers in Bremerton";
    heading.classList.add("heading-burger");
    homeItems.appendChild(heading);

    const burgerParagraph = document.createElement("p");
    burgerParagraph.classList.add("burger-paragraph");
    burgerParagraph.textContent = "Locally Sourced x Crafted with Love";
    homeItems.appendChild(burgerParagraph);

    const burgerButton = document.createElement("button");
    burgerButton.classList.add("burger-button");
    burgerButton.textContent = "Order Now";
    homeItems.appendChild(burgerButton);


}

export { initialPageLoad }
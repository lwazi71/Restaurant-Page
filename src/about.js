const aboutPage = document.createElement("div");

const aboutPageLoad = (() => {
    aboutPage.setAttribute("id","about");
    aboutPage.setAttribute("data-tab-content", "");
    const contentContainer = document.querySelector("#content");

    aboutPage.innerHTML =`
    <div class="wrapper">
    <div class="row">
        <div class="image-section">
            <img class = "about" src= "./images/about.jpg" alt="">
        </div>
        <div class="content">
            <h1>About Us</h1>
            <h2>Our Restaurant</h2>
            <p>
                Hospitality-focused, dedicated to excellence, and highly knowledgeable are just a few terms most often used to describe Brementon's Burgers. We prepare and serve high quality, simple food, at a great value in a home-like envrionment. Come down to Brementon to  have a laugh and try our tasty burgers.
            </p>
        <br>
        <h2>Our Mission</h2>
        <p>
            At Brementon's Burgers our mission is simple: enhance and educate the palate with the freshest ingredients and flavors, while surprising and exciting each guest with personal care and service.
        </p>
        </div>
    </div>
</div>`
contentContainer.appendChild(aboutPage);

})();
export{aboutPageLoad, aboutPage};
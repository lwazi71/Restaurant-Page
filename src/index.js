import {initialPageLoad, homePage }  from './home.js';
import { generateMenuPage, menu } from './menu.js';
import {aboutPageLoad, aboutPage} from './about.js';
import './style.css';


const menuPage = document.getElementById("menu");
const aboutSection = document.getElementById("about");
const contactPage = document.getElementById("contact")

menuPage.addEventListener("click",() => {
    menu.classList.add("current");
    homePage.remove("current");
    aboutPage.remove("current");
})
aboutSection.addEventListener("click", () => {
    homePage.remove("current");
    menu.remove("current");
    aboutPage.classList.add("current")
}) 

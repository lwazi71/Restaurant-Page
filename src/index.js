import {initialPageLoad, homePage }  from './home.js';
import { generateMenuPage, menu } from './menu.js';
import {aboutPageLoad, aboutPage} from './about.js';
import {contactPageLoad, contactPage} from './contact.js';
import './style.css';


const menuSection = document.getElementById("menu");
const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");



menuSection.addEventListener("click",() => {
    menu.classList.add("current");
    homePage.remove("current");
    aboutPage.remove("current");
})
aboutSection.addEventListener("click", () => {
    aboutPage.classList.add("current");
    homePage.remove("current");
    menu.remove("current");
})

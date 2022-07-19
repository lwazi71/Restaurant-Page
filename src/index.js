import { initialPageLoad, homePage} from './home.js';
 
import { generateMenuPage, menu } from './menu.js';

import { aboutPageLoad,aboutPage } from './about.js';

import {  contactPageLoad, contactPage } from './contact.js';

import './style.css';
 
 
 const menuSection = document.getElementById("menu");
 const aboutSection = document.getElementById("about");
 const contactSection = document.getElementById("contact");
 const linkPages = document.querySelectorAll(".page");
 
 const tabs = document.querySelectorAll('[data-tab-target]');
 const tabsContents = document.querySelectorAll("[data-tab-content]")
 /*
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
 contactSection.addEventListener("click")
 */
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabsContents.forEach(tabContent => {
            tabContent.classList.remove('current');

        })

        target.classList.add('current');

        //loop through 'li' items and remove 'active' class
        tabs.forEach(tab => {
              tab.classList.remove('current');
          })

       //add 'active' class to clicked 'li' item
        e.target.classList.add("current");

    })
})
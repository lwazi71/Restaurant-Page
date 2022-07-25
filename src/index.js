import { initialPageLoad, homePage} from './home.js';
 
import { generateMenuPage, menu } from './menu.js';

import { aboutPageLoad,aboutPage } from './about.js';

import {  contactPageLoad, contactPage } from './contact.js';

import './style.css';
 
 const tabs = document.querySelectorAll('[data-tab-target]');
 const tabsContents = document.querySelectorAll("[data-tab-content]")



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
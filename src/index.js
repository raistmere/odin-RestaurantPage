// js imports
import pageLoad from './pageLoad.js';
import homeLoad from './homeLoad.js';
import menuLoad from './menuLoad.js';
import contactLoad from './contactLoad.js';

// css imports
import css from './style.css';

// img imports
import headerBGImg from './headerLogo.png';

//Webpage setup
pageLoad();

// Reference to the midContent so we can manipulate it
const midContent = document.querySelector(".midContent");

//  Sidebar button reference so we can add event listeners to
const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const contactButton = document.querySelector('.contactButton');

//Assign eventlisteners to each sidebar button that will refresh/change midContent
// Using .bind and homeLoad will use 'this' to append children.
homeButton.addEventListener('click', homeLoad.bind(midContent), false);
menuButton.addEventListener('click', menuLoad.bind(midContent), false);
contactButton.addEventListener('click', contactLoad.bind(midContent), false);


//Set starting content default to homeLoad content
contactLoad.bind(midContent)();

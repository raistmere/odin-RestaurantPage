// This script handles loading the page with the base html structure.
// Should really be called pageSetup.js instead.

export default function pageLoad()
{
    //This is the main div container that holds the page content.
    const container = document.getElementById('content');
    console.log(container);

    // Create a element that will be the header for the page
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Pizza Station";
    container.appendChild(header);

    // Create a new element that will hold the sidebar & middleContent
    const midContainer = document.createElement("div");
    midContainer.classList.add("midContainer");
    container.appendChild(midContainer);

    // Create a new element that will be the navigation sidebar
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    sidebar.textContent = "SIDEBAR";
    midContainer.appendChild(sidebar);

    // Create a new element for the middleContent
    // This will be the container that will be changing/clearing
    const midContent = document.createElement("div");
    midContent.classList.add("midContent");
    midContainer.appendChild(midContent);

    // Create the sidebar button container for webpage navigation
    const sidebarButtons = document.createElement("div");
    sidebarButtons.classList.add("sidebarButtons");
    sidebar.appendChild(sidebarButtons);

    // Create each sidebar button
    // Home Button
    const homeButton = document.createElement("button");
    homeButton.classList.add("homeButton");
    homeButton.textContent = "Home";
    sidebarButtons.appendChild(homeButton);
    // Menu Button
    const menuButton = document.createElement("button");
    menuButton.classList.add("menuButton");
    menuButton.textContent = "Menu";
    sidebarButtons.appendChild(menuButton);
    // Contact Button
    const contactButton = document.createElement("button");
    contactButton.classList.add("contactButton");
    contactButton.textContent = "Contact";
    sidebarButtons.appendChild(contactButton);
}
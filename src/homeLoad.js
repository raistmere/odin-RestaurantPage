// NOTE: 'this' will be the midContent that is .bind to the function call. We use that to append children.

export default function()
{
        // Clear all of the children from the container before adding new children.
        this.innerHTML = '';
        
        // Main Home Header\\
        // Create a element for the menu header
        const menuHeader = document.createElement("div");
        menuHeader.classList.add("menuHeader");
        menuHeader.textContent = "Welcome to Pizza Station, home of the best pizza in the quadrant!";
        this.appendChild(menuHeader);
}
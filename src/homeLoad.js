// NOTE: 'this' will be the midContent that is .bind to the function call. We use that to append children.

export default function()
{
        // Clear all of the children from the container before adding new children.
        this.innerHTML = '';

        // Header\\
        // Create a element for the menu header
        const homeHeader = document.createElement("div");
        homeHeader.classList.add("homeHeader");
        homeHeader.textContent = "Welcome to Pizza Station, home of the best pizza in the quadrant!";
        this.appendChild(homeHeader);

        // Image of pizza nad space
        const pizzaSpaceImg = document.createElement("div");
        pizzaSpaceImg.classList.add("pizzaSpaceImg");
        this.appendChild(pizzaSpaceImg);
}
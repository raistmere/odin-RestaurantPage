// NOTE: 'this' will be the midContent that is .bind to the function call. We use that to append children.

export default function()
{
    // Clear all of the children from the container before adding new children.
    this.innerHTML = '';

    // Main MENU Header\\
    // Create a element for the menu header
    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menuHeader");
    menuHeader.textContent = "Welcome to our space menu!";
    this.appendChild(menuHeader);

    // Menu Catagory Containers\\
    // Creates a header for the pizza catagory
    const pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("pizzaContainer");
    this.appendChild(pizzaContainer);
    // Creates a header for the wings catagory
    const wingsContainer = document.createElement("div");
    this.appendChild(wingsContainer);
    // Creates a header for the desserts catagory
    const dessertContainer = document.createElement("div");
    this.appendChild(dessertContainer);

    // Pizza Catagory\\
    // Pizza header element
    const pizzaHeader = document.createElement("div");
    pizzaHeader.classList.add("pizzaHeader");
    pizzaHeader.textContent = "Pizza";
    pizzaContainer.appendChild(pizzaHeader);
    // Pizza types container
    const pizzaTypes = document.createElement("div");
    pizzaTypes.classList.add("pizzaTypes");
    pizzaContainer.appendChild(pizzaTypes);
    //Pizza type 1 element
    const pizza1 = document.createElement("div");
    pizza1.classList.add("pizza");
    pizza1.textContent = "Pizza 1";
    pizzaTypes.appendChild(pizza1);
    //Pizza type 2 element
    const pizza2 = document.createElement("div");
    pizza2.classList.add("pizza");
    pizza2.textContent = "Pizza 2";
    pizzaTypes.appendChild(pizza2);
}
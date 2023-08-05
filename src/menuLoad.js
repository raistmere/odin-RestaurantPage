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
    
    //              \\
    // Pizza Catagory\\
    //                \\

    // Creates a container for the pizza catagory
    const pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("pizzaContainer");
    this.appendChild(pizzaContainer);
    // Pizza header element
    const pizzaHeader = document.createElement("div");
    pizzaHeader.classList.add("pizzaHeader");
    pizzaHeader.textContent = "Pizza";
    pizzaContainer.appendChild(pizzaHeader);
    // Pizza types container
    const pizzaTypes = document.createElement("div");
    pizzaTypes.classList.add("pizzaTypes");
    pizzaContainer.appendChild(pizzaTypes);

    //Pizza 1 container\\
    const pizza1 = document.createElement("div");
    pizza1.classList.add("pizza");
    pizzaTypes.appendChild(pizza1);
    // Pizza 1 title
    const pizza1Title = document.createElement("div");
    pizza1Title.classList.add("pizzaTitle");
    pizza1Title.textContent = "Spacer-roni Pizza"
    pizza1.appendChild(pizza1Title);
    // Pizza 1 description
    const pizza1Text = document.createElement("div");
    pizza1Text.classList.add("pizzaText");
    pizza1Text.textContent = "Our traditional pepperoni pizza topped with space quality pepperoni that is out of this world!"
    pizza1.appendChild(pizza1Text);

    //Pizza type 2 container\\
    const pizza2 = document.createElement("div");
    pizza2.classList.add("pizza");
    pizzaTypes.appendChild(pizza2);
    // Pizza 2 title
    const pizza2Title = document.createElement("div");
    pizza2Title.classList.add("pizzaTitle");
    pizza2Title.textContent = "Cheezy Asteriod Pizza"
    pizza2.appendChild(pizza2Title);
    // Pizza 2 description
    const pizza2Text = document.createElement("div");
    pizza2Text.classList.add("pizzaText");
    pizza2Text.textContent = "This asteriod has so much cheese that an explosion would be cheeeeezy"
    pizza2.appendChild(pizza2Text);

    //Pizza type 3 container\\
    const pizza3 = document.createElement("div");
    pizza3.classList.add("pizza");
    pizzaTypes.appendChild(pizza3);
    // Pizza 3 title
    const pizza3Title = document.createElement("div");
    pizza3Title.classList.add("pizzaTitle");
    pizza3Title.textContent = "The Enterprise"
    pizza3.appendChild(pizza3Title);
    // Pizza 3 description
    const pizza3Text = document.createElement("div");
    pizza3Text.classList.add("pizzaText");
    pizza3Text.textContent = "This pizza has everything you need! The flagship of the Pizza Station. It makes other supreme pizzas look like pepperon pizzas"
    pizza3.appendChild(pizza3Text);

    // WINGS MENU \\

    // Creates a header for the wings catagory
    const wingsContainer = document.createElement("div");
    wingsContainer.classList.add("menuTypeContainer");
    this.appendChild(wingsContainer);
    // Wings header element
    const wingsHeader = document.createElement("div");
    wingsHeader.classList.add("menuTypeHeader");
    wingsHeader.textContent = "Wings";
    wingsContainer.appendChild(wingsHeader);
    // Pizza types container
    const wingsTypes = document.createElement("div");
    wingsTypes.classList.add("itemTypes");
    wingsContainer.appendChild(wingsTypes);

    //Wings 1 container\\
    const wings1 = document.createElement("div");
    wings1.classList.add("items");
    wingsTypes.appendChild(wings1);
    // Wings 1 title
    const wings1Title = document.createElement("div");
    wings1Title.classList.add("itemTitle");
    wings1Title.textContent = "Gravity Wings"
    wings1.appendChild(wings1Title);
    // Wings 1 description
    const wings1Text = document.createElement("div");
    wings1Text.classList.add("itemText");
    wings1Text.textContent = "The ol'fashion wings. No sauce just the taste of pure chicken....in space."
    wings1.appendChild(wings1Text);

    //Wings 2 container\\
    const wings2 = document.createElement("div");
    wings2.classList.add("items");
    wingsTypes.appendChild(wings2);
    // Wings 2 title
    const wings2Title = document.createElement("div");
    wings2Title.classList.add("itemTitle");
    wings2Title.textContent = "Space Cowboy Wings"
    wings2.appendChild(wings2Title);
    // Wings 2 description
    const wings2Text = document.createElement("div");
    wings2Text.classList.add("itemText");
    wings2Text.textContent = "Smothered with quality bbq sauce and only for the best. Just for you space cowboy!"
    wings2.appendChild(wings2Text);

    //Wings 3 container\\
    const wings3 = document.createElement("div");
    wings3.classList.add("items");
    wingsTypes.appendChild(wings3);
    // Wings 3 title
    const wings3Title = document.createElement("div");
    wings3Title.classList.add("itemTitle");
    wings3Title.textContent = "Supernova Wings"
    wings3.appendChild(wings3Title);
    // Wings 3 description
    const wings3Text = document.createElement("div");
    wings3Text.classList.add("itemText");
    wings3Text.textContent = "Sooooo hot that it makes your mouth explode with goodness and suffering....literally"
    wings3.appendChild(wings3Text);
}
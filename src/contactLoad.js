// NOTE: 'this' will be the midContent that is .bind to the function call. We use that to append children.

export default function()
{
    // Clear all of the children from the container before adding new children.
    this.innerHTML = '';

    // Main MENU Header\\
    // Create a element for the menu header
    const contactHeader = document.createElement("div");
    contactHeader.classList.add("contactHeader");
    contactHeader.textContent = "Want to contact us?";
    this.appendChild(contactHeader);

    // Creates a container for the phone catagory
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("catagoryContainer");
    this.appendChild(phoneContainer);
    // Phone header element
    const phoneHeader = document.createElement("div");
    phoneHeader.classList.add("catagoryHeader");
    phoneHeader.textContent = "By Phone";
    phoneContainer.appendChild(phoneHeader);
    // Phone text element
    const phoneText = document.createElement("div");
    phoneText.classList.add("catagoryText");
    phoneText.textContent = "888-888-8888";
    phoneContainer.appendChild(phoneText);

    // Creates a container for the email catagory
    const emailContainer = document.createElement("div");
    emailContainer.classList.add("catagoryContainer");
    this.appendChild(emailContainer);
    // Phone header element
    const emailHeader = document.createElement("div");
    emailHeader.classList.add("catagoryHeader");
    emailHeader.textContent = "By Email";
    emailContainer.appendChild(emailHeader);
    // Phone text element
    const emailText = document.createElement("div");
    emailText.classList.add("catagoryText");
    emailText.textContent = "fakecontact@fakedomain.com";
    emailContainer.appendChild(emailText);
 
}
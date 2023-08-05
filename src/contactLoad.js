// NOTE: 'this' will be the midContent that is .bind to the function call. We use that to append children.

export default function()
{
    // Clear all of the children from the container before adding new children.
    this.innerHTML = '';

    const header = document.createElement("div");
    header.textContent = "CONTACT HEADER";
    this.appendChild(header);
}
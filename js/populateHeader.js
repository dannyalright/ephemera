function showTags(dataObject) {
    const tagFilterSection = document.getElementById("tagFilterSection");

    // Split out our data object into array pairs (tag, count (amount of occurances))
    const entries = Object.entries(dataObject);

    // Destructure(?) object in order to process the tag name and count separately
    for (const [tag, count] of entries) {
        const tagListItem = document.createElement("li");
        const tagListItemInput = document.createElement("input");
        tagListItemInput.type = "checkbox";

        // TODO: why doesn't this 'checked' value render?
        // tagListItemInput.checked = true;

        tagListItemInput.id = tag;
        tagListItemInput.value = tag;
        const tagListItemLabel = document.createElement("label");
        tagListItemLabel.htmlFor = tag;
        tagListItemLabel.textContent = tag;

        tagListItem.appendChild(tagListItemInput);
        tagListItem.appendChild(tagListItemLabel);

        const tagListItemLabelSpan = document.createElement("span");
        tagListItemLabelSpan.textContent = ` (${count})`;

        // Add span element to the li element
        tagListItemLabel.appendChild(tagListItemLabelSpan);

        // Add li element to the ul element
        tagFilterSection.appendChild(tagListItem);
    }
}

// TODO: make something similar to showTags for showTypes
function showTypes(name) {
    alert(`Hello, ${name}!`)
}

function showYears(dataObject) {
    console.log(dataObject);
    const yearFilterSection = document.getElementById("yearFilterSection");

    // Prepare empty array
    const unsortedYears = [];

    // Slice up years from data dates
    for (let i = 0; i < dataObject.length; i++) {
        const singleYear = dataObject[i].date.slice(0, 4);
        // Push years into array
        unsortedYears.push(singleYear);
    }

    // Sort years array
    const sortedYears = unsortedYears.sort();

    // Loop through sorted array
    for (let k = 0; k < sortedYears.length; k++) {
        const itemYear = sortedYears[k];

        const yearListItem = document.createElement("li");
        const yearListItemInput = document.createElement("input");
        yearListItemInput.type = "checkbox";

        // TODO: why doesn't this 'checked' value render?
        // yearListItemInput.checked = true;

        yearListItemInput.id = itemYear;
        yearListItemInput.value = itemYear;
        const yearListItemLabel = document.createElement("label");
        yearListItemLabel.htmlFor = itemYear;
        yearListItemLabel.textContent = itemYear;

        yearListItem.appendChild(yearListItemInput);
        yearListItem.appendChild(yearListItemLabel);

        const yearListItemLabelSpan = document.createElement("span");
        yearListItemLabelSpan.textContent = ` (count)`;

        // Add span element to the li element
        yearListItemLabel.appendChild(yearListItemLabelSpan);

        // Add li element to the ul element
        yearFilterSection.appendChild(yearListItem);

    }
}
export { showTags, showTypes, showYears };
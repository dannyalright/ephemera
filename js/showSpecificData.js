export default function (data, parserFunction, key, element) {
    const specificDataFilterSection = document.getElementById(element);

    // Prepare object for tags and their counts
    const specificDataAndItsCounts = {};
    // Split out our data object into array pairs (tag, count (amount of occurances))
    // AKA uniqueDataParserFunction
    parserFunction(data, specificDataAndItsCounts);

    const entries = Object.entries(specificDataAndItsCounts);

    // Destructure(?) object in order to process the tag name and count separately
    for (const [key, count] of entries) {
        const specificDataListItem = document.createElement("li");
        const specificDataListItemInput = document.createElement("input");
        specificDataListItemInput.type = "checkbox";

        specificDataListItemInput.checked = false;

        specificDataListItemInput.id = key;
        specificDataListItemInput.value = key;
        const specificDataListItemLabel = document.createElement("label");
        specificDataListItemLabel.htmlFor = key;
        specificDataListItemLabel.textContent = key;

        specificDataListItem.appendChild(specificDataListItemInput);
        specificDataListItem.appendChild(specificDataListItemLabel);

        const specificDataListItemLabelSpan = document.createElement("span");
        specificDataListItemLabelSpan.textContent = ` (${count})`;

        // Add span element to the li element
        specificDataListItemLabel.appendChild(specificDataListItemLabelSpan);

        // Add li element to the ul element
        specificDataFilterSection.appendChild(specificDataListItem);
    }
}
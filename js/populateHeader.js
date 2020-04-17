function showTags(object) {
    const tagFilterSection = document.getElementById("tagFilterSection");

    // Split out our data object into array pairs (tag, amount of occurances)
    const entries = Object.entries(object);

    for (const [tag, count] of entries) {
        const tagListItem = document.createElement("li");
        const tagListItemInput = document.createElement("input");
        tagListItemInput.type = "checkbox";
        //     TODO: why doesn't this 'checked' value render?
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

        //     Add span element to the li element
        tagListItemLabel.appendChild(tagListItemLabelSpan);
        //     Add li element to the ul element
        tagFilterSection.appendChild(tagListItem);
    }
}

export {showTags};
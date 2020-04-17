import data from './data.js'
import showData from './showData.js'
import parseDataForTags from './parseDataForTags.js'

// Get sections
const header = document.querySelector("header");
const section = document.querySelector("section");
// Show ephemera on body of page
showData(data, section);

// Prepare object for tags and their counts
const dataAndCounts = {};


// Parse ephemera to extract tag information
parseDataForTags(data, dataAndCounts);

// console.log(dataAndCounts);

//
function populateHeader(object) {
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

populateHeader(dataAndCounts);
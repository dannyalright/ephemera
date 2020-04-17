export default function () {
    // https://www.kirupa.com/html5/filtering_items_in_a_list.htm

    // Gather all ephemera page elements
    const itemsToFilter = document.querySelectorAll("#itemsToFilter article");

    // Setup click event handlers on all checkboxes
    const checkboxes = document.querySelectorAll(".filterSection li input");

    // Get results section ready
    const resultsSection = document.getElementById("resultsSection");
    const resultsCount = document.getElementById("resultsCount");
    const resetButton = document.getElementById("resetButton");

    // Make list of filters
    const filterListArray = []

    // Go through all checkboxes
    for (let i = 0; i < checkboxes.length; i++) {
        // Listen to clicks on checkboxes
        checkboxes[i].addEventListener("click", filterItems, false);
        // Ensure browser starts with every checkbox turned off
        checkboxes[i].checked = false;
    }

    // Set up event handler referenced above
    function filterItems(e) {
        const clickedItem = e.target;

        // If going from unchecked to checked...
        if (clickedItem.checked == true) {
            hideOrShowItems(clickedItem.value, "hideItem", "showItem");
            // Add item to filterListArray array
            filterListArray.push(clickedItem.value);
            // Add item to filter list
            addToFilterList(clickedItem.value);
            // If going from checked to unchecked...
        } else if (clickedItem.checked == false) {
            hideOrShowItems(clickedItem.value, "showItem", "hideItem");
            // Remove item from filterListArray array
            const index = filterListArray.indexOf(clickedItem.value);
            filterListArray.splice(index, 1);
            // Remove item from filter list
            removeFromFilterList(clickedItem);
        }
        // console.log(filterListArray.length);
        hideOrShowResetButton(filterListArray, resetButton);
        // TODO: return filters to user
    }

    // Show or hide our content based on class
    function hideOrShowItems(itemValue, classToRemove, classToAdd) {
        // Go through list of ephemera page elements
        for (let i = 0; i < itemsToFilter.length; i++) {
            // Access each item
            const currentItem = itemsToFilter[i];

            // console.log(currentItem.getAttribute("data-tags"));
            // Check this item's value to see if it matches the value of the checkbox that was changed
            if (currentItem.getAttribute("data-type") == itemValue) {
                currentItem.classList.remove(classToRemove);
                currentItem.classList.add(classToAdd);
            } else if (currentItem.getAttribute("data-year") == itemValue) {
                currentItem.classList.remove(classToRemove);
                currentItem.classList.add(classToAdd);
            } else if (currentItem.getAttribute("data-country") == itemValue) {
                currentItem.classList.remove(classToRemove);
                currentItem.classList.add(classToAdd);
            }
        }
    }

    // 
    function addToFilterList(filterItem) {
        const resultsStringToAdd = document.createElement("div");
        resultsStringToAdd.textContent = filterItem;
        resultsStringToAdd.setAttribute("data-value", filterItem);
        resultsSection.appendChild(resultsStringToAdd);
    }

    function removeFromFilterList(filterItem) {
        // console.log(resultsSection.childElementCount)

        for (let i = 0; i < resultsSection.childElementCount; i++) {
            const chip = resultsSection.children[i];
            if (chip.getAttribute("data-value") == filterItem.value) {
                chip.remove()
            }
        }
    }

    function hideOrShowResetButton(array, button) {
        if (array.length < 1) {
            // If there are no filters shown...
            button.classList.remove("showItem");
            button.classList.add("hideItem");
        } else {
            // If there is more than one filter shown...
            button.classList.remove("hideItem");
            button.classList.add("showItem");
        }

    }

}
export default function (data) {
    // https://www.kirupa.com/html5/filtering_items_in_a_list.htm

    // Gather all ephemera page elements
    const pageItems = document.querySelectorAll("#itemsToFilter article");

    // Setup click event handlers on all checkboxes
    const checkboxes = document.querySelectorAll(".filterSection li input");

    // Get results section ready
    const resultsSection = document.getElementById("resultsSection");
    const resultsCount = document.getElementById("resultsCount");
    // const resetButton = document.getElementById("resetButton");

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
            // hideOrShowItems(clickedItem.value, "hideItem", "showItem");
            // Add item to filterListArray array
            filterListArray.push(clickedItem.value);
            // Add item to filter list
            addToFilterList(clickedItem.value);
            // If going from checked to unchecked...
        } else if (clickedItem.checked == false) {
            // hideOrShowItems(clickedItem.value, "showItem", "hideItem");
            // Remove item from filterListArray array
            const index = filterListArray.indexOf(clickedItem.value);
            filterListArray.splice(index, 1);
            // Remove item from filter list
            removeFromFilterList(clickedItem);
        }
        // console.log(filterListArray.length);
        // hideOrShowResetButton(filterListArray, resetButton);
        // TODO: return filters to user
        // return filterListArray;
        refreshData(filterListArray)
    }

    // Show or hide our content based on class
    function hideOrShowItems(itemValue, classToRemove, classToAdd) {
        // Go through list of ephemera page elements
        for (let i = 0; i < pageItems.length; i++) {
            // Access each item
            const currentItem = pageItems[i];

            // console.log(currentItem.getAttribute("data-tags"));
            // Check this item's value to see if it matches the value of the checkbox that was changed
            // if (currentItem.getAttribute("data-type") == itemValue) {
            //     currentItem.classList.remove(classToRemove);
            //     currentItem.classList.add(classToAdd);
            // } else if (currentItem.getAttribute("data-year") == itemValue) {
            //     currentItem.classList.remove(classToRemove);
            //     currentItem.classList.add(classToAdd);
            // } else if (currentItem.getAttribute("data-country") == itemValue) {
            //     currentItem.classList.remove(classToRemove);
            //     currentItem.classList.add(classToAdd);
            // }
        }
    }

    // 
    function addToFilterList(filterItem) {
        const resultsStringToAdd = document.createElement("div");
        resultsStringToAdd.textContent = filterItem;
        resultsStringToAdd.classList.add("chip");
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

    // function hideOrShowResetButton(array, button) {
    //     if (array.length < 1) {
    //         // If there are no filters shown...
    //         button.classList.remove("showItem");
    //         button.classList.add("hideItem");
    //     } else {
    //         // If there is more than one filter shown...
    //         button.classList.remove("hideItem");
    //         button.classList.add("showItem");
    //     }

    // }

    function refreshData(filterNames) {
        if (filterNames.length > 0) {
            console.log(filterNames);

            // Go through list of ephemera page elements
            for (let i = 0; i < pageItems.length; i++) {
                // Access each item
                const currentItem = pageItems[i];

                // Manually deconstruct this item's dataset into one array
                const currentItemBooleanData = []
                currentItemBooleanData.push(currentItem.getAttribute("data-type"), currentItem.getAttribute("data-year"), currentItem.getAttribute("data-country"));
                const currentItemTags = currentItem.getAttribute("data-tags").split(',');
                const currentItemAllData = currentItemBooleanData.concat(currentItemTags);

                // Check this item's dataset array if it contains any matches to the filtered names array
                for (let j = 0; j < filterNames.length; j++) {
                    // console.log(filterNames[j]);

                    if (currentItemAllData.includes(filterNames[j])) {
                        // This item's dataset array contains a match with the filtered names array
                        // Show this item
                        currentItem.classList.remove("hideItem");
                        currentItem.classList.add("showItem");
                    } else {
                        // This item's dataset array does not contain a match with the filtered names array
                        // Hide this item
                        currentItem.classList.remove("showItem");
                        currentItem.classList.add("hideItem");
                    }
                }

            }




            // const pageItemDataType = currentItem.dataset.type;
            // const pageItemDataYear = currentItem.dataset.year;
            // const pageItemDataCountry = currentItem.dataset.country;
            // console.log(pageItemDataType);
            // console.log(currentItem.getAttribute("data-type"));
            // console.log(pageItemDataYear);
            // console.log(pageItemDataCountry);

            // if (currentItem.getAttribute("data-type") == pageItemDataType) {
            //     currentItem.classList.remove("hideItem");
            //     currentItem.classList.add("showItem");
            // } else if (currentItem.getAttribute("data-year") == pageItemDataYear) {
            //     currentItem.classList.remove("hideItem");
            //     currentItem.classList.add("showItem");
            // } else if (currentItem.getAttribute("data-country") == pageItemDataCountry) {
            //     currentItem.classList.remove("hideItem");
            //     currentItem.classList.add("showItem");
            // }
            // hideOrShowItems(itemValue, classToRemove, classToAdd)

            // for (let j = 0; j < pageItems.length; j++) {
            //     console.log(pageItems[j].dataset.type);
            // }

            // hideOrShowItems(filterNames[i], "hideItem", "showItem");
            // }

            // console.log(data);
            // const resetButton = document.createElement("button");
            // resetButton.innerHTML = "Reset";
            // resultsSection.appendChild(resetButton);
            // resetButton.addEventListener ("click", function() {
            //     alert("did something");
            //   });

        } else {
            console.log(`Reset to showing everything—remove the hideItem class`);
            resetAllData();
            // resetButton.remove();
        }
    }

    function resetAllData() {
        // Go through list of ephemera page elements
        for (let i = 0; i < pageItems.length; i++) {
            console.log("Resetting all items...");
            // Access each item
            const currentItem = pageItems[i];
            // Reset its classes
            currentItem.classList.remove("hideItem");
            currentItem.classList.add("showItem");

        }
    }

}
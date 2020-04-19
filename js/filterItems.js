export default function (data) {
    // Gather all ephemera page elements
    const pageItems = document.querySelectorAll("#itemsToFilter article");

    // Setup click event handlers on all checkboxes
    const checkboxes = document.querySelectorAll(".filterSection li input");

    // Get results section ready
    const resultsSection = document.getElementById("resultsSection");
    const resultsCount = document.getElementById("resultsCount");
    // const resetButton = document.getElementById("resetButton");

    // Make list of filters
    const showOnlyItemsWithTheseFilters = []

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
            // Add item to showOnlyItemsWithTheseFilters array
            showOnlyItemsWithTheseFilters.push(clickedItem.value);
            // Add item to filter list
            addToFilterList(clickedItem.value);
            // If going from checked to unchecked...
        } else if (clickedItem.checked == false) {
            // Remove item from showOnlyItemsWithTheseFilters array
            const index = showOnlyItemsWithTheseFilters.indexOf(clickedItem.value);
            showOnlyItemsWithTheseFilters.splice(index, 1);
            // Remove item from filter list
            removeFromFilterList(clickedItem);
        }
        refreshData(showOnlyItemsWithTheseFilters)
    }

    // 
    function addToFilterList(filterItem) {
        const resultsStringToAdd = document.createElement("button");
        resultsStringToAdd.textContent = filterItem;
        resultsStringToAdd.classList.add("chip");
        resultsStringToAdd.setAttribute("data-value", filterItem);
        resultsSection.appendChild(resultsStringToAdd);
    }

    function removeFromFilterList(filterItem) {
        for (let i = 0; i < resultsSection.childElementCount; i++) {
            const chip = resultsSection.children[i];
            if (chip.getAttribute("data-value") == filterItem.value) {
                chip.remove()
            }
        }
    }

    function refreshData(listOfFilters) {
        if (listOfFilters.length > 0) {
            // Go through list of ephemera page elements and extract their dataset
            const pageItemsAndTheirData = [...document.querySelectorAll('#itemsToFilter article')]
                .map(element => ({ element: element, dataset: Object.values(element.dataset) }));

            function filterPageItems(filtersList) {
                pageItemsAndTheirData.forEach(item => {
                    if (filtersList.some(data => item.dataset.includes(data))) {
                        item.element.classList.remove("hideItem")
                    } else {
                        item.element.classList.add("hideItem")
                    }
                })
            }
            filterPageItems(listOfFilters);

        } else {
            resetAllData();
            // resetButton.remove();
        }
    }

    function resetAllData() {
        // Go through list of ephemera page elements
        for (let i = 0; i < pageItems.length; i++) {
            // Access each item
            const currentItem = pageItems[i];
            // Reset its classes
            currentItem.classList.remove("hideItem");
        }
    }

}
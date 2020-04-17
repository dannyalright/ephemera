export default function () {
    // https://www.kirupa.com/html5/filtering_items_in_a_list.htm

    // Gather all ephemera page elements
    const itemsToFilter = document.querySelectorAll("#itemsToFilter article");

    // Setup click event handlers on all checkboxes
    const checkboxes = document.querySelectorAll(".filterSection li input");

    for (let i = 0; i < checkboxes.length; i++) {
        // Listen to clicks on checkboxes
        checkboxes[i].addEventListener("click", filterItems, false);
        // Make sure browser starts with every checkbox selected
        checkboxes[i].checked = true;
    }

    // Set up event handler referenced above
    function filterItems(e) {
        const clickedItem = e.target;

        // TODO see if this below if statement could be replaced with a toggle thing
        // like https://alligator.io/js/classlist/#toggle

        if (clickedItem.checked == true) {
            hideOrShowItems(clickedItem.value, "hideItem", "showItem");
        } else if (clickedItem.checked == false) {
            hideOrShowItems(clickedItem.value, "showItem", "hideItem");
        } else {
            // TODO: Deal with the interderminate state if needed?
        }
    }

    // Show or hide our content based on class
    function hideOrShowItems(itemValue, classToRemove, classToAdd) {
        // Go through list of ephemera page elements
        for (let i = 0; i < itemsToFilter.length; i++) {
            // Access each item
            const currentItem = itemsToFilter[i];

            // console.log(currentItem.attributes.value);
            // Check this item's value to see if it matches the value of the checkbox that was changed
            if (currentItem.getAttribute("data-type") == itemValue) {
                currentItem.classList.remove(classToRemove);
                currentItem.classList.add(classToAdd);
            }
        }
    }
}
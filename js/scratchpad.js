function hideOrShowItems(itemValue, classToRemove, classToAdd) {
    // Go through list of ephemera page elements
    for (let i = 0; i < itemsToFilter.length; i++) {
        // Access each item
        const currentItem = itemsToFilter[i];

        // console.log(currentItem.attributes);

        for (let k = 0; k < currentItem.attributes.length; k++) {
            // console.log(currentItem.attributes[k].value);

            const currentItemAttributes = currentItem.attributes[k].value;

            if (currentItemAttributes.includes(itemValue)) {
                // console.log(`This contains ${itemValue}`);
                currentItem.classList.remove(classToRemove);
                currentItem.classList.add(classToAdd);
            }
        }
    }
}
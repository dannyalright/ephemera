export default function (items, object) {
    // Create first array
    const tagsAsTheyCome = [];

    // Go through each ephemera item
    for (let i = 0; i < items.length; i++) {
        // Go through each tag in each ephemera item
        const tags = items[i].tags;
        for (let j = 0; j < tags.length; j++) {
            // Add this tag to the first array
            tagsAsTheyCome.push(tags[j]);
        }
    }

    // Sort original array alphabetically
    const tagsAlphabetised = tagsAsTheyCome.sort();

    // Turn this alphabetically-organised array (and the amount of occurances for each item) into an object
    // https://stackoverflow.com/a/5668029/2009441
    for (let k = 0; k < tagsAlphabetised.length; k++) {
        const num = tagsAlphabetised[k];
        object[num] = object[num] ? object[num] + 1 : 1;
    }
}
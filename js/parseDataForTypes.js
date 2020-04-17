export default function (items, object) {
    // Create first array
    const typesAsTheyCome = [];

    // Go through each ephemera item
    for (let i = 0; i < items.length; i++) {
        // Go through each date in each ephemera item and slice the type
        const type = items[i].type;
        typesAsTheyCome.push(type);
    }

    // Sort original array
    const typesSorted = typesAsTheyCome.sort();

    // Turn this sorted array (and the amount of occurances for each item) into an object
    // https://stackoverflow.com/a/5668029/2009441
    for (let k = 0; k < typesSorted.length; k++) {
        const num = typesSorted[k];
        object[num] = object[num] ? object[num] + 1 : 1;
    }
}
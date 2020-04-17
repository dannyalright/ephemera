export default function (items, object) {
    // Create first array
    const yearsAsTheyCome = [];

    // Go through each ephemera item
    for (let i = 0; i < items.length; i++) {
        // Go through each date in each ephemera item and slice the year
        const year = items[i].date.slice(0, 4);
        yearsAsTheyCome.push(year);
    }

    // Sort original array
    const yearsSorted = yearsAsTheyCome.sort();
    // Reverse array so latest years are first
    // TODO: Why doesn't this work?
    const yearsReversed = yearsSorted.reverse();

    // Turn this sorted array (and the amount of occurances for each item) into an object
    // https://stackoverflow.com/a/5668029/2009441
    for (let k = 0; k < yearsReversed.length; k++) {
        const num = yearsReversed[k];
        object[num] = object[num] ? object[num] + 1 : 1;
    }
}
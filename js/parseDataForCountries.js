export default function (items, object) {
    // Create first array
    const countriesAsTheyCome = [];

    // Go through each ephemera item
    for (let i = 0; i < items.length; i++) {
        // Go through each location in each ephemera item and split up by comma
        const locationArray = items[i].location.split(",");
        // Made a variable based on whatever is after the last comma (the country)
        const country = locationArray[locationArray.length - 1];
        // Add this to the array
        countriesAsTheyCome.push(country);
    }

    // Sort original array alphabetically
    const countriesSorted = countriesAsTheyCome.sort();

    // Turn this sorted array (and the amount of occurances for each item) into an object
    // https://stackoverflow.com/a/5668029/2009441
    for (let k = 0; k < countriesSorted.length; k++) {
        const num = countriesSorted[k];
        object[num] = object[num] ? object[num] + 1 : 1;
    }
}
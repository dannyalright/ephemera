import data from './data.js'
import showData from './showData.js'
import parseDataForTags from './parseDataForTags.js'
import * as populateHeader from './populateHeader.js'
import filterItems from './filterItems.js';

// Get sections
// const header = document.querySelector("header");
const section = document.querySelector("section");

// Show ephemera on body of page
showData(data, section);

// Prepare object for tags and their counts
const dataAndCounts = {};

// Parse ephemera to extract tag information
parseDataForTags(data, dataAndCounts);
populateHeader.showTags(dataAndCounts);

// Parse ephemera to extract years
populateHeader.showYears(data);

// TODO: Parse ephemera to extract data types
// parseDataforTypes()
// populateHeader.showTypes(dataAndTypes);

// Handle filtering when checkboxes are changed
filterItems();
import data from './data.js'
import showData from './showData.js'
import parseDataForTags from './parseDataForTags.js'
import * as populateHeader from './populateHeader.js'

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
// populateHeader.sayHello("Sally");
import data from './data.js'
import showData from './showData.js'
import * as populateHeader from './populateHeader.js'
import filterItems from './filterItems.js';

import parseDataForTags from './parseDataForTags.js'

import showSpecificData from './showSpecificData.js';
import parseDataForYears from './parseDataForYears.js';



// Show ephemera on body of page
showData(data);

// populateHeader.showTags(data);

// Parse ephemera to extract tags
showSpecificData(data, parseDataForTags, "tag", "tagFilterSection")
// Parse ephemera to extract years
showSpecificData(data, parseDataForYears, "year", "yearFilterSection")

// populateHeader.showYears(data);

// TODO: Parse ephemera to extract data types
// parseDataforTypes()
// populateHeader.showTypes(dataAndTypes);

// Handle filtering when checkboxes are changed
filterItems();
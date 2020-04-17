import data from './data.js'
import showData from './showData.js'
// import * as populateHeader from './populateHeader.js'
import filterItems from './filterItems.js';

import parseDataForTypes from './parseDataForTypes.js'
import parseDataForTags from './parseDataForTags.js'
import parseDataForYears from './parseDataForYears.js';
import parseDataForCountries from './parseDataForCountries.js';
import showSpecificData from './showSpecificData.js';


// Show all ephemera on body of page
showData(data);

// Show options to filter at top
// Parse ephemera to extract types
showSpecificData(data, parseDataForTypes, "type", "typeFilterSection")
// Parse ephemera to extract tags
showSpecificData(data, parseDataForTags, "tag", "tagFilterSection")
// Parse ephemera to extract years
showSpecificData(data, parseDataForYears, "year", "yearFilterSection")
// Parse ephemera to extract countries
showSpecificData(data, parseDataForCountries, "country", "countryFilterSection")

// Show count at top

// Every time I click on a checkbox...
// Enter 'filtered' mode:
// Handle filtering when checkboxes are changed
filterItems(data);
// Show filtered 'chip' at top (with option to cancel filter)
// Update count
// Update rendered article array













// populateHeader.showTags(data);
// populateHeader.showYears(data);

// TODO: Parse ephemera to extract data types
// parseDataforTypes()
// populateHeader.showTypes(dataAndTypes);


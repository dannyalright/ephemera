import parseDataForTags from './parseDataForTags.js'
import parseDataForYears from './parseDataForYears.js'
import showSpecificData from './showSpecificData.js';

// showSpecificData(data, parseDataForTags, "tag", "tagFilterSection")
// TODO: turn into class showSomething(data, uniqueDataParserFunction) for tags, years, etc


// TODO: make something similar to showTags for showTypes
function showTypes(name) {
    alert(`Hello, ${name}!`)
}

export { showTypes };
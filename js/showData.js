import slugify from './slugify.js'

export default function (items) {
    const parentElement = document.querySelector("section");

    for (let i = 0; i < items.length; i++) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myPara2 = document.createElement("p");
        const myImg = document.createElement("img");
        const myList = document.createElement("ul");

        // const date = new Date(items[i].date);

        myH2.textContent = items[i].name;
        myPara1.textContent = items[i].location;
        myPara2.textContent = items[i].type;
        myImg.src = `https://ik.imagekit.io/dw/ephemera/${slugify(items[i].name)}.${
            items[i].format
            }?tr=w-200"`;

        // Give each item a data attribute for type 'analog' or 'digital'
        myArticle.setAttribute("data-type", items[i].type);

        // Give each item a data attribute for tags array
        myArticle.setAttribute("data-tags", items[i].tags);

        // Give each item a data attribute for year array
        myArticle.setAttribute("data-year", items[i].date.slice(0, 4));

        // Go through each location in each ephemera item and split up by comma
        const locationArray = items[i].location.split(",");
        // Made a variable based on whatever is after the last comma (the country)
        const country = locationArray[locationArray.length - 1];
        // Give each item a data attribute for country array
        myArticle.setAttribute("data-country", country);

        // Make each item list its tags
        const tags = items[i].tags;
        for (let j = 0; j < tags.length; j++) {
            const listItem = document.createElement("li");
            listItem.textContent = tags[j];
            myList.appendChild(listItem);
        }

        // Render everything on the DOM
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myImg);
        myArticle.appendChild(myList);
        parentElement.appendChild(myArticle);
    }
}
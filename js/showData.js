import slugify from './slugify.js'

export default function (items, parentElement) {

    for (let i = 0; i < items.length; i++) {
        const myArticle = document.createElement("article");
        const myH2 = document.createElement("h2");
        const myPara1 = document.createElement("p");
        const myImg = document.createElement("img");
        const myList = document.createElement("ul");

        const date = new Date(items[i].date);

        myH2.textContent = items[i].name;
        myPara1.textContent = items[i].location;
        myImg.src = `https://ik.imagekit.io/dw/ephemera/${slugify(items[i].name)}.${
            items[i].format
            }?tr=w-200"`;

        // Give each item a data attribute for type 'analog' or 'digital'
        myArticle.setAttribute("data-type", items[i].type);

        // Give each item a data attribute for tags array
        myArticle.setAttribute("data-tags", items[i].tags);

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
        myArticle.appendChild(myImg);
        myArticle.appendChild(myList);
        parentElement.appendChild(myArticle);
    }
}
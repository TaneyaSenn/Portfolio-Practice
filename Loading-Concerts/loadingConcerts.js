window.addEventListener("load", function () {

            function addCard(concertsItem) {

            // get container element
            const container = document.querySelector("#container"); 
            };
        
            concerts.forEach(function(concertsItem) {
    
            // create div for new card
            const newCard = document.createElement("div");
            // create div for header of new card
            const header = document.createElement("div");
            // create div for body of new card
            const body = document.createElement("div");    
            
            // add classes respectively
            newCard.classList.add("card");
            header.classList.add("card-header");
            body.classList.add("card-body");
        
            // create a href for url
            const a = document.createElement("a");
            a.href = concertsItem.url;
        
            // create img for concert card image
            const img = document.createElement("img");
            img.classList.add("card-image");
            img.src =  `./assets/${concertsItem.imageName}`;
        
            // create h1 element for title/concert name then add class and innerHTML
            const title = document.createElement("h1");
            title.classList.add("card-title");
            title.innerHTML = concertsItem.name;
        
            // create p element for text/description then add class and innerHTML
            const text = document.createElement("p");
            text.classList.add("card-text");
            text.innerHTML = concertsItem.description;
    
            // add img element to a and add a to header
            a.appendChild(img);
            header.appendChild(a);
        
            // add title and text to body
            body.appendChild(title);
            body.appendChild(text);
            
            // add header div to new card
            newCard.appendChild(header);
    
            // add body to div of new card
            newCard.appendChild(body);
        
            //add new card to container
            container.appendChild(newCard);
        });
        
     


});
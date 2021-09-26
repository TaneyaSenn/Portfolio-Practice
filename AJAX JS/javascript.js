window.addEventListener("load", function() {

     /* Base url */
     const url = "https://trex-sandwich.com/auckland-online-cs719-assignment-01";


     /* Global table const variables and appending of children */
     const tableHead = document.getElementById("tableHead");
     const headRow = document.createElement("tr");
     tableHead.appendChild(headRow);
  
     const pokemonTable = document.querySelector("table");
     const pokemonTableBody = document.createElement("tbody");
     pokemonTable.appendChild(pokemonTableBody);
 
 
     /* Function to get pokemon types */
     async function getPokemonLink() {
         const pokemonResponse = await fetch(`${url}/services/pokemon/types`);
         const pokemonJson = await pokemonResponse.json();
         // console.log(pokemonJson);
         return pokemonJson; 
     }
 
     /* Function to create table and head */
     async function createTable(){
         const pokemonJson = await getPokemonLink();
         createTableHead();
             for (let typesArray = 0; typesArray < pokemonJson.length; typesArray++) {
                 const typesColumn = document.createElement("tr");
                 pokemonTableBody.appendChild(typesColumn);
                 typesColumn.innerHTML += `<td><b>${pokemonJson[typesArray].name}</b></td>`;
                 for (let nestedArray = 0; nestedArray < pokemonJson.length; nestedArray++) {
                     const dataRows = document.createElement("td");
                     typesColumn.appendChild(dataRows);
                     dataRows.innerHTML += `${pokemonJson[typesArray].data[nestedArray]}`;
                 }
             }
     }
 
     /* Function to create table head */
     async function createTableHead(){
         const pokemonJson = await getPokemonLink();
         const emptyFirstCol = document.createElement("th");
         headRow.appendChild(emptyFirstCol);
             for (let typesArray = 0; typesArray < pokemonJson.length; typesArray++) {
                 const headingCol = document.createElement("th");
                 headRow.appendChild(headingCol);
                 headingCol.innerHTML += `${pokemonJson[typesArray].name}`;
         }
     }
 
     createTable();
     
 
     /* Function to get random pokemon to be featured */
     async function getFeaturedPokemonLink(){
         const featuredResponse = await fetch(`${url}/services/pokemon/summary/random`);
         const featuredPokemonJson = await featuredResponse.json();
         // console.log(featuredPokemonJson);
         return featuredPokemonJson;
     }
 
     /* Function to display random pokemon */
     async function displayFeaturedPokemon() {
         const featuredPokemonJson = await getFeaturedPokemonLink();
         const featuredName = document.querySelector(".card-header");
         featuredName.innerHTML += `<h5>${featuredPokemonJson.name}</h5>`
         const featuredImg = document.querySelector("#featuredImg");
         featuredImg.src = (`${url}/images/${featuredPokemonJson.imageUrl}`);
         const typesParagraph = document.querySelector("#typesParagraph");
         typesParagraph.innerHTML = `<b>Types: </b>${featuredPokemonJson.types}`;    
         const featuredId = `${featuredPokemonJson.id}`;   
         return featuredId;
     }
 
     displayFeaturedPokemon();
 
     /* Function and EventListener to handle button click event */
     function handleButtonClick(event) {
         const featuredName = document.querySelector(".card-header");
         featuredName.innerHTML = '<h5></h5>';
         displayFeaturedPokemon();     
     }
     
     const randBtn = document.getElementById("randomizeBttn");
     randBtn.addEventListener("click", handleButtonClick);
     
});
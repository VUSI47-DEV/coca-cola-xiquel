const response = {
    "pokedata": [
       {
          "name": "Bulbasaur",
          "type": "Grass",
          "hp": 45,
          "attack": 49,
          "defense": 49,
          "spAttack": 65,
          "spDefense": 65,
          "speed": 45,
          "total": 318
       },
       {
          "name": "Ivysaur",
          "type": "Grass",
          "hp": 60,
          "attack": 62,
          "defense": 63,
          "spAttack": 80,
          "spDefense": 80,
          "speed": 60,
          "total": 405
       },
       {
          "name": "Venusaur",
          "type": "Grass",
          "hp": 80,
          "attack": 82,
          "defense": 83,
          "spAttack": 100,
          "spDefense": 100,
          "speed": 80,
          "total": 525
       },
       {
          "name": "Charmander",
          "type": "Fire",
          "hp": 39,
          "attack": 52,
          "defense": 43,
          "spAttack": 60,
          "spDefense": 50,
          "speed": 65,
          "total": 309
       },
       {
          "name": "Charmeleon",
          "type": "Fire",
          "hp": 58,
          "attack": 64,
          "defense": 58,
          "spAttack": 80,
          "spDefense": 65,
          "speed": 80,
          "total": 405
       },
       {
          "name": "Charizard",
          "type": "Fire",
          "hp": 78,
          "attack": 84,
          "defense": 78,
          "spAttack": 109,
          "spDefense": 85,
          "speed": 100,
          "total": 534
       },
       {
          "name": "Squirtle",
          "type": "Water",
          "hp": 44,
          "attack": 48,
          "defense": 65,
          "spAttack": 50,
          "spDefense": 64,
          "speed": 43,
          "total": 314
       },
       {
          "name": "Wartortle",
          "type": "Water",
          "hp": 59,
          "attack": 63,
          "defense": 80,
          "spAttack": 65,
          "spDefense": 80,
          "speed": 58,
          "total": 405
       },
       {
          "name": "Blastoise",
          "type": "Water",
          "hp": 79,
          "attack": 83,
          "defense": 100,
          "spAttack": 85,
          "spDefense": 105,
          "speed": 78,
          "total": 530
       },
       {
          "name": "Caterpie",
          "type": "Bug",
          "hp": 45,
          "attack": 30,
          "defense": 35,
          "spAttack": 20,
          "spDefense": 20,
          "speed": 45,
          "total": 195
       }
    ]
 }
 
 const tableContent = document.getElementById("table-content")
 const tableButtons = document.querySelectorAll("th button");
 
 const createRow = (obj) => {
   const row = document.createElement("tr");
   const objKeys = Object.keys(obj);
   objKeys.map((key) => {
     const cell = document.createElement("td");
     cell.setAttribute("data-attr", key);
     cell.innerHTML = obj[key];
     row.appendChild(cell);
   });
   return row;
 };
 
 const getTableContent = (data) => {
   data.map((obj) => {
     const row = createRow(obj);
     tableContent.appendChild(row);
   });
 };
 
 const sortData = (data, param, direction = "asc") => {
   tableContent.innerHTML = '';
   const sortedData =
     direction == "asc"
       ? [...data].sort(function (a, b) {
           if (a[param] < b[param]) {
             return -1;
           }
           if (a[param] > b[param]) {
             return 1;
           }
           return 0;
         })
       : [...data].sort(function (a, b) {
           if (b[param] < a[param]) {
             return -1;
           }
           if (b[param] > a[param]) {
             return 1;
           }
           return 0;
         });
 
   getTableContent(sortedData);
 };
 
 const resetButtons = (event) => {
   [...tableButtons].map((button) => {
     if (button !== event.target) {
       button.removeAttribute("data-dir");
     }
   });
 };
 
 window.addEventListener("load", () => {
   getTableContent(response.pokedata);
 
   [...tableButtons].map((button) => {
     button.addEventListener("click", (e) => {
       resetButtons(e);
       if (e.target.getAttribute("data-dir") == "desc") {
         sortData(response.pokedata, e.target.id, "desc");
         e.target.setAttribute("data-dir", "asc");
       } else {
         sortData(response.pokedata, e.target.id, "asc");
         e.target.setAttribute("data-dir", "desc");
       }
     });
   });
 });
 
//1: Fetch

/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch("https://api.agify.io?name=michael")
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
    });

/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io'; */

const baseUrl = "https://api.nationalize.io";

const search = (event) => {
    const input$$ = document.querySelector("input");

    fetch(baseUrl + "?name=" + input$$.value)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        });
};

const button$ = document.querySelector("button");

button$.addEventListener("click", search);

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

const baseUrlOne = "https://api.nationalize.io";

const searchOne = () => {
    const input$$ = document.querySelector("input");

    fetch(baseUrlOne + "?name=" + input$$.value)
        .then((response) => response.json())
        .then((persona) => {
            createNationalizeP(persona);
        });
};

const createNationalizeP = (persona) => {
    const p$$ = document.createElement("p");
    let text = `El nombre ${persona.name} tiene`;

    for (const country of persona.country) {
        const percentage = Math.floor(country.probability * 100);
        text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    }

    p$$.textContent = text;

    document.body.appendChild(p$$);
};

const buttonOne$ = document.querySelector("buttonOne");

buttonOne$.addEventListener("click", searchOne);


/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

const baseUrlTwo = "https://api.nationalize.io";

const searchTwo = () => {
    const input$$ = document.querySelector("input");

    fetch(baseUrlTwo + "?name=" + input$$.value)
        .then((response) => response.json())
        .then((persona) => {
            createNationalizePTwo(persona);
        });
};

const createNationalizePTwo = (persona) => {
    let text = `El nombre ${persona.name} tiene`;

    for (const country of persona.country) {
        const percentage = Math.floor(country.probability * 100);
        text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    }

    const div$$ = document.createElement("div");
    const p$$ = document.createElement("p");
    const buttonTwo$$ = document.createElement("buttonTwo");

    p$$.textContent = text;
    buttonTwo$$.innerHTML = "X";

    div$$.appendChild(p$$);
    div$$.appendChild(buttonTwo$$);

    buttonTwo$$.addEventListener("click", () => {
        removeP(div$$);
    });
    document.body.appendChild(div$$);
};

const removeP = (nodeEl$$) => {
    nodeEl$$.remove();
};

const buttonTwo$ = document.querySelector("buttonTwo");

buttonTwo$.addEventListener("click", searchTwo);
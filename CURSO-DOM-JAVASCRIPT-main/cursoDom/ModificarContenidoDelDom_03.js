// MODIFICAR HTML TEXTO DEL ELEMENTO

//------------------------------------
// |            .nodeName
// |
// | Devuelve o retorna el nodo (nombre de la etiqueta)
// | en mayusculas, retorna un string
// | 
// |
// | 
// | elemento.nodeName
//------------------------------------

const mainTitle = document.querySelector('.header__title');
console.log(mainTitle.nodeName);
const nextElementTitle = mainTitle.nextSibling;
console.log(nextElementTitle.nodeName);
const childTitle = mainTitle.firstChild;
console.log(childTitle.nodeName);

//------------------------------------
// |            container.textContent
// |
// | Devuelve o cambia el contenido de texto
// | de la etiqueta, incluye espacios en blanco
// | 
// | Nos devuelte todo el texto que contenga
// | dentro incluyendo el texto de otras etiquetas
// | 
// | Nos permite cambiar el contenido de texto
// | de una etiqueta
// | 
// | 
// | elemento.textContent
//------------------------------------
const body = document.querySelector('body');
console.log(body.textContent);
const h1Text = mainTitle.textContent;
console.log(h1Text);
//mainTitle.textContent = 'Contenido Cambiado dinámicamente con JavasCript';

//------------------------------------
// |            container.innerText
// |
// | Devuelve o retorna el contenido de texto 
// | renderizado de la etiqueta visible en el
// | navegador
// |
// | Nos permite cambiar el contenido de texto
// | renderizado visible de la etiqueta
// | 
// | 
// | elemento.innerText
//------------------------------------

console.log(mainTitle.innerText);
console.log(body.innerText);

//------------------------------------
// |            .outerText
// |
// | Igual a innerText pero reemplaza 
// | la etiqueta contenedora también
// | 
// | 
// | 
// | elemento.outerText = "Texto agregado"
//------------------------------------

console.log(mainTitle.outerText);
//mainTitle.outerText = 'Texto nuevo'; // Remplaza también al <h1>

//------------------------------------
// |            .nodeType
// |
// | Devuelve el numero del tipo de elemento
// |
// |
// | 1 elementos pude ser un <div></div>
// | 
// | 3 tipo nodo de texto  
// | 
// | 8 comentarios
// | 
// | elemento.nodeType
//------------------------------------

const childNodesH1 = mainTitle.childNodes;
console.log(childNodesH1[0].nodeType);
console.log(childNodesH1[1].nodeType);
console.log(childNodesH1[3].nodeType);

// MODIFICAR HTML DEL ELEMENTO


//------------------------------------
// |            .innerHTML
// |
// | Igual a innerText pero en vez de devolver 
// | un texto, nos devuelve un string
// | Nos servirá para insertar HTML en una etiqueta
// | 
// | 
// | elemento.innerHTML
// |
// | Tener cuidado al permitir que el usuario
// | agregue código mediante innerHTML
// |
//------------------------------------

// console.log(mainTitle.innerHTML);
// let nombre = 'Alexander';
// let apellido = 'Maidana';
// // nombre = 'Pepe'
// mainTitle.innerHTML = '<h6>Soy un h6 <span>Soy un span dentro de un h6</span></h6>';
// mainTitle.innerHTML = `<h6>Hola!! soy ${nombre} ${apellido}</h6>`
//------------------------------------
// |            .outerHTML
// |
// | Igual a innerText pero en vez de devolver 
// | o modificar el HTML interior, nos devuelve
// | o nos modifica el HTML externo
// | 
// | elemento.outerHTML
// |
// | Tener cuidado al permitir que el usuario
// | agregue código mediante innerHTML
// |
//------------------------------------

// console.log(mainTitle.outerHTML);
// let nombre = 'Alexander';
// let apellido = 'Maidana';
// // nombre = 'Pepe'
// //mainTitle.outerHTML = '<h6>Soy un h6 <span>Soy un span dentro de un h6</span></h6>';
// mainTitle.outerHTML = `<h6>Hola!! soy ${nombre} ${apellido}</h6>`


// OBTENER O MODIFICAR LOS ATRIBUTOS DE ETIQUETAS



//------------------------------------
// |            elemento.id
// |
// |
// | Retorna un string con el nombre de id
// | Nos permite cambiar el id
// |
//------------------------------------

// const mainTitleId = document.getElementById('main-title');
// console.log(mainTitle.id);
// mainTitle.id = 'otro-id';

//------------------------------------
// |            elemento.hasAttributes()
// |
// | Retorna un booleano si la etiqueta tiene
// | un atributo o más, en caso de no tener false
// |
//------------------------------------

let hasAttributes = mainTitle.hasAttributes();
console.log(`Tiene atributos: ${hasAttributes}`)
let spanHasAttributes = mainTitle.children[0].hasAttributes();
console.log(`El span tiene atributos: ${spanHasAttributes}`);
//------------------------------------
// |            elemento.hasAttribute("nombreAtributo")
// |
// | Retorna un true si el atributo pasado por 
// | parametro existe, false si es que no.
// |
//------------------------------------

console.log(mainTitle.hasAttribute('class'));
console.log(mainTitle.hasAttribute('aria-label'));
console.log(mainTitle.hasAttribute('style'));

//------------------------------------
// |            elemento.getAttributeNames()
// |
// | Retorna un array con los atributos del elemento
// | 
//------------------------------------

console.log(mainTitle.getAttributeNames());

//------------------------------------
// |            elemento.getAttribute(nombreAtributo)
// |
// | Devuelve el valor del atributo pasado por 
// | parametro o null si no existe
// | 
//------------------------------------

console.log(mainTitle.getAttribute('id'));
console.log(mainTitle.getAttribute('class'));

//------------------------------------
// |  elemento.setAtribute("nombreAtributo", "valorAtributo")
// |
// | Añade un atributo con un valor o lo cambia
// | si es que ponemos como primer parametro el nombre de
// | un atributo ya existente.
//------------------------------------

mainTitle.setAttribute('class', 'title--crimson');
const btnChangeColor = document.querySelector('#btn-change-color');
btnChangeColor.setAttribute('aria-label', 'Cambiar color');

//------------------------------------
// |  elemento.removeAttribute("nombreAtributo")
// |
// | Elimina el atributo pasado por parametro
// | 
//------------------------------------

// mainTitle.removeAttribute('class');

// DE ESTA FORMA AGREGAMOS UN ATRIBUTO BOOLEANO

//divSolito.setAttribute("data-name", "");
// <div data-name></div>

// <div class="divConCompania container" desactivar>Texto rojo</div>

// boton.disabled = true;
// <button disabled>Boton</button>

// btnChangeColor.disabled = true;
// if (btnChangeColor.disabled) {
//     console.log('El botón está deshabilidato');
//     btnChangeColor.setAttribute('class', 'buttons__btn--hidden')
// }

//------------------------------------
// |  elemento.toggleAttribute("nombreAtributo")   
// |
// | Si existe ese atributo en la etiqueta lo quita
// |
// | Si no existe ese atributo en la etiqueta lo agrega
//------------------------------------

// btnChangeColor.toggleAttribute('aria-label');

/* .classList .classList.add() .classList.remove() .className
.classList */
/*
.classList
--> Nos devuelve una colección DOMTokenList que es un array 
que contiene todas las clases del elemento

.classList.add("nombreDeClase")
--> Agrega una clase a la lista de clases

.classList.remove("nombreClase")
--> Quita una clases de la lista de clases

.className
--> Devuelve un string con todas las clases del elemento*/

// console.log(btnChangeColor.classList);
// btnChangeColor.classList.add('buttons__btn--hidden');

// btnChangeColor.classList.remove('buttons__btn--hidden');

// btnChangeColor.classList.add('clase-agregada-1', 'clase-agregada-2', 'clase-agregada-3');
// btnChangeColor.classList.remove('clase-agregada-1', 'clase-agregada-2', 'clase-agregada-3');
// console.log(btnChangeColor.className);


/*** Objeto style ***/

/* .style -> Nos devuelve un objeto gigante con muchas propiedades y valores de los 
estilos en línea que tiene el elemento */

console.log(btnChangeColor.style);
/* acceder a una propiedad  del elemento y cambiar su valor.
no es mala práctica poner estilos en línea de forma dinámica con JS, si es mala práctica
ponerlos manuelmente desde el HTML*/
btnChangeColor.style.fontSize = '2rem';
btnChangeColor.style.padding = '2rem';

/*
METODOS QUE MÁS SE USAN


.split

.matches

.contains

.toggle




*/
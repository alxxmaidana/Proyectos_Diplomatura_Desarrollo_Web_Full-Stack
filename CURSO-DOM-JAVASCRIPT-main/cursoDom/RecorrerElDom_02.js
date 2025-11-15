//------------------------------------
// |            .children
// |
// | Devuelve o retorna un HTMLCollection 
// | 
// |
// | elemento.children 
//------------------------------------
// en caso de no encontrarlo devuelve un array HTMLCollection vacío []

const btn = document.querySelector('.btn');
console.log(btn.children);

const containerButtons = document.querySelector('.container__buttons');
console.log(containerButtons.children);

//------------------------------------
// |            .parentElement
// |
// | Devuelve o retorna la etiqueta padre
// | 
// |
// | elemento.parentElement 
//------------------------------------
// en caso de no encontrarlo devuelve un null

const pricipalTitle = document.getElementById('title-index');
console.log(pricipalTitle.parentNode)

const principalHeader = document.getElementsByTagName('header')[0];
console.log(principalHeader);
console.log(principalHeader.firstElementChild);


//------------------------------------
// |            .firstElementChild
// |
// | Devuelve o retorna el primer elemento hijo
// |
// | 
// | elemento.firstElementChild 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null

const buttonsInput = document.querySelector('.container__buttons');
console.log(buttonsInput.lastElementChild);

//------------------------------------
// |            .lastElementChild
// |
// | Devuelve o retorna el último elemento hijo
// |
// | 
// | elemento.lastElementChild 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null

const buttonsContainer2 = document.querySelector('.container__buttons');
console.log(buttonsContainer2.lastElementChild);

//------------------------------------
// |            .previousElementSibling
// |
// | Devuelve o retorna el hermano anterior
// |
// | 
// | elemento.previousElementSibling 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null

const buttonsContainer = document.querySelector('.container__buttons');
console.log(buttonsContainer.previousElementSibling);


//------------------------------------
// |            .nextElementSibling
// |
// | Devuelve o retorna el hermano posterior
// |
// | 
// | elemento.nextElementSibling 
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null

const headerPrincipal = document.querySelector('header');
console.log(headerPrincipal.nextElementSibling);

// METODOS IMPORTANTES
//------------------------------------
// |            .matches()
// |
// | Devuelve o retorna true o false si el elemento
// | coincide con el selector que le pasamos como parametro
// |
// | 
// | elemento.matches()
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null


const principalTitle = document.querySelector('#title-index');
console.log(principalTitle.matches('#title-index')); // True
console.log(principalTitle.matches('#title')); // False

if (principalTitle.matches('#title-index')) {
    console.log('La etiqueta coincide con el selector')
}


//------------------------------------
// |            .closest()
// |
// | Busca en la etiqueta padre más cercana si coincide el selector
// | pasado como argumento a la funcion .closest()
// |
// | 
// | elemento.closest()
//------------------------------------
// en caso de no encontrarlo al primer elemento hijo devuelve null

console.log(principalTitle.closest('#body'));

const principalBody = principalTitle.closest('#body');
console.log(principalBody)

// RECORRIENDO EL DOM A TRAVÉS DE NODOS


//------------------------------------
// |            .childNodes
// |
// | Devuelve o retorna un NodeList [text, p, text, p]
// | que incluye texto comentarios, parrafos etc
// |
// | 
// | elemento.childNodes
//------------------------------------
// en caso de no encontrarlo retorna un NodeList[] vacío

const nodosHijos = document.querySelector('#body');
console.log(nodosHijos.childNodes);

//------------------------------------
// |            .parentNode
// |
// | Devuelve o retorna el nodo padre del nodo
// | 
// |
// | 
// | elemento.parentNode
//------------------------------------
// en caso de no encontrarlo retorna un null

const nodoPadre = document.querySelector('.container__buttons');
console.log(nodoPadre.parentNode);


//------------------------------------
// |            .firstChild
// |
// | Devuelve el primer nodo hijo
// | 
// |
// | 
// | elemento.firstChild
//------------------------------------
// en caso de no encontrarlo retorna un null

const primerNodoHijo = document.querySelector('.btn');
console.log(primerNodoHijo.firstChild);

//------------------------------------
// |            .lastChild
// |
// | Devuelve el último nodo hijo
// | 
// |
// | 
// | elemento.lastChild
//------------------------------------
// en caso de no encontrarlo retorna un null

const ultimoNodoHijo = document.querySelector('.container__buttons');
console.log(ultimoNodoHijo.lastChild);

//------------------------------------
// |            .previousSibling
// |
// | Devuelve el nodo hermano anterior
// | 
// |
// | 
// | elemento.previousSibling
//------------------------------------
// en caso de no encontrarlo retorna un null

const nodoHermanoAnterior = document.querySelector('input');
console.log(nodoHermanoAnterior.previousSibling);

//------------------------------------
// |            .nextSibling
// |
// | Devuelve el nodo hermano posterior
// | 
// |
// | 
// | elemento.nextSibling
//------------------------------------
// en caso de no encontrarlo retorna un null

const nodoHermanoSiguiente = document.querySelector('.btn');
console.log(nodoHermanoSiguiente.nextSibling);
// console.log(document); imprime el elemento como html
// console.dir(document); imprime las propiedades del elemento

// Estos metodos nos sirver para obtener una etiqueta html y guardarla
// en una variable de javascript

//------------------------------------
// |        getElementById()
// |
// | Obtener una etiqueta por su id
// |
// | .getElementById("id") 
//------------------------------------
// en caso de no encontrarlo devuelve null

const tituloPrincipal = document.getElementById('title-index');
 console.log(tituloPrincipal);
 console.dir(tituloPrincipal);

//----------------------------------------------------
// |           getElementsByClassName()
// |
// | Obtener varias o una etiqueta por su clase 
// |
// | .getElementsByClassName("clase") 
//----------------------------------------------------
// en caso de no encontrarlo ninguno devuelve un array vacío HTMLCollection []


const btnPrincipal = document.getElementsByClassName('btn');
console.log(btnPrincipal);


//--------------------------------------------------------------
// |                getElementsByName()
// |
// | Obtener varias o una etiqueta por el valor de su atributo name 
// |
// | <input type="text" name="nombre">
// |
// | .getElementsByName("nombre") 
//---------------------------------------------------------------
// en caso de no encontrarlo devuelve un array vacío nodeList []


const inputsName = document.getElementsByName('nombre');
console.log(inputsName)


//------------------------------------
// |            getElementsByTagName()
// |
// | Obtener una o varias etiquetas por el nombre
// | 
// |
// | .getElementsByTagName("h1") 
//------------------------------------
// en caso de no encontrarlo devuelve un array vacío HTMLCollection []


const inputs = document.getElementsByTagName('input');
console.log(inputs)


//------------------------------------
// |            querySelector("")
// |
// | Obiene una sola etiqueta por el 
// | selector css que pongamos
// |
// | .querySelector("selectorCSS") 
//------------------------------------
// en caso de no encontrarlo devuelve null


const firtsBtn = document.querySelector('.container__buttons .btn');
console.log(firtsBtn);
console.log(firtsBtn instanceof HTMLCollection); // false
console.log(firtsBtn instanceof NodeList); // false

//------------------------------------
// |            querySelectorAll("")
// |
// | Devuelve un array con todas las etiquetas 
// | que coinciden con el selector
// |
// | .querySelector("selectorCSS") 
//------------------------------------
// en caso de no encontrarlo devuelve un array nodeList vacío []
// console.dir(padreDeContainerSpan instanceof Object);

const buttons = document.querySelectorAll('.containerButtons .btn');
console.log(buttons);
console.log(buttons instanceof HTMLAllCollection); // false
console.log(buttons instanceof NodeList); // true
buttons.forEach(btn => console.log('Botón:', btn));
buttons.forEach(btn => console.dir(btn));

// Nos permite saber si un elemento es Array nodelist etc
// console.log(byTag instanceof HTMLCollection);
// HTMLCollection || nodeList

// conceptos claves 
// - desestructuracion para convertir HTMLCollection a Array [...HTMLCollection]
// - Array.from(elemento) para convertir elemento a Array
// - console.log(elemento instanceof HTMLCollection); // preguntamos si elemento es un HTMLCollection
// - console.log(elemento.constructor.name) // nos da si es Array HTMLCollection

/* 
        CARACTERÍSTICA                  NodeList                                HtmlCollection
        Definición              Colección de nodos del DOM               Colección de elementos HTML
        

        Metodos de              document.querySelectorAll()              document.getElementsByTagName()
        obtención               .childNode                               document.getElementsByClassName()

        Tipos de nodos          Puede incluir elementos html, texto,     Solo incluye elementos html
                                comentarios
        
        Metodos disponibles     item(), forEach(), entries(), keys(),     item(), namedItem()
                                values()


        Acceso por índice                      si                                            si
        
        
        Iterabilidad                 Si, con un forEach()                  No, necesita convertirse a array


        Actualización en vivo            No, es estático                   Si, es dinámico(se actualiza automaticamente)


        
*/
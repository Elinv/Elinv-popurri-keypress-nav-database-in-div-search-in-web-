
// Para crear fragment de document => nodes
String.prototype.toDOM = function () {
    var d = document
        , i
        , a = d.createElement("div")
        , b = d.createDocumentFragment();
    a.innerHTML = this;
    while (i = a.firstChild) b.appendChild(i);
    return b;
};

// Base de datos en arraybidimensional
let codJS = [
[`Media type que me funciona!`, 
 `    
 /* tablet y telefono horizontal */
 @media screen and (max-width: 950px) {
 h1 {
         font-size: 4em;
     }
 }
     
 /* Responsive teléfono vertical */
 @media screen and (max-width: 600px) {
 h1 {
         font-size: 3em;
     }
 }
`
],
[`Linea separadora gradient`,
`
.hrF {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, 
    rgb(21, 0, 255), rgb(236, 17, 17), rgb(21, 
    0, 255));
}
`
],
[`Imagen de fondo`,
`
.fondoIMG{
    background-image: url('./fondos/Elinv.ojos.png');
    background-size: 40em;
    background-repeat: no-repeat;
    background-position: center;
    text-shadow: 3px 5px 2px #474747;
    height: 15em;
    padding-top: 3em;
    line-height: 3em;
}
`
]];


// cargamos al DOM
let iArr = 0;
codJS.forEach(element => {
    // Para poder enfocar un div 
    // contenteditable="true" es una forma la otra
    // o la otra agregando atributo tabindex
    let liStr = `
    <li>
    <input type="checkbox" checked>
    <h2>${element[0]}</h2>
    <p>
    <pre class="prettyprint bordeRedondeado">                
        ${element[1]}
    </pre>
    </p>
    </li>`;
    let nodo = liStr.toDOM();
    lista.appendChild(nodo);
});

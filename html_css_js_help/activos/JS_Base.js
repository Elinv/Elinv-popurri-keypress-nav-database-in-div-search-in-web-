
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
[`"class": sintaxis básica`, 
 `    
class User {                 
constructor(name) {
    this.name = name; 
}                 

sayHi() { 
    alert(this.name); 
}                 
}       
        
// Uso: 
let user = new User("Juan"); 
user.sayHi();`
],
[`cargar e insertar html async`,
`
// forma de utilización
// ?v=6 permite actualizar y evitar 
// el cache del navegador
// el número final debe cambiar cada vez.

getText("deDios.html?v=6", "Mistica");
getText("visitas.html?v=6", "visitasSection");

// Función para leer un archivo externo
async function getText(file, id) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.getElementById(id).innerHTML = myText;
}
`
],
[`Color aleatorio función`,
`
function getRandomColor() {
    const availableCharacters = '0123456789ABCDEF';
    const availableCharacterLength = availableCharacters.length;

    let color = '#';

    for (let i = 0; i &lt; 6; i++) {
        color += availableCharacters[Math.floor(Math.random() * availableCharacterLength)];
    }
}
`
],
[`Color aleatorio 4 formas`,
`
//1.
var color = '#'+Math.floor(Math.random()*256).toString(10);
//2.
var color = '#'+Math.floor(Math.random()*0xffffff).toString(16);
//3.
function rgb(){// rgb color random
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var rgb = 'rgb('+r+','+g+','+b+')';
    return rgb;
}
//4.
function color16(){// hexadecimal color random
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    return color;
}
`
],
[`Deshabilitar boton`,
`
let button = document.getElementById("btn");
button.setAttribute("disabled","true");
button.style.pointerEvents = "none";
button.style.opacity = 0.5;

//Disabling a html button
document.getElementById("Button").disabled = true;

//Enabling a html button
document.getElementById("Button").disabled = false;
`
],
[`Deshabilitar boton por un tiempo`,
`
const btn = document.getElementById("myBtn")
function myFunction() {
    btn.disabled = true;
    setTimeout(()=>{
        btn.disabled = false;
        console.log('Button Activated')}, 5000)
    }
}
`
],
[`Radio boton get value`,
`
if (document.getElementById('r1').checked) {
    rate_value = document.getElementById('r1').value;
}
`
],
[`document.onkeydown`,
`
document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 38) {
        prev();
    }
    if (e.keyCode == 40) {
        next();
    }
    return;
}
`
],
[`detect click dentro de los divs`,
`
document.addEventListener("click", function (event) {
    // Si el click es dentro del listado
    if (event.target.closest(".dataListElinv")) {
        lblinnerHTML.value = event.target.innerHTML;
        lblinnerHTML.style.display = "table";
    }
})
`
],
[`Llenar un tag con un array dinámicamente.`,
`
let iArr = 0;
telArr.forEach(element => {
    // Para poder enfocar un div 
    // contenteditable="true" es una forma la otra
    // o la otra agregando atributo tabindex
    let divStr = \`<div id="\${iArr}" tabindex="\${iArr++}" class="options">\${element}</div>\`
    let nodo = divStr.toDOM();
    listTel.appendChild(nodo);
});
`
],
[` setTimeout style display`,
`
setTimeout(function () {
    gral.style.display = "block";
}, 400);
`
],
[`Para crear fragment de document => nodes`,
`
String.prototype.toDOM = function () {
    var d = document
        , i
        , a = d.createElement("div")
        , b = d.createDocumentFragment();
    a.innerHTML = this;
    while (i = a.firstChild) b.appendChild(i);
    return b;
};
`
],
[`Fecha y hora con toLocaleString [options]`,
`
let date = new Date();
document.write(date.toLocaleString('es-AR', {
    weekday: 'short', // long, short, narrow
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
    hour: 'numeric', // numeric, 2-digit
    minute: 'numeric', // numeric, 2-digit
    second: 'numeric', // numeric, 2-digit
}));
`
],
[`Strip HTML tags from string`,
`
function stripHtml(s) {
    return s.replace(/\\&/g, '&amp;').replace(/\\</g, '&lt;').replace(/\\>/g, '&gt;').replace(/\\t/g, '&nbsp;&nbsp;&nbsp;').replace(/\\n/g, '<br />');
}
`
],
[`Año automático en footer `,
`
var d=new Date();
yr=d.getFullYear();
if (yr!=2002)
document.write("-"+yr);
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

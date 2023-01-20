
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
[`Simple HTML document`, 
 `    
 &lt;!DOCTYPE html&gt;
 &lt;html lang="en"&gt;
 &lt;head&gt;
     &lt;title&gt;Title of the document&lt;/title&gt;
 &lt;/head&gt;
 &lt;body&gt;

     &lt;h1&gt;This is a heading&lt;/h1&gt;
     &lt;p&gt;This is a paragraph.&lt;/p&gt;

 &lt;/body&gt;
 &lt;/html&gt;
 `
],
[`details tag`,
`

&lt;details&gt;
&lt;summary&gt;Ayuda en detalle&lt;/summary&gt;
&lt;p&gt;Especifique los detalles 
    que el usuario puede abrir 
    y cerrar a petición.

    La etiqueta se utiliza a menudo 
    para crear un widget interactivo 
    que el usuario puede abrir y cerrar. 
    
    De forma predeterminada, 
    el widget está cerrado. 
    
    Cuando se abre, 
    se expande y muestra 
    el contenido que contiene.

    Cualquier tipo de contenido 
    se puede poner dentro de la etiqueta.
 &lt;/p&gt;
&lt;/details&gt;
`
],
[`Form fieldset`,
`
&lt;form action="/action_page.php"&gt;
&lt;fieldset&gt;
    &lt;legend&gt;Personal:&lt;/legend&gt;
    &lt;label for="fname"&gt;First name:&lt;/label&gt;
    &lt;input type="text" id="fname" name="fname"&gt;&lt;br&gt;&lt;br&gt;
    &lt;label for="lname"&gt;Last name:&lt;/label&gt;
    &lt;input type="text" id="lname" name="lname"&gt;&lt;br&gt;&lt;br&gt;
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;&lt;br&gt;&lt;br&gt;
    &lt;label for="birthday"&gt;Birthday:&lt;/label&gt;
    &lt;input type="date" id="birthday" name="birthday"&gt;&lt;br&gt;&lt;br&gt;
    &lt;input type="submit" value="Submit"&gt;
&lt;/fieldset&gt;
&lt;/form&gt;
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

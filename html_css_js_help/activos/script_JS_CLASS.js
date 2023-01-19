class ulLiSearch {

    constructor(InputSearch) {
        this.InputSearch = InputSearch;
        // input search
        this.s = document.getElementById(InputSearch);
        this.$id = document.getElementById.bind(document);
        this.accent_map = { 'á': 'a', 'é': 'e', 'è': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u' };

    }

    // función para ver u ocultar todos los list en UL
    verList(ver, idUL, claseNoVer, claseVer) {
        // ocultamos todos los elementos li
        let ul = this.$id(idUL);
        let list = ul.getElementsByTagName('li');
        // for loop
        let c = list.length;
        for (let i = 0; i < c; i++) {
            if (ver) { //True => oculta
                list[i].classList.remove(claseVer);
                list[i].classList.add(claseNoVer);
            } else { //False => muestra
                list[i].classList.remove(claseNoVer);
                list[i].classList.add(claseVer);
            }
        }
    }

    returnCollectionList(idUL) {
        // retornamos la list collection
        let ul = this.$id(idUL);
        let list = ul.getElementsByTagName('li');
        return list;
    }

    // Para poder buscar a pesar de los acentos
    obviarAcentos(s) {
        if (!s) { return ''; }
        var ret = '';
        for (var i = 0; i < s.length; i++) {
            ret += this.accent_map[s.charAt(i)] || s.charAt(i);
        }
        return ret;
    }

    init(idUL, idLblHallados, thisClass ) {
        let that = this;
        
        // Param: *mostrar u ocultar, *id de UL, *clase oculta y *directiva muestra.
        this.verList(true, idUL, 'dNone', 'block');
        
        //input search si se hace doble click con el boton izquierdo del mouse
        this.s.addEventListener('dblclick', () => {
            // limpiamos el text input buscador de palabras
            this.$id(this.InputSearch).value = '';
            // limpiamos el contador de hallados.
            this.$id(idLblHallados).value = '';
        });

        this.s.addEventListener('keyup', function (event) {
            //Se ejecuta si no es espacio
            if (event.key !== " ") {
                // Separamos las palabras buscadas por espacio
                let pal = this.value.split(' ');
                //Creamos la expresión regular para buscar 
                // hasta por cuatro argumentos.
                let regexp;
                if (pal.length == 1) regexp = `(?=.*${pal[0]})`
                if (pal.length == 2) regexp = `(?=.*${pal[0]})(?=.*${pal[1]})`
                if (pal.length == 3) regexp = `(?=.*${pal[0]})(?=.*${pal[1]})(?=.*${pal[2]})`
                if (pal.length == 4) regexp = `(?=.*${pal[0]})(?=.*${pal[1]})(?=.*${pal[2]})(?=.*${pal[3]})`
                // Convertimos para comparación 'insensitive'
                regexp = regexp.toLowerCase();
                // obviamos acentos
                regexp = thisClass.obviarAcentos(regexp);

                // analizamos cada option
                let listCollection = thisClass.returnCollectionList(idUL);
                let tantos = listCollection.length;
                let hallados = 0;
                let res;
                for (let i = 0; i < tantos; i++) {
                    let this_element = listCollection[i];
                    let this_elementStr = this_element.innerHTML.toLowerCase();
                    // obviamos acentos
                    this_elementStr = that.obviarAcentos(this_elementStr);
                    // Comparamos y mostramos u ocultamos conforme el resultado
                    if (this_elementStr.match(regexp)) {
                        this_element.style.display = "block";
                        this_element.classList.remove('dNone');
                        // incrementamos
                        hallados++;
                        // // informamos cantidad
                        res = (hallados == 1) ? ' resultado.' : ' resultados.';
                        if (hallados === tantos) { res = ' registros en total!' }
                        thisClass.$id(idLblHallados).value = hallados + res;
                    } else {
                        this_element.classList.add('dNone');
                        // this_element.classList.replace("in", "out");
                        setTimeout(function () {
                            this_element.style.display = "none";
                        }, 700);
                    }
                }
            }
        });
    }
}
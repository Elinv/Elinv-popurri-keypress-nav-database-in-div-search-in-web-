$.expr[':'].icontains = function (obj, index, meta, stack) {
    return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
};

$(document).ready(function () {

    $('#buscador').keyup(function () {

        // mostramos solo donde haya resultado
        buscar = $(this).val();
        // si al menos se ingresaron dos letras
        if (buscar.length >= 2) {

            // ocultamos todos los elementos li
            var listItems = $("#lista li");
            listItems.each(function (idx, li) {
                $('#lista li').addClass('dNone');
            });

            $('#lista li').removeClass('resaltar');
            if (jQuery.trim(buscar) != '') {
                $("#lista li:icontains('" + buscar + "')").addClass('resaltar').removeClass('dNone');
            }
            
        }

        // si al retroceder se borro todo, se muestra todo.
        if (buscar === '') {
            var listItems = $("#lista li");
            listItems.each(function (idx, li) {
                $('#lista li').removeClass('dNone');
            });
        }
    });

    // ocultamos todos los elementos li
    var listItems = $("#lista li");
    listItems.each(function(idx, li) {
        $('#lista li').addClass('dNone'); 
    });

});  

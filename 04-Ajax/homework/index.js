$('#boton').click(function() {
    $.get('http://localhost:5000/amigos', function(datosExtraidos) {
        datosExtraidos.forEach(element => {
            let nuevoLi = document.createElement('li');
            nuevoLi.innerHTML = 'id: '+ element.id + '  '+element.name;
        $('#lista').append(nuevoLi);
        });
    });
});

$('#search').click(function() {
    let rutaAmigo = 'http://localhost:5000/amigos' + '/' + document.getElementById('input').value;
    $.get(rutaAmigo, function(amigoBuscado) {
        $('#amigo').text('amigo ENCONTRADO: '+ amigoBuscado.name);
    });
});

$('#delete').click(function() {
    let rutaAmigo = 'http://localhost:5000/amigos' + '/' + document.getElementById('inputDelete').value;

    $.ajax(
        {
            url: rutaAmigo,
            method: 'DELETE',
            success: function() {
                $('#sucess').text('Tu amigo fue borrado con EXITO!');
            }
        }
    )
});

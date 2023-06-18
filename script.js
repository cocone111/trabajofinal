function validateForm() {
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var inventory = document.getElementById('inventory').value;

    if (name === '' || price === '' || inventory === '') {
        document.getElementById('message').innerHTML = 'Campo requerido.';
        return false;
    } else {
        document.getElementById('message').innerHTML = 'Producto creado.';
        return true;
    }
}
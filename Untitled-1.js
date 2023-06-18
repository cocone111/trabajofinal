<script>
  function validateForm() {
    // Obtener los valores ingresados en los campos del formulario
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var inventory = document.getElementById("inventory").value;

    // Obtener los elementos de los mensajes de validación
    var requiredMsg = document.getElementById("requiredMsg");
    var successMsg = document.getElementById("successMsg");

    // Ocultar los mensajes de validación previos
    requiredMsg.style.display = "none";
    successMsg.style.display = "none";

    // Validar que los campos no estén vacíos
    if (name === "" || price === "" || inventory === "") {
      requiredMsg.style.display = "block";
      successMsg.style.display = "none";
      return false; // Evitar el envío del formulario
    }

    // Validar que el precio y el inventario sean números positivos
    if (parseFloat(price) <= 0 || parseInt(inventory) <= 0) {
      alert("El precio y el inventario deben ser números positivos.");
      return false; // Evitar el envío del formulario
    }

    // Mostrar mensaje de éxito y resetear el formulario
    successMsg.style.display = "block";
    requiredMsg.style.display = "none";
    document.getElementById("productForm").reset();

    return false; // Evitar el envío del formulario
  }
</script>
let btnAceptar = document.getElementById('btnAceptar');
btnAceptar.addEventListener("click", () => {
    let selection = document.getElementById('selectO').value;
    let num1 = document.getElementById('txt_num1').value;
    let num2 = document.getElementById('txt_num2').value;
    let objectOperaciones = new operaciones(selection, num1, num2);
    objectOperaciones.realizarOperacion();
    
})


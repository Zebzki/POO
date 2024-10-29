class operaciones {
    constructor(tipoOperacion, numero1, numero2) {

        this._tipoOperacion = tipoOperacion;
        this._numero1 = parseInt(numero1);
        this._numero2 = parseInt(numero2);
    }
    realizarOperacion() {


        let objData = new FormData();
        objData.append("tipoOperacion", this._tipoOperacion);
        objData.append("numero1", this._numero1);
        objData.append("numero2", this._numero2);
        objData.append("realizarOp", "ok");

        fetch("control/operacionesControl.php", {
            method: 'POST',
            body: objData
        }).then(response => response.json()).catch(error => {
            console.log(error)
        }).then(response => {
            if (response["codigo"] == "200") {
                let respuesta = document.getElementById('contenedorR');
                respuesta.innerHTML = '<h2 class="display-6 text-center"> el resultado de la operacion es: ' + response["resultado"] + '</h2>';

            }
        })

    }

}
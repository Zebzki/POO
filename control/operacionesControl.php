<?php
class operacionControl
{

    public $tipoOperacion;
    public $numero1;
    public $numero2;


    public function ctrRealizarOp()
    {
        $resultado = 0;
        if ($this->tipoOperacion == "suma") {
            $resultado = $this->numero1 + $this->numero2;
        }else if ($this->tipoOperacion == "resta") {
            $resultado = $this->numero1 - $this->numero2;

        }else if ($this->tipoOperacion == "multiplicacion") {
            $resultado = $this->numero1 * $this->numero2;

        }else if ($this->tipoOperacion == "division") {
            $resultado = $this->numero1 / $this->numero2;
        }

        $mensaje = array("codigo" => "200", "resultado" => $resultado);
        echo json_encode($mensaje);
    }


}

if (isset($_POST["realizarOp"]) == "ok") {
    $objOperaciones = new operacionControl();
    $objOperaciones->tipoOperacion = $_POST["tipoOperacion"];
    $objOperaciones->numero1 = $_POST["numero1"];
    $objOperaciones->numero2 = $_POST["numero2"];
    $objOperaciones->ctrRealizarOp();
}
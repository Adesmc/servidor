<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "leyenda";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);



// Consulta todos los registros de las tablas con equipamiento
$sqlEquipamiento = mysqli_query($conexionBD,"SELECT * FROM armas,armaduras,objetos ");
if(mysqli_num_rows($sqlEquipamiento) > 0){
    $Equipamiento = mysqli_fetch_all($sqlEquipamiento,MYSQLI_ASSOC);
    echo json_encode($Equipamiento);
}
else{ echo json_encode([["success"=>0]]); }




?>
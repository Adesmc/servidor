<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "leyenda";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);



// Consulta todos los registros de la tabla empleados
$sqltecnicas = mysqli_query($conexionBD,"SELECT * FROM tecnicas ");
if(mysqli_num_rows($sqltecnicas) > 0){
    $tecnicas = mysqli_fetch_all($sqltecnicas,MYSQLI_ASSOC);
    echo json_encode($tecnicas);
}
else{ echo json_encode([["success"=>0]]); }




?>
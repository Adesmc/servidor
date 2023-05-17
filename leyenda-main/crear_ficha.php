<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "leyenda";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);



$sqlClan = mysqli_query($conexionBD,"SELECT nombre FROM clan ");
if(mysqli_num_rows($sqlClan) > 0){
    $Clan = mysqli_fetch_all($sqlClan,MYSQLI_ASSOC);
    echo json_encode($Clan);
}
else{ echo json_encode([["success"=>0]]); }


?>


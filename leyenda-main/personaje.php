<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "leyenda";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);


// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave

if (isset($_GET["consultar_personaje"])){
    $sqlPersonaje = mysqli_query($conexionBD,"SELECT * FROM personaje WHERE id_personaje=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlPersonaje) > 0){
        $sqlPersonaje = mysqli_fetch_all($sqlPersonaje,MYSQLI_ASSOC);
        echo json_encode($sqlPersonaje);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}

// Consulta datos familia
if (isset($_GET["consultar_familia"])){
    $sqlFamilia = mysqli_query($conexionBD,"SELECT * FROM familia WHERE nombre=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlFamilia) > 0){
        $sqlFamilia = mysqli_fetch_all($sqlFamilia,MYSQLI_ASSOC);
        echo json_encode($sqlFamilia);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}


//Insertar personajes en la tabla
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $id_personaje=$data->id_personaje;
    $Familia=$data->Familia;
    $Clan=$data->Clan;
    $Escuela=$data->Escuela;
    $nombre=$data->nombre;
    $Herencia=$data->Herencia;
    $Destacar=$data->Destacar;
        if(($correo!="")&&($Familia!="")&&($Clan!="")&&($Escuela!="")&&($nombre!="")&&($Herencia!="")&&($Herencia!="")&&($Destacar!="")){
            
    $sqlPersonaje = mysqli_query($conexionBD,"INSERT INTO personaje(id_personaje, Familia, Clan, Escuela, Nombre, Herencia, Destacar) VALUES ('$id_personaje','$Familia','$Clan','$Escuela','$Nombre','$Herencia','$Destacar')"); 
    echo json_encode(["success"=>1]);
        }
    exit();
}

//Editar personajes en la tabla 
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id_personaje=(isset($data->id_personaje))?$data->id_personaje:$_GET["actualizar"];
    $id_personaje=$data->id_personaje;
    $Familia=$data->Familia;
    $Clan=$data->Clan;
    $Escuela=$data->Escuela;
    $nombre=$data->nombre;
    $Herencia=$data->Herencia;
    $Destacar=$data->Destacar;
    
    $sqlPersonaje = mysqli_query($conexionBD,"UPDATE personaje SET id='$id_personaje' Familia='$Familia' Clan='$Clan' Escuela='$Escuela' nombre='$nombre' Herencia='$Herencia' Destacar='$Destacar' WHERE id_personaje='$id'");
    echo json_encode(["success"=>1]);
    exit();
}

//Consulta automaticamente todos los personajes
$sqlPersonaje = mysqli_query($conexionBD,"SELECT * FROM personaje ");
if(mysqli_num_rows($sqlPersonaje) > 0){
    $persoanjes = mysqli_fetch_all($sqlPersonaje,MYSQLI_ASSOC);
    echo json_encode($persoanjes);
}
else{ echo json_encode([["success"=>0]]); }




?>

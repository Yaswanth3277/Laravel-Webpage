<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$name = $_POST['GUname'];
$sqft = $_POST['GUsqft'];
$manager = $_POST['GUmanager'];
$security = $_POST['GUsecurity'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "update garden set garden_name= '$name', sqft = '$sqft', Manager = '$manager', security='$security' where garden_name='$name';";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["gusent" => 1]);
}
else{
    echo json_encode(["gusent" => 0]);
}
mysqli_close($con);
?>
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$s_name = $_POST['SIs_name'];
$sno = $_POST['SIsno'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "insert into services values('$sno', '$s_name');";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["SIsent" => 1]);
}
else{
    echo json_encode(["SIsent" => 0]);
}
mysqli_close($con);
?>
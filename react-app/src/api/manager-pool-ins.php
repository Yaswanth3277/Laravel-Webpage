<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$pool_id = $_POST['PIrpool_id'];
$last_cleaned = $_POST['PIlast_cleaned'];
$next_main = $_POST['PInext_main'];
$sqft = $_POST['PIsqft'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "insert into pool values('$pool_id', '$last_cleaned', '$next_main', '$sqft');";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["PIsent" => 1]);
}
else{
    echo json_encode(["PIsent" => 0]);
}
mysqli_close($con);
?>
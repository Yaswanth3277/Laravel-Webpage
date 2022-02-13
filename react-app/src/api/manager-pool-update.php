<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$pool_id = $_POST['PUrpool_id'];
$last_cleaned = $_POST['PUlast_cleaned'];
$next_main = $_POST['PUnext_main'];
$sqft = $_POST['PUsqft'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "update pool set pool_id= '$pool_id', last_cleaned = '$last_cleaned', next_maintainence = '$next_main', sqft='$sqft' where pool_id='$pool_id'";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["pusent" => 1]);
}
else{
    echo json_encode(["pusent" => 0]);
}
mysqli_close($con);
?>
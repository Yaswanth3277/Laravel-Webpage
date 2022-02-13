<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$s_no = $_POST['SUsno'];
$s_name = $_POST['SUs_name'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "update services set service_id= '$s_no',  service_name='$s_name' where service_id='$s_no'";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["susent" => 1]);
}
else{
    echo json_encode(["susent" => 0]);
}
mysqli_close($con);
?>
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$resname = $_POST['Irname'];
$aptnum = $_POST['Ianum'];
$buinum = $_POST['Ibnum'];
$iemail = $_POST['Iemail'];
$type = $_POST['Itype'];
$phone = $_POST['Iphone'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "insert into apartments(A_no, B_no, Owner, Type, phone, email) values('$aptnum', $buinum, '$resname', '$type', '$phone', '$iemail');";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["Isent" => 1]);
}
else{
    echo json_encode(["Isent" => 0]);
}
mysqli_close($con);
?>
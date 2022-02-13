<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$resname = $_POST['Urname'];
$aptnum = $_POST['Uanum'];
$buinum = $_POST['Ubnum'];
$iemail = $_POST['Uemail'];
$type = $_POST['Utype'];
$phone = $_POST['Uphone'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "update apartments set A_no = '$aptnum', B_no = '$buinum', Owner='$resname', Type='$type', email='$iemail', phone='$phone' where owner='$resname'";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["usent" => 1]);
}
else{
    echo json_encode(["usent" => 0]);
}
mysqli_close($con);
?>
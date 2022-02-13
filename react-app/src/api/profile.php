<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$username = $_POST['username'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "select * from owner where email='$username';";
$result = mysqli_query($con,$query);

while($row=mysqli_fetch_array($result)){
    echo json_encode(["psent" => $row]);
}
mysqli_close($con);
?>
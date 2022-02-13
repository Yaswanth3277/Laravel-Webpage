<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$visname = $_POST['VIrname'];
$aptnum = $_POST['VIanum'];
$tin = $_POST['VItin'];
$tout = $_POST['VItout'];
$inc = $_POST['VIincidents'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "insert into visitors(v_name, v_apt, time_in, time_out, incidents) values('$visname', '$aptnum', '$tin', '$tout', '$inc');";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["VIsent" => 1]);
}
else{
    echo json_encode(["VIsent" => 0]);
}
mysqli_close($con);
?>
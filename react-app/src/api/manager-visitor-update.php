<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$visname = $_POST['VUrname'];
$aptnum = $_POST['VUanum'];
$tin = $_POST['VUtin'];
$tout = $_POST['VUtout'];
$incidents = $_POST['VUincidents'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "update visitors set v_name= '$visname', v_apt = '$aptnum', time_in = '$tin', time_out='$tout', incidents='$incidents' where v_name='$visname'";
$result = mysqli_query($con,$query);

if($result){
    echo json_encode(["vusent" => 1]);
}
else{
    echo json_encode(["vusent" => 0]);
}
mysqli_close($con);
?>
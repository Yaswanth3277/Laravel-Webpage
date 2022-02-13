<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "select * from services";
$result = mysqli_query($con,$query);

if($result){
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $services[$count]['service_id'] = $row['service_id'];
        $services[$count]['service_name'] = $row['service_name'];
        $count++;
    }
    echo json_encode(["ssent" => $services]);
}
mysqli_close($con);
?>
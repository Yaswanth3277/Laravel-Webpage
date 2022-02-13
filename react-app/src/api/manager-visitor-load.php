<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "select * from visitors;";
$result = mysqli_query($con,$query);

if($result){
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $visitors[$count]['v_no'] = $row['v_no'];
        $visitors[$count]['v_name'] = $row['v_name'];
        $visitors[$count]['v_apt'] = $row['v_apt'];
        $visitors[$count]['time_in'] = $row['time_in'];
        $visitors[$count]['time_out'] = $row['time_out'];
        $visitors[$count]['incidents'] = $row['incidents'];
        $count++;
    }
    echo json_encode(["vsent" => $visitors]);
}
mysqli_close($con);
?>
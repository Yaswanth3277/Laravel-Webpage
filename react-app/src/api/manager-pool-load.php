<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "select * from pool;";
$result = mysqli_query($con,$query);

if($result){
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $visitors[$count]['pool_id'] = $row['pool_id'];
        $visitors[$count]['last_cleaned'] = $row['last_cleaned'];
        $visitors[$count]['next_main'] = $row['next_maintainence'];
        $visitors[$count]['sqft'] = $row['sqft'];
        $count++;
    }
    echo json_encode(["psent" => $visitors]);
}
mysqli_close($con);
?>
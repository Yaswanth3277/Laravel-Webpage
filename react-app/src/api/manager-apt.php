<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
session_start();
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "select * from apartments;";
$result = mysqli_query($con,$query);

if($result){
    $count = 0;
    while($row=mysqli_fetch_assoc($result)){
        $apartments[$count]['a_no'] = $row['A_no'];
        $apartments[$count]['owner'] = $row['Owner'];
        $apartments[$count]['type'] = $row['Type'];
        $apartments[$count]['email'] = $row['email'];
        $apartments[$count]['phone'] = $row['phone'];
        $apartments[$count]['b_no'] = $row['B_no'];
        $count++;
    }
    echo json_encode(["msent" => $apartments]);
}
mysqli_close($con);
?>
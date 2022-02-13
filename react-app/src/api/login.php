
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$username = $_POST['lusername'];
$password = sha1($_POST['lpassword']);
session_start();

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "select * from login where username='$username' and password = '$password';";
$result = mysqli_query($con,$query);
while($row=mysqli_fetch_array($result)){
    if($row['type'] == "Owner"){
        $_SESSION['username'] = $username;
        echo json_encode(["lsent" => 1, ]);
    }
    else if($row['type'] == 'Manager'){
        $_SESSION['username'] = $username;
        echo json_encode(["lsent" => 2, ]);
    }
    else if($row['type'] == 'Visitor'){
        $_SESSION['username'] = $username;
        echo json_encode(["lsent" => 3, ]);
    }
    else if($row['type'] == 'Admin'){
        $_SESSION['username'] = $username;
        echo json_encode(["lsent" => 4, ]);
    }
    else{
        echo json_encode(["lsent" => 0, ]);   
    }
}
mysqli_close($con);
?>
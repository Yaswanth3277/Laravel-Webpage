<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$fname = $_POST['sfname'];
$lname = $_POST['slname'];
$phone = $_POST['sphone'];
$email = $_POST['semail'];
$pass = $_POST['spassword'];
$password = sha1($pass);
$type = $_POST['ssignup_option'];

$con = mysqli_connect("localhost:3308", "root", "", "lunamar");
$query = "insert into owner(Fname, Lname, email, phone, password) values('$fname', '$lname', '$email', '$phone', '$password');";
$query .= "insert into login(username, password, type) values('$email', '$password', '$type');";
$insertion = mysqli_multi_query($con,$query)or die(mysqli_error($con));
if($insertion == True){
    $to = $email;
    $subject = "Registration Successful";

    $message = "Use the below credentials to login";
    $message .= "Username:". $email;
    $message .= "Password : " . $pass ."\n";

    $headers = "From:lunamarhousing@gmail.com \r\n";
    $headers .= "Content-type: text/html\r\n";

    ini_set('SMTP', "smtp.gmail.com");
    ini_set('smtp_port', "587");
    ini_set('sendmail_from', "lunamarhousing@gmail.com");

    $mail = mail($to, $subject, $message, $headers);
    if($mail == True){
        echo json_encode(["ssent" => 1, ]);
    }

}
else{
    echo json_encode(["ssent" => 0, ]);
}
mysqli_close($con);

?>
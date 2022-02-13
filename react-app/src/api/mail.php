<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$email = $_POST['memail'];
$query = $_POST['mquery'];

$to = $email;
$subject = "Query Received";

$message = "Thank you for contacting Lunamar\n";
$message .= "We will get back to you as soon as possible\n";
$message .= "Query : " . $query ."\n";

$headers = "From:lunamarhousing@gmail.com \r\n";
$headers .= "Content-type: text/html\r\n";

ini_set('SMTP', "smtp.gmail.com");
ini_set('smtp_port', "587");
ini_set('sendmail_from', "lunamarhousing@gmail.com");

$mail = mail($to, $subject, $message, $headers);
if($mail == True){
    echo json_encode(["sent" => 1, ]);
}
else{
    echo json_encode(["sent" => 0, ]);
}
?>
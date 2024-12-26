<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){

$name =  filter_var ($_POST['name'], FILTER_SANITIZE_STRING);
$email = filter_var ($_POST['email'], FILTER_SANITIZE_EMAIL);
$phone = filter_var ($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
$message = filter_var ($_POST['Message'], FILTER_SANITIZE_STRING);

	$data = " Name :   $name \r\n Phone Number :   $phone  \r\n Message :   $message";

$headers = 'From: '. $email .'\n';
$myEMail = 'abdozax2004@gmail.com';
$subject = 'Contact Form';
mail( $myEMail,$subject , $data , $headers );

$success = '<div class="alert alert-success">We have recieve your message</div>';

}

?>
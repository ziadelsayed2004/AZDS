<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
    $message = filter_var($_POST['Message'], FILTER_SANITIZE_STRING);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = '<div class="alert alert-danger">Invalid email address.</div>';
    } elseif (empty($name) || empty($phone) || empty($message)) {
        $error = '<div class="alert alert-danger">Please fill all fields.</div>';
    } else {
        $data = "Name: $name \r\nPhone Number: $phone \r\nMessage: $message";
        
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        $myEmail = 'abdozax2004@gmail.com';
        $subject = 'Contact Form';

        if (mail($myEmail, $subject, $data, $headers)) {
            $success = '<div class="alert alert-success">We have received your message.</div>';
        } else {
            $error = '<div class="alert alert-danger">There was an error sending your message. Please try again later.</div>';
        }
    }
    
    header("Location: contact.html?status=" . urlencode($success ?? $error));
    exit;
}
?>

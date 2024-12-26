<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = filter_var($_POST['username'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
    $message = filter_var($_POST['Message'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $error = '';
    $success = '';

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Invalid email address.';
    } elseif (empty($name) || empty($phone) || empty($message)) {
        $error = 'Please fill all fields.';
    } else {
        $data = "Name: $name \r\nPhone Number: $phone \r\nMessage: $message";
        
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        $myEmail = 'ziadelsayed2004@gmail.com';
        $subject = 'Contact Form';

        if (mail($myEmail, $subject, $data, $headers)) {
            $success = 'We have received your message.';
        } else {
            $error = 'There was an error sending your message. Please try again later.';
        }
    }

    header("Location: contact.html?status=" . urlencode($success ?: $error));
    exit;
}
?> 
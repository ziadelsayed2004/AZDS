<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $name = trim($_POST['username']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $message = trim($_POST['Message']);

    $error = '';
    $success = '';

    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        $error = 'Please fill all fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Invalid email address.';
    } elseif (!preg_match('/^\d{10,15}$/', $phone)) {
        $error = 'Phone number must be 10–15 digits.';
    } elseif (strlen($message) < 10) {
        $error = 'Message must be at least 10 characters.';
    } else {
        $data = "Name: $name \r\nPhone Number: $phone \r\nMessage: $message";
        
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        
        $myEmail = 'contact@az-digital-services.com';
        $subject = 'Contact Form';

        if (mail($myEmail, $subject, $data, $headers)) {
            $success = 'We have received your message.';
        } else {
            $error = 'There was an error sending your message. Please try again later.';
            error_log("Mail error: Unable to send email to $myEmail from $email");
        }
    }

    $response = $success ?: $error;
    echo "<script>
        alert('$response');
        window.location.href = 'contact.html';
    </script>";
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $secretKey = "YOUR_SECRET_KEY";
    $response = $_POST["g-recaptcha-response"];
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secretKey}&response={$response}");
    $captchaSuccess = json_decode($verify);
    
    if ($captchaSuccess->success) {
        echo "تم التحقق بنجاح!";
    } else {
        echo "فشل التحقق!";
    }
}

?>

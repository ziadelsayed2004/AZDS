<?php 
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = filter_var($_POST['username'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $phone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
    $msg = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $formErrors = array();

    if (strlen($user) < 3) {
        $formErrors[] = 'Username must be larger than <strong>3</strong> characters.';
    }

    if (strlen($msg) < 10) {
        $formErrors[] = 'Message can\'t be less than <strong>10</strong> characters.';
    }

    $data = "Name: $user\r\nPhone Number: $phone\r\nMessage: $msg";
    $headers = "From: $email\r\n";
    $myEmail = 'abdozax2004@gmail.com';
    $subject = 'Contact Form';

    if (empty($formErrors)) {
        if (mail($myEmail, $subject, $data, $headers)) {
            $user = $email = $phone = $msg = '';
            $success = '<div class="alert alert-success">We have received your message.</div>';
        } else {
            $formErrors[] = 'Failed to send your message. Please try again later.';
        }
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AZ Digital Services</title>
    <link rel="icon" href="src/imgs/logo blk bg.png">
    <link rel="stylesheet" href="src/css/main.css">
    <link rel="stylesheet" href="src/css/contact-form.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' rel='stylesheet' />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>

    <div id="preloader">
        <div id="logo-container">
           <img id="logo" src="src/imgs/logo.png" alt="Logo" />
           <p id="tagline">Digital Services</p>
        </div>
     </div>
     
     <div id="progress-wrap" class="progress-wrap">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
      
    <div class="float-navbar" style="padding-bottom: 7.5px;">
    <nav class="bg-spotted">
    <div class="logo">
        <a style="display: inline-flex; height: 100%" href="#index">
            <img src="src/imgs/logo.png" width="65px" height="65px" alt="">
        </a>
    </div> 
    <div class="logo-text">digital services</div>
    <div class="btn">
        <div class="btn__indicator">
          <div class="btn__icon-container">
            <i class="btn__icon fa-solid"></i>
          </div>
        </div>
    </div> 
    <div class="nav-items">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li style="display: none;"><a href="contact.php">Contact Us</a></li>
    </ul>
    </div>
        <div id="myNav" class="toggel-menu overlay">
            <div class="overlay-content">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="services.html">Services</a>
                <a style="display: none;" href="contact.php">Contact Us</a>
            </div>
        </div>
        <div id="toggle-button" class="menu-icon" onclick="toggleNav()">
            <span></span>
            <span></span>
        </div>
    </nav>

    <div class="content-container-upper"></div>
    </div>

    <div class="content-container-frame" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
       
        <h2 style="text-align:center;">Contact Us</h2>
       
        <form class="contact-form">
        
            <?php

                if(! empty($formErrors)){  ?>
        <div class="alert alert-danger alert-dismissible" role="start">
                <button type="button" class="close" data-dismiss="alert" aria-Label="Close">
                    <span aria-hidden="true">$times</span>
                </button>

                <?php 
                foreach($formErrors as $error){
                    echo $error . '<br/>';
                }
                ?>
    </div>    
    <?php } ?>

            <?php if (isset($success)) { echo $success;} ?>
        
        <div class="form-group">
        <input 
          class="username form-control" 
          type="text"  
          name="username" 
          placeholder="Type Your Username"
          value= "<?php if (isset($user)) {echo $user;}  ?>" />
          <i class="fa-solid fa-user fa-fw"></i>
          <span class="astrisx">*</span>
          <div class="alert alert-danger costom-alert">
          Username Must be Larger Tham <strong>3</strong> Characters 
          </div>
            
        </div>


            <div class="form-group">
          <input class="email form-control" 
          type="email" 
           name="email"
            placeholder="Please Type a Valid Email"
            value= "<?php if (isset($email)) {echo $email;}  ?>"             />
        
            <i class="fa-solid fa-envelope fa-fw" ></i>
        
          <span class="astrisx">*</span>    
        
        <div class="alert alert-danger costom-alert">
          Email can't be <strong>Empty</strong>
          </div>
    
        </div>


            <input class="form-control"
             type="text" 
             name="phone" 
             placeholder="Type Your Phone Number" 
             value= "<?php if (isset($phone)) {echo $phone;}  ?>" />

             <i class="fa-solid fa-phone fa-fw"></i>
             

             <textarea class="message form-control" name="message" placeholder="Your Message!"><?php if (isset($msg)) {echo htmlspecialchars($msg);} ?></textarea>

          
      
          <input class="submit-btn btn-block"
           type="submit" 
           value="Send Message"/>
           <i class="fa-solid fa-paper-plane fa-fw send-icon"></i> 
          
    </div>

    <footer class="footer bg-spotted">
        <div class="footer">
            <div class="footer-head">
                    <div class="footer-brand">
                        <a href="index.html"><img src="src/imgs/logo.png" width="110px" height="110px" alt=""></a>
                        <div class="footer-lable">Digital Services</div> 
                    </div>
                    <div class="footer-social">
                        <div class="ul-social">
                            <a target="_blank" href="#" class="social-icon"><svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
                            <a target="_blank" href="#" class="social-icon"><svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/></svg></a>
                            <a target="_blank" href="#" class="social-icon"><svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg></a>
                            <a target="_blank" href="#" class="social-icon"><svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg></a>
                            <a target="_blank" href="#" class="social-icon"><svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg></a>
                        </div>
                    </div>
            </div> 

            <div class="footer-copyright">&copy; 2025 AZ Digital Services Company .Inc</div>
        </div>
    </footer>

    <div class="js-script">
    <script src="src/js/custom.js"></script>
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
        <script src="src/js/main.js"></script>
    </div>

</body>
</html>
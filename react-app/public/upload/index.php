<!DOCTYPE html>
<html>
    <head>
        <link rel="icon" href="./Images/Logo.ico">
        <title>Lunamar | Housing</title>
        <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <script src="./js/main.js"></script>
    </head>
    <body>
        <?php
            if (isset($_POST['register'])){
                $email = $_REQUEST['email'];
                $username = $_REQUEST['firstname'] . $_REQUEST['lastname'];
                $password = $_REQUEST['password'];

                $to = $email;
                $subject = "Login Details";

                $message = "Registration Successfully Completed\n";
                $message .= "Please use the below details to login\n";
                $message .= "Username = " . $username ."\n";
                $message .= "Password =" . $password . "\n";

                $headers = "From:lunamarhousing@gmail.com \r\n";
                $headers .= "Content-type: text/html\r\n";

                ini_set('SMTP', "smtp.gmail.com");
                ini_set('smtp_port', "587");
                ini_set('sendmail_from', "lunamarhousing@gmail.com");

                $mail = mail($to, $subject, $message, $headers);

            }
        ?>
        <div>
            <header>
                <nav id="logo">
                    <img src="./Images/Logo.png">
                </nav>
                <nav id="nav1">
                    <ul>
                        <li><a href="#firstdiv">Home</a></li>
                        <li><a href="#secondback">About Us</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <div id="firstdiv">
                <h2>Your Safe Space</h2>
                <h1>Lunamar Housing</h1>
                <img id="firstback" src="./Images/background dark.jpg">
                <a href="#" id="login" onclick="loginform()">Login</a>
                <a href="#" id="signup" onclick="signupform()">Signup</a>
                <img id="mix" src="./Images/mix.png">
            </div>
            <div id="aboutdiv">
                <img id="secondback" src="./Images/table.png">
                <p>
                    About us goes here
                </p>
            </div>
            <div id="login-form">
                <form action="#">
                    <a style="float:right;"href="#" class="fa fa-times" onclick="loginhide()"></a>
                    <h1>Login</h1><br>
                    <label for="email"><b>Username</b></label><br><br>
                    <input type="text" name="email" required><br><br><br>

                    <label for="password"><b>Password</b></label><br><br>
                    <input type="password" name="password" required><br><br><br>
                    
                    <button type="submit" class="subbtn">Login</button>
                    <a id="forgotp" href="#">Forgot Password?</a>
                </form>
            </div>
            <div id="signupform">
                <form action="#" method="POST">
                    <a style="float:right;"href="#" class="fa fa-times" onclick="loginhide()"></a>
                    <h1>Sign Up</h1><br>
                    <label for="firstname">FirstName</label><br>
                    <input type="text" name="firstname"><br><br><br>
                    <label for="lastname">LastName</label><br>
                    <input type="text" name="lastname"><br><br><br>
                    <label for="address">Address</label><br>
                    <input type="text" name="address"><br><br><br>
                    <label for="phone">Phone</label><br>
                    <input type="text" name="phone"><br><br><br>
                    <label for="email">Email</label><br>
                    <input type="email" name="email"><br><br><br>
                    <label for="password">Password</label><br>
                    <input type="text" name="password"><br><br><br>
                    <label for="cpassword">Confirm Password</label><br>
                    <input type="text" name="cpassword"><br><br><br> 
                    <button name="register" type="submit" class="ssubbtn">Register</button>
                    <?php
                        if($mail == true){
                            echo "<p>Login details sent successfully</p>";
                        }
                        else{
                            echo "<p>Mail Error</p>";
                        }
                    ?>
                </form>
            </div>
            <footer id="footer">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Firstname">
                    <input type="text" placeholder="Lastname"><br><br><br>
                    <input type="text" placeholder="Contact">
                    <input type="text" placeholder="Email"><br><br><br>
                    <textarea placeholder="Query" rows="4" cols="50"></textarea><br><br><br>
                    <button type="submit" class="contactbtn">Submit</button>
                </form><br><br><br>
                <img src="./Images/Logo.png">
                <h3>Place where your dream home awaits you</h3>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-instagram"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-linkedin"></a><br>
                <a style="text-decoration:none; color:blue"href="#">Admin Login</a>
            </footer>
        </div>
    </body>
</html>
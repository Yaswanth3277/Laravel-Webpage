//Team Members: 
//Janardhan Konduru, Yaswanth - 1001741845
//Ravuri, Chaitanya - 1001837252
//Shashidhar, Neelesh - 1001860682



(function() {
    emailjs.init("user_610v75IecCA4rSh7kXqG4");
    })();

function sendMail(){
    var tempParams ={
        to_name:document.getElementById("contactfirstname").value,
        to_email:document.getElementById("contactemail").value,
        message:document.getElementById("contactquery").value,
    };

    emailjs.send('service_4ibsurg','template_72vqjot',tempParams)
    .then(function(res){
        document.getElementById("success").innerHTML = "Mail sent successfully";
    })

}

function sendemail(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var username = firstname.concat(lastname);
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var cpassword = document.getElementById("cpassword").value;

    if ((firstname == null||firstname == "") || (lastname == null || lastname == "") || (password == null || password == "") || (cpassword == null || cpassword == "") || (email == null || email == "")){
        window.alert("Please fill all the * fields");
    }
    else{
        var tempParams ={
            to_name:document.getElementById("firstname").value,
            to_email:document.getElementById("email").value,
            message:"Username:"+username+"\nPassword:"+password,
        };

        emailjs.send('service_4ibsurg','template_tnmdo5j',tempParams)
        .then(function(res){
            document.getElementById("ssuccess").innerHTML = "Mail sent successfully";
        })
    }

}

function firstnamecheck(){
    firstname = document.getElementById("firstname").value;
    if(firstname == null || firstname == ""){
        document.getElementById("firstname-status").innerHTML = "*";
        document.getElementById("firstname-status").style.color="red";
    }
    else{
        document.getElementById("firstname-status").innerHTML = "*";
        document.getElementById("firstname-status").style.color="white";
    }
}

function lastnamecheck(){
    lastname = document.getElementById("lastname").value;
    if(lastname == null || lastname == ""){
        document.getElementById("lastname-status").innerHTML = "*";
        document.getElementById("lastname-status").style.color="red";
    }
    else{
        document.getElementById("lastname-status").innerHTML = "*";
        document.getElementById("lastname-status").style.color="white";
    }
}

function emailcheck(){
    eemail = document.getElementById("email").value;
    if(eemail == null || eemail == ""){
        document.getElementById("email-status").innerHTML = "*";
        document.getElementById("email-status").style.color="red";
    }
    else{
        document.getElementById("email-status").innerHTML = "*";
        document.getElementById("email-status").style.color="white";
    }
}

function passcheck(){
    pass = document.getElementById("password").value;
    for (var i=0; i<pass.length; i++){
        if((pass.charAt(i)=="1"||pass.charAt(i)=="2"||pass.charAt(i)=="3"||pass.charAt(i)=="4"||pass.charAt(i)=="5"||pass.charAt(i)=="6"||pass.charAt(i)=="7"||pass.charAt(i)=="8"||pass.charAt(i)=="9")&&pass.length>= "6") {

            document.getElementById("password-status").innerHTML = "Password Strong";
        }
        else if(pass.length >=6) {

            document.getElementById("password-status").innerHTML = "Strength Medium";
        }
        else if(pass.length < 6){
            document.getElementById("password-status").innerHTML = "Password Weak and short";
        }
        else{

            document.getElementById("password-status").innerHTML = "*";
        }
    }
}

function cpasscheck(){
    pass = document.getElementById("password").value;
    cpass = document.getElementById("cpassword").value;
    if(cpass==pass) {

        document.getElementById("cpassword-status").innerHTML = "Passwords Match";
        return true;
    }
    else {

        document.getElementById("cpassword-status").innerHTML = "Passwords Don't Match";
        return false;
    }
}

function loginform(){
    document.getElementById("login-form").style.display="block";
}

function adminloginform(){
    document.getElementById("admin-login-form").style.display="block";
}

function visitorform(){
    document.getElementById("visitor-form").style.display="block";
}

function loginhide(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("signupform").style.display="none";
    document.getElementById("admin-login-form").style.display="none";
    document.getElementById("visitor-form").style.display="none";
    document.getElementById("forgot-pass-form").style.display="none";
}

function signupform(){
    document.getElementById("signupform").style.display="block";
}

function forgotpassform(){
    document.getElementById("login-form").style.display="none";
    document.getElementById("forgot-pass-form").style.display="block";
}

function sendmail(){
    var user = document.getElementById("firstname").innerHTML.concat(document.getElementById("lastname").innerHTML);
    var pass = document.getElementById("password").innerHTML;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "lunamarhousing@gmail.com",
        Password: "Lunamar@123",
        To: document.getElementById("email").innerHTML,
        From: "lunamarhousing@gmail.com",
        Subject: "Login Credentials",
        Body: "Registration Successfully Completed\n Please use the below details to login\n Username=$user\n Password=$pass",

    })
    .then(function(message){
        window.alert("mail sent successfully")
    });
}

function residentform(){
    document.getElementById("residents").style.display="block";
    document.getElementById("buildings").style.display="none";
    document.getElementById("visitors").style.display="none";
    document.getElementById("pool").style.display="none";
    document.getElementById("garden").style.display="none";
    document.getElementById("aservices").style.display="none";
}

function buildingsform(){
    document.getElementById("residents").style.display="none";
    document.getElementById("buildings").style.display="block";
    document.getElementById("visitors").style.display="none";
    document.getElementById("pool").style.display="none";
    document.getElementById("garden").style.display="none";
    document.getElementById("aservices").style.display="none";
}

function visitorsform(){
    document.getElementById("residents").style.display="none";
    document.getElementById("buildings").style.display="none";
    document.getElementById("visitors").style.display="block";
    document.getElementById("pool").style.display="none";
    document.getElementById("garden").style.display="none";
    document.getElementById("aservices").style.display="none";
}

function gardenform(){
    document.getElementById("residents").style.display="none";
    document.getElementById("buildings").style.display="none";
    document.getElementById("visitors").style.display="none";
    document.getElementById("pool").style.display="none";
    document.getElementById("garden").style.display="block";
    document.getElementById("aservices").style.display="none";
}

function aservicesform(){
    document.getElementById("residents").style.display="none";
    document.getElementById("buildings").style.display="none";
    document.getElementById("visitors").style.display="none";
    document.getElementById("pool").style.display="none";
    document.getElementById("garden").style.display="none";
    document.getElementById("aservices").style.display="block";
}

function poolform(){
    document.getElementById("residents").style.display="none";
    document.getElementById("buildings").style.display="none";
    document.getElementById("visitors").style.display="none";
    document.getElementById("pool").style.display="block";
    document.getElementById("garden").style.display="none";
    document.getElementById("aservices").style.display="none";
}

function residentprofile(){
    document.getElementById("myprofile").style.display="block";
    document.getElementById("services").style.display="none";
    document.getElementById("rvisitors").style.display="none";
    document.getElementById("upload").style.display="none";
    document.getElementById("chat").style.display="none";
}

function servicesform(){
    document.getElementById("myprofile").style.display="none";
    document.getElementById("services").style.display="block";
    document.getElementById("rvisitors").style.display="none";
    document.getElementById("upload").style.display="none";
    document.getElementById("chat").style.display="none";
}

function residentvisitorsform(){
    document.getElementById("myprofile").style.display="none";
    document.getElementById("services").style.display="none";
    document.getElementById("rvisitors").style.display="block";
    document.getElementById("upload").style.display="none";
    document.getElementById("chat").style.display="none";
}

function chatform(){
    document.getElementById("myprofile").style.display="none";
    document.getElementById("services").style.display="none";
    document.getElementById("rvisitors").style.display="none";
    document.getElementById("upload").style.display="none";
    document.getElementById("chat").style.display="block";
}

function uploadform(){
    document.getElementById("myprofile").style.display="none";
    document.getElementById("services").style.display="none";
    document.getElementById("rvisitors").style.display="none";
    document.getElementById("upload").style.display="block";
    document.getElementById("chat").style.display="none";
}

function managerchat(){
    document.getElementById("manager").style.display="block";
    document.getElementById("adminchat").style.display="none";
    document.getElementById("visitorchat").style.display="none";
}

function adminchat(){
    document.getElementById("manager").style.display="none";
    document.getElementById("adminchat").style.display="block";
    document.getElementById("visitorchat").style.display="none";
}

function visitorchat(){
    document.getElementById("manager").style.display="none";
    document.getElementById("adminchat").style.display="none";
    document.getElementById("visitorchat").style.display="block";
}

function manapartmentform(){
    document.getElementById("apartment-page").style.display="block";
    document.getElementById("visitor-page").style.display="none";
    document.getElementById("chat").style.display="none";
    document.getElementById("man-pool").style.display="none";
    document.getElementById("man-garden").style.display="none";
    document.getElementById("man-aservices").style.display="none";
}

function manvisitorform(){
    document.getElementById("apartment-page").style.display="none";
    document.getElementById("visitor-page").style.display="block";
    document.getElementById("chat").style.display="none";
    document.getElementById("man-pool").style.display="none";
    document.getElementById("man-garden").style.display="none";
    document.getElementById("man-aservices").style.display="none";
}

function manchatform(){
    document.getElementById("apartment-page").style.display="none";
    document.getElementById("visitor-page").style.display="none";
    document.getElementById("chat").style.display="block";
    document.getElementById("man-pool").style.display="none";
    document.getElementById("man-garden").style.display="none";
    document.getElementById("man-aservices").style.display="none";
}

function manpoolform(){
    document.getElementById("apartment-page").style.display="none";
    document.getElementById("visitor-page").style.display="none";
    document.getElementById("chat").style.display="none";
    document.getElementById("man-pool").style.display="block";
    document.getElementById("man-garden").style.display="none";
    document.getElementById("man-aservices").style.display="none";
}

function mangardenform(){
    document.getElementById("apartment-page").style.display="none";
    document.getElementById("visitor-page").style.display="none";
    document.getElementById("chat").style.display="none";
    document.getElementById("man-pool").style.display="none";
    document.getElementById("man-garden").style.display="block";
    document.getElementById("man-aservices").style.display="none";
}

function manaservicesform(){
    document.getElementById("apartment-page").style.display="none";
    document.getElementById("visitor-page").style.display="none";
    document.getElementById("chat").style.display="none";
    document.getElementById("man-pool").style.display="none";
    document.getElementById("man-garden").style.display="none";
    document.getElementById("man-aservices").style.display="block";
}

function visitapartmentform(){
    document.getElementById("visitapartment").style.display="block";
    document.getElementById("visitgarden").style.display="none";
    document.getElementById("visitchat").style.display="none";
}

function visitgardenform(){
    document.getElementById("visitapartment").style.display="none";
    document.getElementById("visitgarden").style.display="block";
    document.getElementById("visitchat").style.display="none";
}

function visitchatform(){
    document.getElementById("visitapartment").style.display="none";
    document.getElementById("visitgarden").style.display="none";
    document.getElementById("visitchat").style.display="block";
}

function resident1(){
    document.getElementById("resident1").style.display="block";
    document.getElementById("resident2").style.display="none";
}

function resident2(){
    document.getElementById("resident1").style.display="none";
    document.getElementById("resident2").style.display="block";
}

function visitmanager(){
    document.getElementById("visitmanager").style.display="block";
    document.getElementById("apartment-owner-1").style.display="none";
}

function apartmentowner1(){
    document.getElementById("visitmanager").style.display="none";
    document.getElementById("apartment-owner-1").style.display="block";
}

function waterchangecolor(){
    var iconcolor = document.getElementById("watercolor").style.color;
    if (iconcolor == "red"){
        document.getElementById("watercolor").style.color="green";
    }
    else{
        document.getElementById("watercolor").style.color="red";
    }
}

function elechangecolor(){
    var iconcolor = document.getElementById("electricitycolor").style.color;
    if (iconcolor == "red"){
        document.getElementById("electricitycolor").style.color="green";
    }
    else{
        document.getElementById("electricitycolor").style.color="red";
    }
}

function wifichangecolor(){
    var iconcolor = document.getElementById("wificolor").style.color;
    if (iconcolor == "red"){
        document.getElementById("wificolor").style.color="green";
    }
    else{
        document.getElementById("wificolor").style.color="red";
    }
}

function trashchangecolor(){
    var iconcolor = document.getElementById("trashcolor").style.color;
    if (iconcolor == "red"){
        document.getElementById("trashcolor").style.color="green";
    }
    else{
        document.getElementById("trashcolor").style.color="red";
    }
}

function landingpage(){
    var selectedoption = document.getElementById("login-option");
    var valueselected = selectedoption.options[selectedoption.selectedIndex].value;
    if(valueselected == "Resident"){
        window.open("/resident", "_self");
    }
    else if(valueselected == "Manager"){
        window.open("/manager", "_self");
    }
    else if(valueselected == "Visitor"){
        window.open("/visitor", "_self");
    }
    else{
        window.open("/residentpage", "_self");
    }
}
import react, {Component} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useHistory, useParams} from "react-router-dom";

const Login=()=>{
    
    const [msg, setMsg] = useState('');
    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let history = useHistory();
    let arraydata = new Array();

    const {email, password} = user;
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const login=()=>{
        const users = {username};

        if(user.email === ''){
            alert('Email field is empty');
        }
        else if(user.password === ''){
            alert('Password Field is empty');
        }

        axios.post("http://127.0.0.1:8000/api/login", user)
        .then(response => {
            arraydata = response.data.split(',');
            setMsg(arraydata[0]);
            localStorage.setItem("email", arraydata[0]);
            localStorage.setItem("fname", arraydata[1]);
            localStorage.setItem("lname", arraydata[2]);
            localStorage.setItem("dob", arraydata[3]);
            localStorage.setItem("phone", arraydata[4]);
            localStorage.setItem("username", arraydata[5]);
            let type = arraydata[6];
            if(type == "Resident"){
                sessionStorage.setItem('log','true');
                history.push("/resident");
            }
            else if(type == "Manager"){
                sessionStorage.setItem('log','true');
                history.push("/manager");
            }
            else if(type == "Visitor"){
                sessionStorage.setItem('log','true');
                history.push("/visitor");
            }
            else if(type == "Admin"){
                sessionStorage.setItem('log','true');
                history.push("/admin");
            }
            else{
                history.push("/")
            }
        });
    }
        return(
            <div className="row">
                <div className="medium-12 columns">
                    <div id="login-form">
                        <form>
                            <a style={{float:"right"}} href="/" className="fa fa-times"></a>
                            <h1>Login</h1><br/>
                            <label htmlFor="email"><b>Username</b></label><br/><br/>
                            <label id="luser-status" style={{color:"red", marginLeft:"10px"}}>*</label><br/>
                            <input type="text" name="email" onKeyUp={window['emailValidation']} value={email} onChange={e => onInputChange(e)} required/><br/><br/><br/>

                            <label htmlFor="password"><b>Password</b></label><br/><br/>
                            <input type="password" name="password" value={password} onChange={e => onInputChange(e)} required/><br/><br/><br/>
                            
                            <button type="button" className="subbtn" onClick={login}>Login</button>
                            <a id="forgotp" href="#"  onClick={window['forgotpassform']}>Forgot Password?</a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
export default Login;
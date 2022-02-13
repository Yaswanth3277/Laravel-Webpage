import react, {Component} from 'react';
import {useState} from 'react';
import axios from 'axios';


const Signup=()=>{
    const[errors, setErrors] = useState('');
        const[user, setUser] = useState({
            fname:'',
            lname:'',
            email:'',
            phone:'',
            password:'',
            signupoption:''
        });
        const {fname, lname, email, phone, password, signupoption} = user;
        const onInputChange = e => {
            setUser({...user, [e.target.name]: e.target.value});
        };

        async function signup(){
            let result = await axios.post("http://127.0.0.1:8000/api/register", user);
            setErrors('Registration Successful');
            window.sendemail();
            setUser({fname:'', lname:'', email:'', phone:'', password:'', signupoption:''});
        }
    return(
        <div className="row">
            <div className="medium-12 columns">
                <div id="signupform">
                    <form action="#" method="post">
                        <a style={{float:"right"}} href="/" className="fa fa-times"></a>
                        <h1>Sign Up</h1><br/>
                        <div style={{textAlign:"left", float:"left"}}>
                            <label htmlFor="firstname">FirstName</label>
                            <label id="firstname-status" style={{color:"red"}}>*</label><br/>
                            <input type="text" id="firstname" name="fname" value={fname} onChange={e => onInputChange(e)} onKeyUp={window['firstnamecheck']} required/>
                            <br/><br/><br/>
                            <label htmlFor="lastname">LastName</label>
                            <label id="lastname-status" style={{color:"red"}}>*</label><br/>
                            <input type="text" id="lastname" name="lname" value={lname} onChange={e => onInputChange(e)} onKeyUp={window['lastnamecheck']} required/>
                            <br/><br/><br/>
                            <label htmlFor="address">Address</label><br/>
                            <input type="text" name="address"/><br/><br/><br/>
                            <label htmlFor="phone">Phone</label><br/>
                            <input type="text" name="phone" value={phone} onChange={e => onInputChange(e)}/><br/><br/><br/>
                        </div>
                        <div style={{textAlign:"left", marginLeft:"400px"}}>
                            <label>Sign up As:</label>
                            <label id="option-status" style={{color:"red"}}>*</label><br/>
                            <select id="signup-option" name="signupoption" value={signupoption} onChange={e => onInputChange(e)} onClick={window['emailcheck']}>
                                <option value="">--Please choose an option--</option>
                                <option value="Resident">Resident</option>
                                <option value="Manager">Manager</option>
                                <option value="Visitor">Visitor</option>
                                <option value="Admin">Admin</option>
                            </select><br/><br/><br/>
                            <label htmlFor="email">Email</label>
                            <label id="email-status" style={{color:"red"}}>*</label><br/>
                            <input id="email" type="email" name="email" onKeyUp={window['emailcheck']} value={email} onChange={e => onInputChange(e)} onKeyUp={window['emailcheck']} required/>
                            <br/><br/><br/>
                            <label htmlFor="password">Password</label>
                            <label id="password-status" style={{color:"red", marginLeft:"10px"}}>*</label><br/>
                            <input type="password" id="password" name="password" value={password} onChange={e => onInputChange(e)} onKeyUp={window['passcheck']} required/>
                            <br/><br/><br/>
                            <label htmlFor="cpassword">Confirm Password</label>
                            <label id="cpassword-status" style={{color:"red", marginLeft:"10px"}}>*</label><br/>
                            <input type="password" id="cpassword" name="cpassword" onKeyUp={window['cpasscheck']} required/>
                            <br/><br/><br/>
                        </div>
                        <button name="register" id="signupregister" type="button" className="ssubbtn" onClick={signup}>Register</button><br/>
                        <label id="ssuccess"></label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
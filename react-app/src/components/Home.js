import React, {Component} from 'react';
import {useState} from 'react';
import axios from 'axios';

const Home=()=> {
	    return (
		<div className="row ">
	        <div className="medium-12 columns">
                <div>
                        <header>
                            <nav id="logo">
                                <img src="./Images/Logo.png"/>
                            </nav>
                            <nav id="nav1">
                                <ul>
                                    <li><a href="#firstdiv">Home</a></li>
                                    <li><a href="#secondback">About Us</a></li>
                                    <li><a href="https://nxs0682.uta.cloud/">Blog</a></li>
                                    <li><a href="/homevisit">Visitors</a></li>
                                    <li><a href="#footer">Contact</a></li>
                                </ul>
                            </nav>
                        </header>

                        <div id="firstdiv">
                            <h2>Your Safe Space</h2>
                            <h1>Lunamar Housing</h1>
                            <img id="firstback" src="./Images/background dark.jpg"/>
                            <a href="/login" id="login">Login</a>
                            <a href="/register" id="signup">Signup</a>
                            <img id="mix" src="./Images/mix.png"/>
                        </div>
                        <div id="aboutdiv">
                            <img id="secondback" src="./Images/table.png"/>
                            <ul>
                                <li>Lunamar management is the leading online website which offers services to all residents.</li>
                                <li>It is one stop step to all residents to avail their servies and manage them.</li>
                                <li>Our focus is to manage buildings, services , gardens and surroundings.</li>
                                <li>Our community includes more than 100 acres of green space, parks and premier amenities.</li>
                                <li>Resident can also talk to management or admin to resolve there issues.</li>
                                <li>The Visitors can fill up the form and enter the property without any extra efforts.</li>
                                <li>Please feel free contact us and we will get back to you in no time.</li>
                            </ul>
                        </div>                      

                        <footer id="footer">
                            <h2>Contact Us</h2>
                            <form>
                                <label id="cfname-status" style={{color:"red"}}>*</label>
                                <input type="text" id="contactfirstname" placeholder="Firstname"/>
                                <label id="clname-status" style={{color:"red"}}>*</label>
                                <input type="text" placeholder="Lastname"/><br/><br/><br/>
                                <label id="ccontact-status" style={{color:"red"}}>*</label>
                                <input type="text" placeholder="Contact" onKeyUp={window['contactphoneCheck']}/>
                                <label id="cemail-status" style={{color:"red"}}>*</label>
                                <input type="text" id="contactemail" placeholder="Email" onKeyUp={window['contactemailCheck']}/><br/><br/><br/>
                                <textarea id="contactquery" placeholder="Query" rows="4" cols="50"></textarea><br/><br/><br/>
                                <button type="button" onClick={window['sendMail']} className="contactbtn">Submit</button><br/>
                                <label id="success"></label>
                            </form><br/><br/><br/>
                            <img src="./Images/Logo.png"/>
                            <h3>Place where your dream home awaits you</h3>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-google"></a>
                            <a href="#" className="fa fa-linkedin"></a><br/>
                        </footer>
                    </div>
                </div>
        </div>  
	     );
    }
export default Home;
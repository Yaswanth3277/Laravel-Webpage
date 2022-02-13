import React, {Component} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


const Resident=()=> {
    let remail = localStorage.getItem("email");
    let rfname = localStorage.getItem("fname");
    let rlname = localStorage.getItem("lname");
    let rdob = localStorage.getItem("dob");
    let rphone = localStorage.getItem("phone");
    let rusername = localStorage.getItem("username");

        const[errors, setErrors] = useState('');
        const[user, setUser] = useState({
            fname:rfname,
            lname:rlname,
            email:remail,
            phone:rphone,
            dob: rdob,
            vname: '',
            vdate: '',
            vemail: '',
            vcontact: '',
            vpurpose: '',
        });
        const {fname, lname, email, phone, dob, vname, vdate, vemail, vcontact, vpurpose} = user;
        const onInputChange = e => {
            setUser({...user, [e.target.name]: e.target.value});
        };

        let history = useHistory();
        let arraydata = new Array();
        let log = sessionStorage.getItem('log') === 'true';

        async function updateform(){
            let result = await axios.post("http://127.0.0.1:8000/api/resident", user)
            .then(response => {
                arraydata = response.data.split(',');
            });
            setErrors('Update Successful');

            setUser({fname:'', lname:'', email:'', phone:'', dob: ''});
            remail = arraydata[0];
            rfname = arraydata[1];
            rlname = arraydata[2];
            rdob = arraydata[3];
            rphone = arraydata[4];
        }

        async function visitorform(){
            let result = await axios.post("http://127.0.0.1:8000/api/resident", user);
            setErrors("Data entered successfully");
            setUser({vname: '', vdate: '', vemail: '', vcontact: '', vpurpose: ''});
        }
        localStorage.setItem("winname", "Resident");

        const logout = (event)=>{
            event.preventDefault();
            let log = sessionStorage.getItem('log') === 'false';
            sessionStorage.clear();
            window.open("/", "_self");
        }
        if(!log){
            return <Redirect to='/'/>
        }
	    return (
		<div className="row ">
	        <div className="medium-12 columns">
                <div>
                    <div id="rleftbar">
                        <img src="./Images/amongus.png"/>
                        <h3>{rusername}</h3><br/><br/>
                        <a id="userlogout" href="/" onClick={e=>logout(e)}>Logout</a><br/><br/><br/>
                        <ul>
                            <a href="#" onClick={window['residentprofile']}><li id="firstbt">View Profile</li></a>
                            <a href="#" onClick={window['servicesform']}><li>Services</li></a>
                            <a href="#" onClick={window['uploadform']}><li>Upload Images/Videos</li></a>
                            <a href="#" onClick={window['residentvisitorsform']}><li>Visitors</li></a>
                            <a href="#" onClick={() => history.push('/chat')}><li>Chat</li></a>
                        </ul>
                    </div>
                    <div id="rrightbar">
                        <div id="myprofile">
                            <h1>My Profile</h1>
                            <div id="userprofile-page">
                                
                                <table style={{borderSpacing: "20px 100px"}}>
                                    <tr>
                                        <td>Username:</td>
                                        <td>{remail}</td>

                                        <td style={{paddingLeft:"80px"}}>Email: </td>
                                        <td>{remail}</td>

                                        <td style={{paddingLeft:"80px"}}>Phone:</td>
                                        <td>{rphone}</td>
                                    </tr>

                                    <tr>
                                        <td>Firstname:</td>
                                        <td>{rfname}</td>

                                        <td style={{paddingLeft:"80px"}}>Lastname: </td>
                                        <td>{rlname}</td>

                                        <td style={{paddingLeft:"80px"}}>DOB:</td>
                                        <td>{rdob}</td>
                                    </tr>
                                </table>
                                <button id="profileupdate" onClick={window['profileupdateform']}>Update</button>
                            </div>
                            <div id="profile-edit">
                                <form action="#" method="post">
                                    <h1>Update Data</h1><br/>
                                    <div style={{textAlign:"left", float:"left"}}>
                                        <label htmlFor="fname"><b>Firstname: </b></label>
                                        <label>{rfname}</label><br/><br/>
                                        <input type="text" name="fname" value={fname} onChange={e => onInputChange(e)}/><br/><br/><br/>

                                        <label htmlFor="lname"><b>Lastname: </b></label>
                                        <label>{rlname}</label><br/><br/>
                                        <input type="text" name="lname" value={lname} onChange={e => onInputChange(e)}/><br/><br/><br/>

                                        <label htmlFor="email"><b>Email: </b></label>
                                        <label>{remail}</label><br/><br/>
                                        <input type="text" name="email" value={email} onChange={e => onInputChange(e)} readonly/><br/><br/><br/>
                                    </div>
                                    <div style={{textAlign:"left", marginLeft:"400px"}}>
                                        <label htmlFor="dob"><b>DOB: </b></label>
                                        <label>{rdob}</label><br/><br/>
                                        <input type="text" name="dob" value={dob} onChange={e => onInputChange(e)}/><br/><br/><br/>

                                        <label htmlFor="phone"><b>Phone: </b></label>
                                        <label>{rphone}</label><br/><br/><br/>
                                        <input type="text" name="phone" value={phone} onChange={e => onInputChange(e)}/><br/><br/><br/>
                                    </div> 
                                    <button type="button" className="insbtn" onClick={updateform}>Update</button>
                                </form>
                            </div>
                        </div>
                        <div id="services">
                            <h1>Services</h1>
                            <div id="water" onClick={window['waterchangecolor']}>
                                <h3>Water</h3>
                                <a href="#" id="watercolor" className="fa fa-shower"></a>
                            </div>
                            <div id="electricity" onClick={window['elechangecolor']}>
                                <h3>Electricity</h3>
                                <a href="#" id="electricitycolor" className="fa fa-bolt"></a>
                            </div>
                            <div id="wifi" onClick={window['wifichangecolor']}>
                                <h3>Wifi</h3>
                                <a href="#" id="wificolor" className="fa fa-wifi"></a>
                            </div>
                            <div id="trash" onClick={window['trashchangecolor']}>
                                <h3>Trash</h3>
                                <a href="#" id="trashcolor" className="fa fa-trash"></a>
                            </div>
                        </div>
                        <div id="upload">
                            <h1>Upload Images/Videos</h1>
                            <div id="uploadarea">
                                <label htmlFor="uploadbutton" id="uploadlabel"><a>Upload</a></label>
                                <input type="file" id="uploadbutton" name="uploadbutton" onClick={window['uploadbutton']} readonly/>
                                <label id="filename">No File Chosen</label>
                            </div>
                        </div>
                        <div id="rvisitors">
                            <h1>Visitors</h1>
                            <div id="rvisitor-form">
                                <form action="#" method="post">
                                    <h1>Visitor Form</h1><br/>
                                    <label htmlFor="name"><b>Name</b></label><br/><br/>
                                    <input type="text" name="vname" value={vname} onChange={e => onInputChange(e)}/><br/><br/><br/>
                                    
                                    <label htmlFor="vdate"><b>Date of visit</b></label><br/><br/>
                                    <input type="text" name="vdate" placeholder="mm-dd-yyyy" value={vdate} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="email"><b>Email</b></label><br/><br/>
                                    <input type="text" name="vemail" value={vemail} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="phone"><b>Contact</b></label><br/><br/>
                                    <input type="text" name="vcontact" value={vcontact} onChange={e => onInputChange(e)}/><br/><br/><br/>

                                    <label htmlFor="purpose"><b>Purpose of visit</b></label><br/><br/>
                                    <input type="text" name="vpurpose" value={vpurpose} onChange={e => onInputChange(e)}/><br/><br/><br/>
                                    
                                    <button type="button" className="subbtn" onClick={visitorform}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div id="chat">
                            <div id="mainbox">
                                <div id="allchats">
                                    <h1>Chat</h1><br/><br/>
                                    <ul>
                                        <a href="#" onClick={window['managerchat']}><li>Manager</li></a>
                                        <a href="#" onClick={window['adminchat']}><li>Admin</li></a>
                                        <a href="#" onClick={window['visitorchat']}><li>Visitor</li></a>
                                    </ul>
                                </div>
                                <div id="chatbox">
                                    <div id="manager">
                                        <h2>Manager</h2>
                                        <div id="chatblob1">
                                            <input type="text" value="Hello" readonly/>
                                        </div>
                                        <div id="chatblob2">
                                            <input type="text" value="Hey" readonly/>
                                        </div>
                                        <div id="messagebox">
                                            <input type="text"/>
                                            <a href="#" className="fa fa-paper-plane"></a>
                                        </div>
                                    </div>
                                    <div id="adminchat">
                                        <h2>Admin</h2>
                                        <div id="chatblob1">
                                            <input type="text" value="Hello" readonly/>
                                        </div>
                                        <div id="chatblob2">
                                            <input type="text" value="Hey" readonly/>
                                        </div>
                                        <div id="messagebox">
                                            <input type="text"/>
                                            <a href="#" className="fa fa-paper-plane"></a>
                                        </div>
                                    </div>
                                    <div id="visitorchat">
                                        <h2>Visitor</h2>
                                        <div id="chatblob1">
                                            <input type="text" value="Hello" readonly/>
                                        </div>
                                        <div id="chatblob2">
                                            <input type="text" value="Hey" readonly/>
                                        </div>
                                        <div id="messagebox">
                                            <input type="text"/>
                                            <a href="#" className="fa fa-paper-plane"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
	     );
    }
export default Resident;
import react, {Component} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useHistory, useParams} from "react-router-dom";
import {Redirect} from 'react-router-dom';
const Visitor=()=> {

    const[errors, setErrors] = useState('');
        const[user, setUser] = useState({
            vname: '',
            vaptno: '',
            vrname: '',
            vdate:'',
            vemail: '',
            vphone: '', 
            vgname: '',
            gname: '',
            vgdate: '',
            vgemail: '',
            vgphone:''
        });

        let history = useHistory();
        const {vname, vaptno, vrname, vdate, vemail, vphone, vgname, gname, vgdate, vgemail, vgphone} = user;
        const onInputChange = e => {
            setUser({...user, [e.target.name]: e.target.value});
        };

        let log = sessionStorage.getItem('log') === 'true';
        async function visitapartment(){
            let result = await axios.post("http://127.0.0.1:8000/api/visitor", user);
            setErrors('Registration Successful');
            setUser({vname:'', vaptno:'', vrname:'', vdate:'', vemail:'', vphone:'', vgname:'', gname:'', vgdate:'', vgemail:'', vgphone:''});
        }

        localStorage.setItem("winname", "Visitor");

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
                    <div id="visitleftbar">
                        <img src="./Images/visitor.png"/>
                        <h3>Visitor</h3><br/>
                        <a id="visitorlogout" href="/" onClick={e=>logout(e)}>Logout</a><br/><br/>
                        <ul>
                            <a href="#" onClick={window['visitapartmentform']}><li id="firstbt">Visit Apartments</li></a>
                            <a href="#" onClick={window['visitgardenform']}><li>Visit Gardens</li></a>
                            <a href="#" onClick={() => history.push('/chat')}><li>Chat</li></a>
                        </ul>
                    </div>
                    <div id="visitrightbar">
                        <div id="visitapartment">
                            <h1>Apartment Visit</h1>
                            <div id="visit-visitor-form">
                                <form action="#" method="post">
                                    <h1>Visitor Form</h1><br/>
                                    <label htmlFor="name"><b>Name</b></label><br/><br/>
                                    <input type="text" name="vname" value={vname} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="aptno"><b>Apartment Number</b></label><br/><br/>
                                    <input type="text" name="vaptno" value={vaptno} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="rname"><b>Resident Name</b></label><br/><br/>
                                    <input type="text" name="vrname" value={vrname} onChange={e => onInputChange(e)}/><br/><br/><br/>
                                    
                                    <label htmlFor="vdate"><b>Date of visit</b></label><br/><br/>
                                    <input type="text" name="vdate" value={vdate} onChange={e => onInputChange(e)} placeholder="mm-dd-yyyy"/><br/><br/><br/>
                
                                    <label htmlFor="email"><b>Email</b></label><br/><br/>
                                    <input type="text" name="vemail" value={vemail} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="phone"><b>Contact</b></label><br/><br/>
                                    <input type="text" name="vphone" value={vphone} onChange={e => onInputChange(e)}/><br/><br/><br/>
                                    
                                    <button type="button" className="subbtn" onClick={visitapartment}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div id="visitgarden">
                            <h1>Garden Visit</h1>
                            <div id="visit-garden-form">
                                <form action="#">
                                    <h1>Visitor Form</h1><br/>
                                    <label htmlFor="name"><b>Name</b></label><br/><br/>
                                    <input type="text" name="vgname" value={vgname} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="aptno"><b>Select Garden</b></label><br/><br/>
                                    <select id="garden-option" name="gname" value={gname} onChange={e => onInputChange(e)}>
                                        <option value="">--Please choose an option--</option>
                                        <option value="Whitehall Gardens">Whitehall Gardens</option>
                                        <option value="Lotus Garden">Lotus Garden</option>
                                        <option value="Century Garden">Century Garden</option>
                                    </select><br/><br/><br/>
                                    
                                    <label htmlFor="vdate"><b>Date of visit</b></label><br/><br/>
                                    <input type="text" name="vgdate" value={vgdate} onChange={e => onInputChange(e)} placeholder="mm-dd-yyyy"/><br/><br/><br/>
                
                                    <label htmlFor="email"><b>Email</b></label><br/><br/>
                                    <input type="text" name="vgemail" value={vgemail} onChange={e => onInputChange(e)}/><br/><br/><br/>
                
                                    <label htmlFor="phone"><b>Contact</b></label><br/><br/>
                                    <input type="text" name="vgphone" value={vgphone} onChange={e => onInputChange(e)}/><br/><br/><br/>
                                    
                                    <button type="submit" className="subbtn" onClick={visitapartment}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div id="visitchat">
                            <div id="visitmainbox">
                                <div id="visitallchats">
                                    <h1>Chat</h1><br/><br/>
                                    <ul>
                                        <a href="#" onClick={window['visitmanager']}><li>Manager</li></a>
                                        <a href="#" onClick={window['apartmentowner1']}><li>Apartment 1</li></a>
                                    </ul>
                                </div>
                                <div id="visitchatbox">
                                    <div id="visitmanager">
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
                                    <div id="apartment-owner-1">
                                        <h2>Apartment Owner 1</h2>
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
export default Visitor;
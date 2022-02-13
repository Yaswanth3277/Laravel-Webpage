import React, {Component} from 'react';
import axios from 'axios';
import {Redirect, useHistory} from 'react-router-dom';

const API_PATH_MANAGER = 'http://localhost/laravel/react-app/src/api/manager-apt.php';
const API_PATH_INS = 'http://localhost/laravel/react-app/src/api/manager-ins.php';
const API_PATH_UPDATE = 'http://localhost/laravel/react-app/src/api/manager-update.php';
const API_PATH_DEL = 'http://localhost/laravel/react-app/src/api/manager-del.php';

const API_PATH_VISITOR_DATA = 'http://localhost/laravel/react-app/src/api/manager-visitor-load.php';
const API_PATH_VISITOR_INS = 'http://localhost/laravel/react-app/src/api/manager-visitor-ins.php';
const API_PATH_VISITOR_UPDATE = 'http://localhost/laravel/react-app/src/api/manager-visitor-update.php';
const API_PATH_VISITOR_DEL = 'http://localhost/laravel/react-app/src/api/manager-visitor-del.php';

const API_PATH_POOL_DATA = 'http://localhost/laravel/react-app/src/api/manager-pool-load.php';
const API_PATH_POOL_INS = 'http://localhost/laravel/react-app/src/api/manager-pool-ins.php';
const API_PATH_POOL_UPDATE = 'http://localhost/laravel/react-app/src/api/manager-pool-update.php';
const API_PATH_POOL_DEL = 'http://localhost/laravel/react-app/src/api/manager-pool-del.php';

const API_PATH_GARDEN_DATA = 'http://localhost/laravel/react-app/src/api/manager-garden-load.php';
const API_PATH_GARDEN_INS = 'http://localhost/laravel/react-app/src/api/manager-garden-ins.php';
const API_PATH_GARDEN_UPDATE = 'http://localhost/laravel/react-app/src/api/manager-garden-update.php';
const API_PATH_GARDEN_DEL = 'http://localhost/laravel/react-app/src/api/manager-garden-del.php';

const API_PATH_SERVICE_DATA = 'http://localhost/laravel/react-app/src/api/manager-service-load.php';
const API_PATH_SERVICE_INS = 'http://localhost/laravel/react-app/src/api/manager-service-ins.php';
const API_PATH_SERVICE_UPDATE = 'http://localhost/laravel/react-app/src/api/manager-service-update.php';
const API_PATH_SERVICE_DEL = 'http://localhost/laravel/react-app/src/api/manager-service-del.php';

class Manager extends Component {
    constructor(props){
        super(props)
        this.state = {
            mdataSent: [],
            IdataSent: '',
            Irname:'',
            Ianum:'',
            Ibnum: '',
            Itype: '',
            Iemail: '',
            Iphone: '',
            UdataSent: '',
            Urname:'',
            Uanum:'',
            Ubnum: '',
            Utype: '',
            Uemail: '',
            Uphone: '',
            UdataSent:'',
            UCdataSent: '',
            DdataSent: '',
            log:'',
            del_name:'',

            VdataSent: [],
            VIdataSent: '',
            VIrname:'',
            VIanum:'',
            VItin: '',
            VItout: '',
            VIincidents: '',
            VUdataSent: '',
            VUrname:'',
            VUanum:'',
            VUtin: '',
            VUtout: '',
            VUincidents: '',
            VUdataSent:'',
            VUCdataSent: '',
            VDdataSent: '',
            Vdel_name:'',

            PdataSent: [],
            PIdataSent: '',
            PIrpool_id:'',
            PIlast_cleaned:'',
            PInext_main: '',
            PIsqft: '',
            PIincidents: '',
            PUdataSent: '',
            PUrpool_id:'',
            PUlast_cleaned:'',
            PUnext_main: '',
            PUsqft: '',
            PUincidents: '',
            PUdataSent:'',
            PUCdataSent: '',
            PDdataSent: '',
            Pdel_name:'',

            GdataSent: [],
            GIdataSent: '',
            GIname: '',
            GIsqft: '',
            GImanager: '',
            GIsecurity: '',
            GUname: '',
            GUsqft: '',
            GUmanager: '',
            GUsecurity: '',
            GUdataSent:'',
            GUCdataSent: '',
            GDdataSent: '',
            Gdel_name:'',

            SdataSent: [],
            SIdataSent: '',
            SIano: '',
            SIsno: '',
            SIs_name: '',
            SIowner: '',
            SUano: '',
            SUsno: '',
            SUs_name: '',
            SUowner: '',
            SUdataSent:'',
            SUCdataSent: '',
            SDdataSent: '',
            Sdel_name:'',

        }
        this.log = sessionStorage.getItem('log') === 'true';
        localStorage.setItem("winname", "Admin");
    }
    componentDidMount(){
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_MANAGER,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                mdataSent: result.data.msent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    logout(event){
        event.preventDefault();
        console.log(this.state);
        this.log = sessionStorage.getItem('log') === 'false';
        sessionStorage.clear();
        window.open("/", "_self");
    }

    render() {
        if(!this.log){
            return <Redirect to='/'/>
        }
	    return (
		<div className="row ">
	        <div className="medium-12 columns">
                <div>
                <div id="leftbar">
                        <img src="./Images/admin.png"/>
                        <h3>Admin</h3>
                        <a id="adminlogout" href="/" onClick={e=>this.logout(e)}>Logout</a><br/><br/>
                        <ul>
                            <a href="#" onClick={window['manapartmentform']}><li id="firstbt">Residents</li></a>
                            <a href="#" onClick={e => this.onvisClick(e)}><li>Visitors</li></a>
                            <a href="#" onClick={e => this.onpoolClick(e)}><li>Pool</li></a>
                            <a href="#" onClick={e => this.ongardenClick(e)}><li>Garden</li></a>
                            <a href="#" onClick={e => this.onservicesClick(e)}><li>Services</li></a>
                            <a href="/chat"><li>Chat</li></a>
                        </ul>
                    </div>
                    <div id="rightbar">
                        <div id="apartment-page">
                            <h1>Apartment Dashboard</h1>
                            <div id="apartment-table">
                            <button id="email-btn" onClick={window['insertview']}>Create</button>
                                <table>
                                    <tr>
                                        <th>Resident Name</th>
                                        <th>Apartment Number</th>
                                        <th>Building Number</th>
                                        <th>Type</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>CRUD</th>
                                    </tr>
                                    {this.state.mdataSent.map((value,i)=>(
                                    <tr key={i}>
                                        <td>{value.owner}</td>
                                        <td>{value.a_no}</td>
                                        <td>{value.b_no}</td>
                                        <td>{value.type}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>
                                            <button id="update-btn" onClick={() => this.onupSubmit(value.owner, value.a_no, value.b_no, value.type, value.email, value.phone)}>Update</button>
                                            <button id="delete-btn" onClick={() => this.ondelSubmit(value.owner)}>Delete</button>
                                        
                                        </td>
                                    </tr>
                                    ))}
                                </table> 
                            </div>
                            <div id="insert-form">
                            <form action="#">
                                <h1>Insert Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Resident Name</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.Irname} onChange={e => this.setState({ Irname:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>Apartment Number</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.Ianum} onChange={e => this.setState({ Ianum:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Building Number</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Ibnum} onChange={e => this.setState({ Ibnum:e.target.value })}/><br/><br/><br/> 
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Type</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Itype} onChange={e => this.setState({ Itype:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Email</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Iemail} onChange={e => this.setState({ Iemail:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Phone</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Iphone} onChange={e => this.setState({ Iphone:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.oninsSubmit(e)}>Insert</button>
                            </form>
                            </div>

                            <div id="update-form">
                            <form action="#">
                                <h1>Update Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Resident Name</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.Urname} onChange={e => this.setState({ Urname:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>Apartment Number</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.Uanum} onChange={e => this.setState({ Uanum:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Building Number</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Ubnum} onChange={e => this.setState({ Ubnum:e.target.value })}/><br/><br/><br/> 
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Type</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Utype} onChange={e => this.setState({ Utype:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Email</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Uemail} onChange={e => this.setState({ Uemail:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Phone</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.Uphone} onChange={e => this.setState({ Uphone:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onchangeSubmit(e)}>Insert</button>
                            </form>
                            </div>
                        </div>
                        <div id="visitor-page">
                            <h1>Visitor Dashboard</h1>
                            <div>
                            <button id="email-btn" onClick={window['visitorinsertview']}>Create</button>
                                <table id="man-visitor-table">
                                    <tr>
                                        <th>Visitor Num</th>
                                        <th>Visitor Name</th>
                                        <th>Apartment Number</th>
                                        <th>Time-in</th>
                                        <th>Time-out</th>
                                        <th>Incidents</th>
                                        <th>CRUD</th>
                                    </tr>
                                    {this.state.VdataSent.map((value1,i)=>(
                                    <tr key={i}>
                                        <td>{value1.v_no}</td>
                                        <td>{value1.v_name}</td>
                                        <td>{value1.v_apt}</td>
                                        <td>{value1.time_in}</td>
                                        <td>{value1.time_out}</td>
                                        <td>{value1.incidents}</td>
                                        <td>
                                            <button id="update-btn" onClick={() => this.onvisupSubmit(value1.v_name, value1.v_apt, value1.time_in, value1.time_out, value1.incidents)}>Update</button>
                                            <button id="delete-btn" onClick={() => this.onvisdelSubmit(value1.v_name)}>Delete</button>
                                        
                                        </td>
                                    </tr>
                                    ))}
                                </table> 
                            </div>
                            <div id="vis-insert-form">
                            <form action="#">
                                <h1>Insert Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Visitor Name</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.VIrname} onChange={e => this.setState({ VIrname:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>Apartment Number</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.VIanum} onChange={e => this.setState({ VIanum:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Time In</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.VItin} onChange={e => this.setState({ VItin:e.target.value })}/><br/><br/><br/> 
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Time Out</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.VItout} onChange={e => this.setState({ VItout:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Incidents</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.VIincidents} onChange={e => this.setState({ VIincidents:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onvisinsSubmit(e)}>Insert</button>
                            </form>
                            </div>

                            <div id="vis-update-form">
                            <form action="#">
                                <h1>Update Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Visitor Name</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.VUrname} onChange={e => this.setState({ VUrname:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>Apartment Number</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.VUanum} onChange={e => this.setState({ VUanum:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Time In</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.VUtin} onChange={e => this.setState({ VUtin:e.target.value })}/><br/><br/><br/> 
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Time Out</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.VUtout} onChange={e => this.setState({ VUtout:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Incidents</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.VUincidents} onChange={e => this.setState({ VUincidents:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onvischangeSubmit(e)}>Insert</button>
                            </form>
                            </div>
                        </div>
                        <div id="man-pool">
                            <h1>Pool Dashboard</h1>
                            <div>
                            <button id="email-btn" onClick={window['poolinsertview']}>Create</button>
                                <table id="man-pool-table">
                                    <tr>
                                        <th>Pool No</th>
                                        <th>Last Cleaned</th>
                                        <th>Next Maintainence</th>
                                        <th>Sqft</th>
                                        <th>CRUD</th>
                                    </tr>
                                    {this.state.PdataSent.map((value2,i)=>(
                                    <tr key={i}>
                                        <td>{value2.pool_id}</td>
                                        <td>{value2.last_cleaned}</td>
                                        <td>{value2.next_main}</td>
                                        <td>{value2.sqft}</td>
                                        <td>
                                            <button id="update-btn" onClick={() => this.onpoolupSubmit(value2.pool_id, value2.last_cleaned, value2.next_main, value2.sqft)}>Update</button>
                                            <button id="delete-btn" onClick={() => this.onpooldelSubmit(value2.pool_id)}>Delete</button>
                                        
                                        </td>
                                    </tr>
                                    ))}
                                </table> 
                            </div>
                            <div id="pool-insert-form">
                            <form action="#">
                                <h1>Insert Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Pool ID</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.PIrpool_id} onChange={e => this.setState({ PIrpool_id:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>Last Cleaned</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.PIlast_cleaned} onChange={e => this.setState({ PIlast_cleaned:e.target.value })}/><br/><br/><br/>
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Next Maintainence</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.PInext_main} onChange={e => this.setState({ PInext_main:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>SQFT</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.PIsqft} onChange={e => this.setState({ PIsqft:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onpoolinsSubmit(e)}>Insert</button>
                            </form>
                            </div>

                            <div id="pool-update-form">
                            <form action="#">
                                <h1>Update Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>POOL ID</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.PUrpool_id} onChange={e => this.setState({ PUrpool_id:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>Last Cleaned</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.PUlast_cleaned} onChange={e => this.setState({ PUlast_cleaned:e.target.value })}/><br/><br/><br/>
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Next Maintainence</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.PUnext_main} onChange={e => this.setState({ PUnext_maintainence:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>SQFT</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.PUsqft} onChange={e => this.setState({ PUsqft:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onpoolchangeSubmit(e)}>Insert</button>
                            </form>
                            </div>
                        </div>
                        <div id="man-garden">
                            <h1>Garden Dashboard</h1>
                            <div>
                            <button id="email-btn" onClick={window['gardeninsertview']}>Create</button>
                                <table id="man-garden-table">
                                    <tr>
                                        <th>Garden Name</th>
                                        <th>Sqft</th>
                                        <th>Manager</th>
                                        <th>Security</th>
                                        <th>CRUD</th>
                                    </tr>
                                    {this.state.GdataSent.map((value3,i)=>(
                                    <tr key={i}>
                                        <td>{value3.garden_name}</td>
                                        <td>{value3.sqft}</td>
                                        <td>{value3.manager}</td>
                                        <td>{value3.security}</td>
                                        <td>
                                            <button id="update-btn" onClick={() => this.ongardenupSubmit(value3.garden_name, value3.sqft, value3.manager, value3.security)}>Update</button>
                                            <button id="delete-btn" onClick={() => this.ongardendelSubmit(value3.garden_name)}>Delete</button>
                                        
                                        </td>
                                    </tr>
                                    ))}
                                </table> 
                            </div>
                            <div id="garden-insert-form">
                            <form action="#">
                                <h1>Insert Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Garden Name</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.GIname} onChange={e => this.setState({ GIname:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>SQFT</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.GIsqft} onChange={e => this.setState({ GIsqft:e.target.value })}/><br/><br/><br/>
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Manager</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.GImanager} onChange={e => this.setState({ GImanager:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Security</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.GIsecurity} onChange={e => this.setState({ GIsecurity:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.ongardeninsSubmit(e)}>Insert</button>
                            </form>
                            </div>

                            <div id="garden-update-form">
                            <form action="#">
                                <h1>Update Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>
                                    <label htmlFor="name"><b>Garden Name</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.GUname} onChange={e => this.setState({ GUname:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="aptno"><b>SQFT</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.GUsqft} onChange={e => this.setState({ GUsqft:e.target.value })}/><br/><br/><br/>
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="rname"><b>Manager</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.GUmanager} onChange={e => this.setState({ GUmanager:e.target.value })}/><br/><br/><br/>

                                    <label htmlFor="rname"><b>Security</b></label><br/><br/>
                                    <input type="text" name="rname" value={this.state.GUsecurity} onChange={e => this.setState({ GUsecurity:e.target.value })}/><br/><br/><br/>
                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.ongardenchangeSubmit(e)}>Insert</button>
                            </form>
                            </div>
                        </div>
                        <div id="man-aservices">
                            <h1>Services Dashboard</h1>
                            <div>
                            <button id="email-btn" onClick={window['servicesinsertview']}>Create</button>
                                <table id="man-services-table">
                                    <tr>
                                        <th>Service No</th>
                                        <th>Service Name</th>
                                        <th>CRUD</th>
                                    </tr>
                                    {this.state.SdataSent.map((value4,i)=>(
                                    <tr key={i}>
                                        <td>{value4.service_id}</td>
                                        <td>{value4.service_name}</td>
                                        <td>
                                            <button id="update-btn" onClick={() => this.onservicesupSubmit(value4.service_id, value4.service_name)}>Update</button>
                                            <button id="delete-btn" onClick={() => this.onservicesdelSubmit(value4.service_id)}>Delete</button>
                                        
                                        </td>
                                    </tr>
                                    ))}
                                </table> 
                            </div>
                            <div id="services-insert-form">
                            <form action="#">
                                <h1>Insert Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>

                                    <label htmlFor="name"><b>Service Num</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.SIsno} onChange={e => this.setState({ SIsno:e.target.value })}/><br/><br/><br/>
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="aptno"><b>Service Name</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.SIs_name} onChange={e => this.setState({ SIs_name:e.target.value })}/><br/><br/><br/>

                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onservicesinsSubmit(e)}>Insert</button>
                            </form>
                            </div>

                            <div id="services-update-form">
                            <form action="#">
                                <h1>Update Form</h1><br/>
                                <div style={{textAlign:"left", float:"left"}}>

                                    <label htmlFor="name"><b>Service Num</b></label><br/><br/>
                                    <input type="text" name="name" value={this.state.SUsno} onChange={e => this.setState({ SUsno:e.target.value })}/><br/><br/><br/>
                                </div>
                                <div style={{textAlign:"left", marginLeft:"400px"}}>
                                    <label htmlFor="aptno"><b>Service Name</b></label><br/><br/>
                                    <input type="text" name="aptno" value={this.state.SUs_name} onChange={e => this.setState({ SUs_name:e.target.value })}/><br/><br/><br/>


                                </div> 
                                <button type="submit" className="insbtn" onClick={e => this.onserviceschangeSubmit(e)}>Insert</button>
                            </form>
                            </div>
                        </div>
                        <div id="chat">
                            <div id="manmainbox">
                                <div id="manallchats">
                                    <h1>Chat</h1><br/><br/>
                                    <ul>
                                        <a href="#" onClick={window['resident1']}><li>Resident1</li></a>
                                        <a href="#" onClick={window['resident2']}><li>Resident2</li></a>
                                    </ul>
                                </div>
                                <div id="manchatbox">
                                    <div id="resident1">
                                        <h2>Resident1</h2>
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
                                    <div id="resident2">
                                        <h2>Resident2</h2>
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
    oninsSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_INS,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                IdataSent: result.data.Isent,
            })
            console.log(this.state)
            if(this.state.IdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }


    onupSubmit(update_owner, update_ano, update_bno, update_type, update_email, update_phone){
        window.updateview();
        this.state.Urname = update_owner;
        this.state.Uanum = update_ano;
        this.state.Ubnum = update_bno;
        this.state.Utype = update_type;
        this.state.Uemail = update_email;
        this.state.Uphone = update_phone;
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                UdataSent: result.data.sent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    ondelSubmit(delete_name){
        this.state.del_name = delete_name
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_DEL,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                DdataSent: result.data.dsent,
            })
            console.log(this.state)

            if(this.state.DdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onchangeSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                UCdataSent: result.data.usent,
            })
            console.log(this.state)

            if(this.state.UCdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onvisClick(event){
        window.manvisitorform();
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_VISITOR_DATA,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                VdataSent: result.data.vsent,
            })
            console.log(this.state)

            if(this.state.UCdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onvisupSubmit(update_visitor, update_ano, update_tin, update_tout, update_incidents){
        window.visitorupdateview();
        this.state.VUrname = update_visitor;
        this.state.VUanum = update_ano;
        this.state.VUtin = update_tin;
        this.state.VUtout = update_tout;
        this.state.VUincidents = update_incidents;

        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_VISITOR_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                VUdataSent: result.data.sent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onvisdelSubmit(vdelete_name){
        this.state.Vdel_name = vdelete_name
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_VISITOR_DEL,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                VDdataSent: result.data.vdsent,
            })
            console.log(this.state)

            if(this.state.VDdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onvisinsSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_VISITOR_INS,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                VIdataSent: result.data.VIsent,
            })
            console.log(this.state)
            if(this.state.VIdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onvischangeSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_VISITOR_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                VCdataSent: result.data.vusent,
            })
            console.log(this.state)

            if(this.state.VCdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onpoolClick(event){
        window.manpoolform();
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_POOL_DATA,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                PdataSent: result.data.psent,
            })
            console.log(this.state)

            if(this.state.PdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onpoolupSubmit(pool_id, last_cleaned, next_main, sqft){
        window.poolupdateview();
        this.state.PUrpool_id = pool_id;
        this.state.PUlast_cleaned = last_cleaned;
        this.state.PUnext_main = next_main;
        this.state.PUsqft = sqft;

        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_POOL_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                PUdataSent: result.data.sent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onpooldelSubmit(pdelete_name){
        this.state.Pdel_name = pdelete_name
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_POOL_DEL,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                PDdataSent: result.data.pdsent,
            })
            console.log(this.state)

            if(this.state.PDdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onpoolinsSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_POOL_INS,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                PIdataSent: result.data.PIsent,
            })
            console.log(this.state)
            if(this.state.PIdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onpoolchangeSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_POOL_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                PUCdataSent: result.data.pusent,
            })
            console.log(this.state)

            if(this.state.PUCdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }



    ongardenClick(event){
        window.mangardenform();
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_GARDEN_DATA,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                GdataSent: result.data.gsent,
            })
            console.log(this.state)

            if(this.state.GdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    ongardenupSubmit(garden_name, sqft, manager, security){
        window.gardenupdateview();
        this.state.GUname = garden_name;
        this.state.GUsqft = sqft;
        this.state.GUmanager = manager;
        this.state.GUsecurity = security;

        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_GARDEN_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                GUdataSent: result.data.sent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    ongardendelSubmit(gdelete_name){
        this.state.Gdel_name = gdelete_name
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_GARDEN_DEL,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                GDdataSent: result.data.gdsent,
            })
            console.log(this.state)

            if(this.state.GDdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    ongardeninsSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_GARDEN_INS,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                GIdataSent: result.data.GIsent,
            })
            console.log(this.state)
            if(this.state.GIdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    ongardenchangeSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_GARDEN_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                GUCdataSent: result.data.gusent,
            })
            console.log(this.state)

            if(this.state.GUCdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }




    onservicesClick(event){
        window.manaservicesform();
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_SERVICE_DATA,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                SdataSent: result.data.ssent,
            })
            console.log(this.state)

            if(this.state.SdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onservicesupSubmit(s_no, s_name){
        window.servicesupdateview();
        this.state.SUs_name = s_name;
        this.state.SUsno = s_no;

        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_SERVICE_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                SUdataSent: result.data.sent,
            })
            console.log(this.state)
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onservicesdelSubmit(sdelete_name){
        this.state.Sdel_name = sdelete_name
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_SERVICE_DEL,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                SDdataSent: result.data.sdsent,
            })
            console.log(this.state)

            if(this.state.SDdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onservicesinsSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_SERVICE_INS,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                SIdataSent: result.data.SIsent,
            })
            console.log(this.state)
            if(this.state.SIdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }

    onserviceschangeSubmit(event){
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'POST',
            url: API_PATH_SERVICE_UPDATE,
            headers: {
                'content-type' : 'application/json'
            },
            data: this.state
        })
        .then(result => {
            console.log(result.data)
            this.setState({
                SUCdataSent: result.data.susent,
            })
            console.log(this.state)

            if(this.state.SUCdataSent == 1){
                window.location.reload(false);
            }
        })
        .catch(error => this.setState({
            error: error.message
        }));
    }
}
export default Manager;
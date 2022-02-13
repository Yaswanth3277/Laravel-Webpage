import react, {Component} from 'react';
import {useState} from 'react';
import axios from 'axios';

const HomeVisit=()=> {
    const[errors, setErrors] = useState('');
        const[user, setUser] = useState({
            name:'',
            aptno:'',
            rname:'',
            vdate:'',
            email:'',
            phone:''
        });
        const {name, aptno, rname, vdate, email, phone} = user;
        const onInputChange = e => {
            setUser({...user, [e.target.name]: e.target.value});
        };

        async function visitorupdate(){
            let result = await axios.post("http://127.0.0.1:8000/api/homevisit", user);
            setErrors('Registration Successful');
            setUser({name:'', aptno:'', rname:'', vdate:'', email:'', phone:''});
        }
        return (
            <div id="visitor-form">
                <form action="#" method='post'>
                    <a style={{float:"right"}} href="/" className="fa fa-times"></a>
                    <h1>Visitor Form</h1><br/>
                    <div style={{textAlign:"left", float:"left"}}>
                        <label htmlFor="name"><b>Name</b></label><br/><br/>
                        <input type="text" name="name" value={name} onChange={e => onInputChange(e)}/><br/><br/><br/>

                        <label htmlFor="aptno"><b>Apartment Number</b></label><br/><br/>
                        <input type="text" name="aptno" value={aptno} onChange={e => onInputChange(e)}/><br/><br/><br/>

                        <label htmlFor="rname"><b>Resident Name</b></label><br/><br/>
                        <input type="text" name="rname" value={rname} onChange={e => onInputChange(e)}/><br/><br/><br/>
                    </div>
                    <div style={{textAlign:"left", marginLeft:"400px"}}>
                        <label htmlFor="vdate"><b>Date of visit</b></label><br/><br/>
                        <input type="text" name="vdate" value={vdate} onChange={e => onInputChange(e)} placeholder="mm-dd-yyyy"/><br/><br/><br/>

                        <label htmlFor="email"><b>Email</b></label><br/><br/>
                        <input type="text" name="email" value={email} onChange={e => onInputChange(e)}/><br/><br/><br/>

                        <label htmlFor="phone"><b>Contact</b></label><br/><br/>
                        <input type="text" name="phone" value={phone} onChange={e => onInputChange(e)}/><br/><br/><br/>
                    </div> 
                    <button type="button" className="subbtn" onClick={visitorupdate}>Submit</button>
                </form>
            </div>
    )
}
export default HomeVisit;
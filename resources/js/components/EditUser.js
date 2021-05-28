import React,{useEffect,useState,useCallback} from 'react'
import { useHistory } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form'
const EditUser = (props) => {
    const { handleSubmit, control, setValue} = useForm({mode: 'onBlur'});
    const [username,setUsername] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [notification,setNotification] = useState('')
    const [role,setRole] = useState('')
    const [status,setStatus] = useState('')
	const history = useHistory();
    const [row, setRow] = useState([])
    const {id} = props
    
    useEffect(  () => {
        (async ()=>{
           await fetch('https://ffapps.itvip.live/api/auth/edit/' + id)
       
            .then( response => {
                 if (!response.ok) { throw response }
                     return   response.json();  //we only get here if there is no error
              })
              .then( data => {
                  setRow(data.data)
                  setUsername(data.data.username)
                  setFirstname(data.data.firstname)
                  setLastname(data.data.lastname)
                  setEmail(data.data.email)
                  setPassword(data.data.password)
                  setNotification(data.data.notification)
                  setRole(data.data.role)
                  setStatus(data.data.status)
                  console.log(data.data);
                
              })
              .catch( err => {
               console.log(err);
               //console.log(data);
              })
        })()
      
       
    },[])
    const HandleSubmit = async (e)=>{
        e.preventDefault()
		//console.log(123);

                   await fetch('https://ffapps.itvip.live/api/auth/update/' + id, {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            username,firstname,lastname,email,password,notification,role,status
                        })
                    })
                    .then(response => {
                        if(!response.ok){ throw response}
                            return response.json()
                           
                    })
                    .then(data => {
                        history.push('/alluser')
                    })
                    .catch(err => {
                        console.log(err);
                    })

                    //await  router.push('/')
					

    }
    return (
      
        <div>
	
        <div className="page-header">
            <div className="row">
                <div className="col">
                    <h3 className="page-title">User</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">User</li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">User</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                        <div className="form-group row">
                                <label className="col-form-label col-md-2">Username (required)</label>
                                <div className="col-md-10">
                                    <input disabled type="text" className="form-control" defaultValue={row.username} onChange={e => setUsername(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-2">First Name</label>
                                <div className="col-md-10">
                              
                       <input type='text'
                       
                         defaultValue={row.firstname} 
                         className="form-control"
                          onChange={e => setFirstname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-2">Last Name</label>
                                <div className="col-md-10">
                                    <input type="text" defaultValue={row.lastname} className="form-control" onChange={e => setLastname(e.target.value)}/>
                                </div>
                            </div>
                          
                            <div className="form-group row">
                                <label className="col-form-label col-md-2">Email (required)</label>
                                <div className="col-md-10">
                                    <input type="text"  defaultValue={row.email} className="form-control" onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-2">Password</label>
                                <div className="col-md-10">
                                    <input type="password" defaultValue={row.password} className="form-control" onChange={e => setPassword(e.target.value)}/>
                                </div>
                            </div>
                        
                            <div className="form-group row">
                                <label className="col-form-label col-md-2">Waiting approval</label>
                                <div className="col-md-10">
                                    <div className="checkbox">

                                    <input type="checkbox" 
                                    id="status_1"
                                    className="check" 
                                    check={row.status == 1 ? 'checked': ''} 
                                    onChange={e => setStatus(e.target.checked) } />
                                    <label htmlFor="status_1" className="checktoggle">checkbox</label>
                                       
                                    </div>
                                    
                                
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-form-label col-md-2">Send User Notification</label>
                                <div className="col-md-10">
                                    <div className="checkbox">
                                    <input type="checkbox" id="notification_2" className="check" check={row.notification == 1 ? 'checked': ''} onChange={e => setNotification(e.target.checked) } />
                                     <label htmlFor="notification_2" className="checktoggle">checkbox</label>

                                    
                                    </div>
                                    
                                
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-form-label col-md-2">Role</label>
                                <div className="col-md-10">
                                    <select className="form-control" onChange={e => setRole(e.target.value)}>
                                        
                                        <option value="0" selected={row.role == 0 ? 'selected': ''}>-- Select --</option>
                                        <option value='1' selected={row.role == 1 ? 'selected': ''}>Admin</option>
                                        <option value='2' selected={row.role == 2 ? 'selected': ''}>Customer</option>
                                        <option value='3' selected={row.role == 3 ? 'selected': ''}>Agent</option>
                                      
                                    </select>
                                </div>
                            </div>

                            <div className="form-group mb-0 row">
                            
                                <div className="col-md-10">
                                    <div className="input-group">
                                        
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit">Add New User</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </form>
                    </div>
                </div>
            
            </div>
        </div>
    
    </div>			
    )
}

export default EditUser

import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

const AddUser = () => {
    const [username,setUsername] = useState('')
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [notification,setNotification] = useState('')
    const [role,setRole] = useState('')
	const history = useHistory();

     const HandleSubmit = async (e)=>{
        e.preventDefault()
		//console.log(123);

                   await fetch('https://ffapps.itvip.live/api/auth/register', {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                            username,firstname,lastname,email,password,notification,role
                        })
                    })

                    //await  router.push('/')
					history.push('/alluser')

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
												<input type="text" className="form-control" onChange={e => setUsername(e.target.value)}/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">First Name</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setFirstname(e.target.value)}/>
											</div>
										</div>
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Last Name</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setLastname(e.target.value)}/>
											</div>
										</div>
                                      
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Email (required)</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setEmail(e.target.value)}/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Password</label>
											<div className="col-md-10">
												<input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
											</div>
										</div>
									
										<div className="form-group row">
											<label className="col-form-label col-md-2">Send User Notification</label>
											<div className="col-md-10">
												<div className="checkbox">
													<label style={{cursor: 'pointer'}}>
														<input type="checkbox" name="checkbox"  onChange={e => setNotification(e.target.checked) }/> Send the new user an email about their account.
													</label>
												</div>
												
											
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Role</label>
											<div className="col-md-10">
												<select className="form-control" onChange={e => setRole(e.target.value)}>
													<option>-- Select --</option>
													<option>Admin</option>
													<option>Option 2</option>
													<option>Option 3</option>
													<option>Option 4</option>
													<option>Option 5</option>
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

export default AddUser

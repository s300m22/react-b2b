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
	const [dataError, setError] =useState([])

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
					.then(response => {
                        if(!response.ok){ throw response}
                            return response.json()
                           
                    })
                    .then(data => {
                        history.push('/alluser')
                    })
                    .catch(error => {
						if (typeof error.json === "function") {
							error.json().then(jsonError => {
								console.log("Json error from API");
								const arr = JSON.parse(jsonError)
								setError([arr])
							

							}).catch(genericError => {
								console.log("Generic error from API");
								console.log(error.statusText);
							});
						} else {
							console.log("Fetch error");
							console.log(error);
						}
					});

				
				

    }
	console.log(dataError);
    const resultError = dataError.map(err => {
		return(
			
			//console.log(err)
			
			
			<div role="alert" aria-live="polite" aria-atomic="true" class="alert alert-dismissible alert-danger">
						<button type="button" aria-label="Close" class="close">×</button>
     
    			<div>{err.username}</div>
				<div>{err.firstname}</div>
				<div>{err.lastname}</div>
				<div>{err.email}</div>
				<div>{err.password}</div>
			</div>
			
		)
	})
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
									<form onSubmit={HandleSubmit} enctype="multipart/form-data">
									{resultError}

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
                                    <input type="checkbox" id="notification_2" className="check"  onChange={e => setNotification(e.target.checked) } />
                                     <label htmlFor="notification_2" className="checktoggle">checkbox</label>

                                    
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

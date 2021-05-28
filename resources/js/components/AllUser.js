import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function AllUser() {
    const [users, SetUsers] = useState([])
    const [msg, setMsg] = useState('')
    const [alert, setAlert] = useState('none')
    const history = useHistory();

useEffect(  ()=>{
  ( async () =>{
    const res = await fetch('https://ffapps.itvip.live/api/auth/me')
    // .then(res => res.json())
    // .then(data => SetUsers(data))
     const data = await res.json();
     SetUsers(data)
  })()

  
},[])

  async function Delete(id){
  if(window.confirm('are you sure ?')){
    await fetch('https://ffapps.itvip.live/api/auth/delete/'+ id)
    .then(response =>{
      if(!response.ok){ throw error}
      return response.json()
    })
    .then(data => {
      if(data.message == 'true'){ 
        console.log(44);
        setMsg('Deleted Successfull !') 
        setAlert('block') 
        history.push('/addnew')
        
      }
      
    })
    .catch(err => {
      console.log(err);
    })

   
 
   }
  }

const result = users.map(post => {
  let role
  if(post.role == 0){
    role='Admin'
  }else if(post.role == 1){
    role='Customer'
  }else if(post.role == 3){
    role='Sale Agent'
  }
    return(
     
            <tr key={post.id}>
               <td>{post.username}</td>
               <td>{post.firstname +' '+ post.lastname}</td>
               <td>{post.email}</td>
               <td>{role}</td>
               <td>{post.status == 0 ? 'Waiting approval' : 'No'}</td>
                                    
                <td>
                    <div className="status-toggle">
                      <input type="checkbox" id={"status_" +`${post.id}`} className="check" />
                      <label htmlFor={"status_" +`${post.id}`} className="checktoggle">checkbox</label>
                    </div>
                </td>
                                     
                <td>
                  
              <button type="button" className="btn btn-labeled btn-danger" onClick={() => Delete(post.id)}>
                  <span className="btn-label"></span>Trash</button>
                  <span style={{marginRight:'5px'}}></span>
  
                
                    <Link to={"/edit/"+ post.id} className="btn btn-labeled btn-success">
                       <span className="btn-label"></span>Edit
                    </Link>

                    {/* <Link to="/edit/1" className="btn btn-labeled btn-success"> <span className="btn-label"></span>Edit</Link> */}

                </td>
            </tr>
    )
  })
  return (
          <div>
              
				
            <div role="alert" aria-live="polite" aria-atomic="true" class="alert alert-dismissible alert-danger" style={{display:alert}}>
						  <button type="button" aria-label="Close" className="close">×</button>
              {msg}
            </div>
                  <div className="page-header">
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className="page-title">Users</h3>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                          <li className="breadcrumb-item active">Users</li>
                        </ul>
                      </div>
                    </div>
                  </div>
				
					<div className="row">
						<div className="col-md-12">
						
						
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<table className="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Username</th>
													<th>Full Name</th>
													<th>Email</th>
													<th>Role</th>
                          <th>Pending Approval</th>
                          <th>Active</th>
                          <th>Action</th>
												
													
												</tr>
											</thead>
											<tbody>
												
											{ result}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						
							
						</div>
					</div>
				</div>			
			
  )
}

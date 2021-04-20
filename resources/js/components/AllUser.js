import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
export default function AllUser() {
    const [users, SetUsers] = useState([])
    
useEffect(  ()=>{
  
    callApi()

},[])
async function callApi(){
    const res = await fetch('https://ffapps.itvip.live/api/auth/me')
    // .then(res => res.json())
    // .then(data => SetUsers(data))
     const data = await res.json();
    // const [item] = data.results;
    // console.log(item);
     SetUsers(data)
}
  async function Delete(id){
  if(window.confirm('are you sure ?')){
    await fetch('https://ffapps.itvip.live/api/auth/delete/'+ id);
    callApi(data)
 
   }
  //await router.push('/components/alluser')
  }

const result = users.map(post => {
    return(
            <tr key={post.id}>
               <td>{post.username}</td>
               <td>{post.firstname +' '+ post.lastname}</td>
               <td>{post.email}</td>
               <td>{post.role}</td>
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
  
                
                    <Link to={"/edit/"+`${post.id}`} className="btn btn-labeled btn-success"> <span className="btn-label"></span>Edit</Link>
                    {/* <Link to="/edit/1" className="btn btn-labeled btn-success"> <span className="btn-label"></span>Edit</Link> */}

                 
                
                 
                 
                    
                </td>
            </tr>
    )
  })
  return (
          <div>
              
				
					
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

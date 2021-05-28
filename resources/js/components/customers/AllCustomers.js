import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
const AllCustomers = () => {

    const [row, setRow] = useState([])
    const [msg, setMsg] = useState()

    useEffect(  ()=>{
            
        ( async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/customer/all-customeres')
    
        .then(response => {
            if(!response.ok){ throw response}
                return response.json()
                
        })
    
        .then(data => {
           setRow(data)
           console.log(data);
           
        })
        .catch(error => {
        
                console.log("Fetch error");
                console.log(error);
        
        });
        })()
    
        
    },[])
//================================================================================


    async function Delete(id){
       
        if(window.confirm('are you sure ?')){
          await fetch('http://127.0.0.1:8000/api/customer/delete-customer/'+ id)
          .then(response =>{
            if(!response.ok){ throw error}
            return response.json()
          })
          .then(data => {
           
              console.log(data);
             
              setMsg( <div class="alert alert-success" role="alert">
              {data.message}
            </div>)

            const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setMsg(false)
            }, 3000)
            //  history.push('/addnew')
            return () => {
                clearTimeout(timeId)
              }
           
            
          })
          .catch(err => {
            console.log(err);
          })
      
         
       
         }
        }
const result = row.map( (item,index) => {
    let status
    if(item.status == 0){
        status='Deactive'
    }else if(item.status == 1){
        status='Active'
    }
    return(
      <tr key={index+1 }>
          <td>{index+1}</td>
          <td>{item.name}</td>
         
         
          <td>{JSON.parse(item.input_dynamic_contact)[0].phone}</td>
          <td>{JSON.parse(item.input_dynamic_contact)[0].email}</td>
          <td>{JSON.parse(item.input_dynamic_contact)[0].website}</td>
          <td>{item.on_credit_hold}</td>
        
       
          <td>
              {JSON.parse(item.input_dynamic_address)[0]['line1'] + ' '}
              {JSON.parse(item.input_dynamic_address)[0]['line2'] + ' '}
              {JSON.parse(item.input_dynamic_address)[0]['postcode'] + ' '}
             
          </td>

          <td>{status}</td>
         
         
          <td> 
          <button type="button" className="btn btn-labeled btn-danger" onClick={() => Delete(item.id)}>
              <span className="btn-label"></span>Trash</button>
              <span style={{marginRight:'5px'}}></span>
              
              <Link to={"/customer/edit-customer/" + item.id} className="btn btn-labeled btn-success">
                 <span className="btn-label"></span> Edit
              </Link>
          </td>
       
   </tr>
    )
})
    return (

        <div>
             
             <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">All Customers</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                      <li className="breadcrumb-item active"> All Customers</li>
                    </ul>
                  </div>
                </div>
              </div>
            
                <div className="row">
                    <div className="col-md-12">
                    
                   {msg}
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                               
                                                <th>Phone</th>
                                                <th>email</th>
                                                <th>Website</th>
                                                <th>On Credit Hold</th>
                                            
                                                <th>Address</th>
                                                <th>Status</th>
                                                <th>Action</th> 
                                               
                                                
                                               
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                        {result}
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

export default AllCustomers

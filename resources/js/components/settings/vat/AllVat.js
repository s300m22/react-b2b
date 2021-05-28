import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
const AllVat = () => {

    const [allTax, setAllTax] = useState([])
    const history = useHistory();
    const [alert, setAlert] = useState('none')
            useEffect(  ()=>{
            
                ( async () =>{
                const response = await fetch('http://127.0.0.1:8000/api/vat/allvat')
            
                .then(response => {
                    if(!response.ok){ throw response}
                        return response.json()
                        
                })
            
                .then(data => {
                    setAllTax(data)
                    
                    console.log(data);
                   
                })
                .catch(error => {
                
                        console.log("Fetch error");
                        console.log(error);
                
                });
                })()
            
                
            },[])

     // console.log(allTax);

      const result = allTax.map( (tax,index) => {
          
          return(
            <tr key={index+1 }>
                <td>{tax.taxclass}</td>
                <td> 
                    <Link to={"/vat/add-class-tax/"+ `${index + 1}` + '/' + `${tax.taxclass}`} className="btn btn-labeled btn-success">
                       <span className="btn-label"></span> Insert Rows Class
                    </Link>
                    <span style={{marginRight:'5px'}}></span>
                    <Link to={"/vat/all-tax-class/"+ `${index + 1}` + '/' + `${tax.taxclass}`} className="btn btn-labeled btn-success">
                       <span className="btn-label"></span> View All Rows Class
                    </Link>

                </td>
             
         </tr>
          )
      })
    return (
        <div>
              
				
        <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-dismissible alert-danger" style={{display:alert}}>
                      <button type="button" aria-label="Close" className="close">×</button>
          {/* {msg} */}
        </div>
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-4">
                    <h3 className="page-title">Tax classes</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                      <li className="breadcrumb-item active"> Tax classes</li>
                    </ul>
                  </div>
                </div>
              </div>
            
                <div className="row">
                    <div className="col-md-4">
                    
                    
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                              
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

export default AllVat

import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const AllTaxClass = (props) => {

    const {data} = props
    const [allTaxClass, setAllTaxClass] = useState([])
    const history = useHistory();
    const [alert, setAlert] = useState('none')

    useEffect(  ()=>{
            
        ( async () =>{
        const response = await fetch('http://127.0.0.1:8000/api/vat/all-tax-class/' + data.id)
    
        .then(response => {
            if(!response.ok){ throw response}
                return response.json()
                
        })
    
        .then(data => {
            setAllTaxClass(data)
            
            console.log(data);
           
        })
        .catch(error => {
        
                console.log("Fetch error");
                console.log(error);
        
        });
        })()
    
        
    },[])

    const result = allTaxClass.map( (taxClass,index) => {
          
        return(
          <tr key={index+1 }>
              <td>{taxClass.country_code}</td>
              <td>{taxClass.state}</td>
              <td>{taxClass.postcode}</td>
              <td>{taxClass.city}</td>
              <td>{taxClass.rate}</td>
              <td>{taxClass.shipping}</td>
              <td>{taxClass.compound}</td>
             
              <td> 
              <button type="button" className="btn btn-labeled btn-danger" onClick={() => Delete(post.id)}>
                  <span className="btn-label"></span>Trash</button>
                  <span style={{marginRight:'5px'}}></span>
                  
                  <Link to={"/vat/add-class-tax/"+ `${index + 1}` + '/' + `${taxClass.taxclass}`} className="btn btn-labeled btn-success">
                     <span className="btn-label"></span> Edit
                  </Link>
              </td>
           
       </tr>
        )
    })
    return (
        <div>
              
				
        <div role="alert" aria-live="polite" aria-atomic="true" className="alert alert-dismissible alert-danger" style={{display:alert}}>
                      <button type="button" aria-label="Close" className="close">??</button>
          {/* {msg} */}
        </div>
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="page-title">Tax classes</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                      <li className="breadcrumb-item active"> Tax classes</li>
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
                                                <th>Country code</th>
                                                <th>State code</th>
                                                <th>Postcode / ZIP</th>
                                                <th>City </th>
                                                <th>Rate %</th>
                                                <th>Tax name</th>
                                                <th>Shipping</th>
                                              
                                                <th>Compound</th>
                                               
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

export default AllTaxClass

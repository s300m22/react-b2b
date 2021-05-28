import React, {useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Allproduct() {
    const [products, SetProducts] = useState([])
    const [msg, setMsg] = useState('')
    const [alert, setAlert] = useState('none')
    const history = useHistory();
useEffect(  ()=>{
    
  ( async () =>{
    const response = await fetch('http://127.0.0.1:8000/api/product/all')

    .then(response => {
        if(!response.ok){ throw response}
            return response.json()
           
    })

    .then(data => {
        SetProducts(data.data)
        
        console.log(data.data);
        //console.log(data.data);
    })
    .catch(error => {
    
            console.log("Fetch error");
            console.log(error);
    
    });
  })()

  
},[])

// useLayoutEffect(() => {
   
//     return () => {
//         console.log(4444);
//     }
//   }, []);



  async function Delete(id){
  if(window.confirm('are you sure ?')){
    await fetch('http://127.0.0.1:8000/api/product/delete/'+ id)
    .then(response => {
      if(!response.ok){ throw error}
      return response.json()
    })
    .then(data => {
        //SetProducts(data)
        
       if(data.message == 'true'){ 
         console.log(id);

        setMsg('Deleted Successfull !') 
        setAlert('block') 
        history.push('/product/allproduct')
      
 
        
        
  }
      
    })
    .catch(err => {
      console.log(err);
    })

   
 
   }
  }

const result = products.map(product => {
let status
if(product.status == 1){
    status = 'Available'
}else if(product.status == 2){
    status = 'Limited Stock'
}else if(product.status == 3){
    status = 'Pre-order'
}else if(product.status == 4){
    status = 'Not available'
}else if(product.status == 5){
    status = 'Discontinued'
}else if(product.status == 6){
    status = 'Sold Out'
}
let classVat
if(product.vat_class == 1){
    classVat = 'Normal Product VAT'
}else if(product.vat_class == 2){
    classVat = 'VAT not applied'
}

    return(
     
            <tr key={product.id}>
               <td>{product.title}</td>
               <td>{product.sku}</td>
               <td>{product.basic_price}</td>
               <td>{product.layer}</td>
               <td>{product.pallet}</td>
              
               <td>{classVat}</td>
                                    
                <td>
                    <div className="status-toggle"  >
                      <input type="checkbox" id={"status_" +`${product.id}`} className="check" defaultChecked={product.active == 1 ? 'checked': ''} />
                      <label htmlFor={"status_" +`${product.id}`} className="checktoggle">checkbox</label>
                    </div>
                </td>
                <td>{status}</td>             
                <td>
                  
              
              <button type="button" className="btn btn-labeled btn-danger" onClick={() => Delete(product.id)}>
                  <span className="btn-label"></span>Trash</button>
                  <span style={{marginRight:'5px'}}></span>
  
                
                    <Link to={"/product/edit/"+ product.id} className="btn btn-labeled btn-success">
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
                        <h3 className="page-title">Product</h3>
                        <ul className="breadcrumb">
                          <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                          <li className="breadcrumb-item active">Product</li>
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
													<th>Title</th>
													<th>Sku</th>
													<th>Basic Brice</th>
													<th>Layer</th>
                          <th>Pallet</th>
                          <th>Vat Class</th>
                           <th>Active</th>
                           <th>Status</th>
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

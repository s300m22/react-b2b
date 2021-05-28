import React from 'react'

const Index = () => {
    
       const HandleSubmit = async (e)=>{
        e.preventDefault()
	
                   await axios.post('http://127.0.0.1:8000/api/customer/add-customer', {
                        // method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                            
                        },
                        // body: JSON.stringify({

                        //     name ,                 
                        //     status,               
                        //     currency,             
                        //     payment_term ,        
                        //     account_receivable ,  
                        //     sale_price_tier ,      
                        //     sale_account,         
                        //     tax_rule,              
                        //     sales_representative  ,
                        //     default_carrier,      
                        //     default_location ,    
                        //     tax_number,           
                        //     category ,            
                        //     discount,              
                        //     credit_limit,         
                        //     on_credit_hold ,       
                        //     attribute_set,        
                        //     input_dynamic_address,
                        //     input_dynamic_contact, 
                        //     tags ,                
                        //     comments  ,        
                           
                        // })
                    })
					.then(response => {
                        if(!response.ok){ throw response}
                            return response.json()
                           
                    })

                    .then(data => {
                      //  history.push('/product/allproduct')
                        console.log(data);
                        console.log("Fetch error");
                       
                        if(data)
                        setMessage( <div class="alert alert-danger" role="alert">
                        {data}
                      </div>)
          
                      const timeId = setTimeout(() => {
                      // After 3 seconds set the show value to false
                      setMessage(false)
                      }, 3000)
                     
                      return () => {
                          clearTimeout(timeId)
                        }
                        
                    })
                    .catch(error => {
					
							console.log("Fetch error");
							console.log(error)
                          
					
					});

                   

    }
    
    return (
        <div>
             <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Add Option</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Add Option</li>
                            </ul>
                        </div>
                    </div>
			    </div>

                <div className="row">
						<div className="col-md-12">
							<div className="card">

								
								<div className="card-body">
                                    <form onClick={HandleSubmit}>
                                        <input type='submit' value='save'/>
                                    </form>

                                </div>
                            </div>
                        </div>
                </div>

        </div>
    )
}

export default Index

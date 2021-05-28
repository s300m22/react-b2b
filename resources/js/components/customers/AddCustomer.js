import React, {useState, useEffect,useCallback} from 'react'
import { useHistory } from "react-router-dom";

const AddCustomer = () => {
const [name, setName] = useState()
const [status, setStatus] = useState()
const [currency, setCurrency] = useState()
const [payment_term, setPaymentTerm] = useState()
const [account_receivable, setAccountReceivable] = useState()
const [sale_price_tier, setSalePriceTier] = useState()
const [sale_account, setSaleAccount] = useState()
const [tax_rule, setTaxRule] = useState()
const [sales_representative, setSalesRepresentative] = useState()

const [default_carrier, setDefaultCarrier] = useState()
const [default_location, setDefaultLocation] = useState()
const [tax_number, setTaxNumber] = useState()
const [category, setCategory] = useState()
const [discount, setDiscount] = useState()
const [credit_limit, setCreditLimit] = useState()
const [on_credit_hold, setOnCreditHold] = useState()
const [attribute_set, setAttributeSet] = useState()
const [tags, setTags] = useState()
const [comments, setComments] = useState()
const [message, setMessage] = useState()

    const [input_dynamic_address,setinputDynamic] = useState([
        {
            line1:'',
            line2:'',
            city:'',
            suburb:'',
            state:'',
            postcode:'',
            country:'',
            type:'',
            default_for_type:''
           
        },
     
       ])

    const [input_dynamic_contact,set_input_dynamic_contact] = useState([
        {
            name:'',
            phone:'',
            mobile:'',
            job_title:'',
            fax:'',
            email:'',
            website:'',
            comment:'',
            default:'',
            inc_email:''
           
        },
        
       ])
       
    const HandleSubmit = async (e)=>{
        e.preventDefault()
	
                   await fetch('http://127.0.0.1:8000/api/customer/add-customer', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                            
                        },
                        body: JSON.stringify({

                            name ,                 
                            status,               
                            currency,             
                            payment_term ,        
                            account_receivable ,  
                            sale_price_tier ,      
                            sale_account,         
                            tax_rule,              
                            sales_representative  ,
                            default_carrier,      
                            default_location ,    
                            tax_number,           
                            category ,            
                            discount,              
                            credit_limit,         
                            on_credit_hold ,       
                            attribute_set,        
                            input_dynamic_address,
                            input_dynamic_contact, 
                            tags ,                
                            comments  ,        
                           
                        })
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

    const handelChangeInput = (e, index) => {
        // console.log(e.target.name);
        const values = [...input_dynamic_address]
        values[index][e.target.name] = e.target.value
        setinputDynamic(values)
        console.log(values);
    }

    const handelAddInput = () => {
      
        setinputDynamic([...input_dynamic_address, 
            {
                line1:'',
                line2:'',
                city:'',
                suburb:'',
                state:'',
                country:'',
                type:'',
                default_for_type:'',
               
            },
        ])
      
    }

    const handelRemoveInput = (index) => {
        const values = [...input_dynamic_address]
        values.splice(index,1)
         setinputDynamic(values)
       
     }
  //===================================================

  const handelChangeInputContact = (e, index) => {
    // console.log(e.target.name);
    const values = [...input_dynamic_contact]
    values[index][e.target.name] = e.target.value
    set_input_dynamic_contact(values)
    console.log(values);
}

const handelAddInputAddress = () => {
      
    set_input_dynamic_contact([...input_dynamic_contact, 
        {
            name:'',
            phone:'',
            mobile:'',
            job_title:'',
            fax:'',
            email:'',
            website:'',
            comment:'',
            default:'',
            inc_email:'',
           
        },
    ])
  
}

const handelRemoveInputAddress = (index) => {
    const values = [...input_dynamic_contact]
    values.splice(index,1)
    set_input_dynamic_contact(values)
   
 }
 console.log(message)
    return (
            <div>

                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">NEW CUSTOMER</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">NEW CUSTOMER</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                
                                <div className="card-body">

                                <form onSubmit={HandleSubmit}>
                                    {message}
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Addresses</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contacts</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            
                                                <div className="row">

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Name*</label>
                                                            <input type="text" className="form-control"  onChange={e => setName(e.target.value)}/>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Status*</label>
                                                            <select className="form-select" onChange={e => setStatus(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Currency*</label>
                                                            <select className="form-select" onChange={e => setCurrency(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Payment Term*</label>
                                                            <select className="form-select" onChange={e => setPaymentTerm(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Account Receivable</label>
                                                            <select className="form-select" onChange={e => setAccountReceivable(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Sale Price Tier*</label>
                                                            <select className="form-select" onChange={e => setSalePriceTier(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                    
                                                        
                                                    </div>

                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Sale Account*</label>
                                                            <select className="form-select" onChange={e => setSaleAccount(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Tax Rule*</label>
                                                            <select className="form-select" onChange={e => setTaxRule(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>
                                                        
                                                        <div className="form-group">
                                                            <label>Sales Representative*</label>
                                                            <select className="form-select" onChange={e => setSalesRepresentative(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Default Carrier*</label>
                                                            <select className="form-select" onChange={e => setDefaultCarrier(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Default Location*</label>
                                                            <select className="form-select" onChange={e => setDefaultLocation(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group ">
                                                            <label>Tax Number*</label>
                                                            <input type="text" name="sku" id="sku" className="form-control" onChange={e => setTaxNumber(e.target.value)}/>
                                                        </div>
                                                        
                                                        
                                                     
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label>Category *</label>
                                                            <select className="form-select" onChange={e => setCategory(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Discount</label>
                                                            <input type="number" className="form-control" onChange={e => setDiscount(e.target.value)} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Credit Limit</label>
                                                            <input type="number" className="form-control" onChange={e => setCreditLimit(e.target.value)} />
                                                        </div>
                                                        <div className="form-group">
                                                        
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="prices_include_tax" value="true" id="flexRadioDefault2"  onChange={e => setOnCreditHold(e.target.value)}/>
                                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                On Credit Hold
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Attribute Set</label>
                                                            <select className="form-select" onChange={e => setAttributeSet(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Tags</label>
                                                            <input type="text" className="form-control" onChange={e => setTags(e.target.value)}/>
                                                        </div>
                                                      
                                                    </div>

                                                    <div className="form-group">
                                                            <label>Comments*</label>
                                                            <textarea rows="4" cols="50" className="form-control" onChange={e => setComments(e.target.value)}>
                                                            At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
                                                            </textarea>
                                                    </div>
                                                   
                                                </div>

                                            
                                            
                                                <div className="text-right">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>

                                            </div>

                                            <div className="tab-pane fade show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                           
                                                <div className="table-responsive">
                                                    <table className="datatable table table-hover table-center mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Line 1</th>
                                                                <th>Line 2</th>
                                                                <th>City / Suburb</th>
                                                                <th>State / Province</th>
                                                                <th>ZIP / Postcode</th>
                                                                <th>Country</th>
                                                                <th>Type</th>
                                                                <th>Default for Type</th>
                                                                <th>Action</th>
                                                             
                                                                
                                                            
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                {
                                                    input_dynamic_address.map( (input, index) => {
                                                        return(

                                                        
                                                
                                                        <tr key={index} >

                                                           
                                                            <td> 
                                                                <div className="form-group">
                                                                  
                                                                    <input type="text" className="form-control" name='line1' onChange={(e) => handelChangeInput(e,index)}/>
                                                                </div>

                                                            </td>
                                                            <td> 
                                                                <div className="form-group">
                                                                    
                                                                    <input type="text" name='line2' onChange={(e) => handelChangeInput(e,index)} className="form-control" />
                                                                </div>

                                                            </td>

                                                            <td> 
                                                                <div className="form-group">
                                                                    
                                                                    <input type="text" name='city' onChange={(e) => handelChangeInput(e,index)} className="form-control" />
                                                                </div>

                                                            </td>

                                                            <td> 
                                                                <div className="form-group">
                                                                    
                                                                    <input type="text" name='suburb' className="form-control" onChange={(e) => handelChangeInput(e,index)}/>
                                                                </div>

                                                            </td>
                                                            <td> 
                                                                <div className="form-group">
                                                                   
                                                                    <input type="text" name='state' className="form-control" onChange={(e) => handelChangeInput(e,index)}/>
                                                                </div>

                                                            </td>
                                                            <td> 
                                                                <div className="form-group">
                                                                  
                                                                    <input type="text" name='postcode' className="form-control" onChange={(e) => handelChangeInput(e,index)}/>
                                                                </div>

                                                            </td>
                                                           
                                                            <td> 
                                                               
                                                                <div className="form-group ">
                                                                
                                                                        <select className="form-select" name='country' onChange={e => handelChangeInput(e,index)}>
                                                                            <option>Select</option>
                                                                            <option value="1">A+Select</option>
                                                                            <option value="2">O+SelectSelect</option>
                                                                            <option value="3">B+SelectSelect</option>
                                                                            <option value="4">AB+SelectSelect</option>
                                                                        </select>
                                                                
                                                                </div>

                                                            </td>

                                                            <td> 
                                                                <div className="form-group">
                                                                 
                                                                    <input type="text" name='type' className="form-control" onChange={(e) => handelChangeInput(e,index)}/>
                                                                </div>

                                                            </td>

                                                            <td> 
                                                                <div class="form-group">
                                                                    
                                                                    <input className="form-check-input" type="checkbox" name='default_for_type' value="1" id="default" onChange={(e) => handelChangeInput(e,index)}/>
                                                                    <label className="form-check-label" for="default">
                                                                        
                                                                    </label>
                                                                </div>

                                                            </td>

                                                            <td> 

                                                                <div  className='input-group mb-3'>
                                                                    <div class="input-group-prepend">
                                                                        <button className="btn btn-success" onClick={() => handelAddInput()}>+</button>
                                                                        <button className="btn btn-danger" onClick={() => handelRemoveInput(index)}>-</button>
                                                                    </div>
                                                                </div>

                                                            </td>

  
                                                        
                                                        </tr>
                                                    )   
                                                    })
                                                }  
                                                                                                
                                                        </tbody>
                                                    </table>
                                                </div>
                                                
                                            </div>


                                            <div className="tab-pane fade show" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                           
                                           <div className="table-responsive">
                                               <table className="datatable table table-hover table-center mb-0">
                                                   <thead>
                                                       <tr>
                                                           <th>Name</th>
                                                           <th>Phone</th>
                                                           <th>Mobile Phone</th>
                                                           <th>Job Title</th>
                                                           <th>Fax</th>
                                                           <th>Email</th>
                                                           <th>Website</th>
                                                           <th>Comment</th>
                                                           <th>Default</th>
                                                           <th>Include In Email</th>
                                                        
                                                           
                                                       
                                                       </tr>
                                                   </thead>
                                                   <tbody>
                                           {
                                               input_dynamic_contact.map( (input, index) => {
                                                   return(

                                                   
                                           
                                                   <tr key={index}>

                                                      
                                                       <td> 
                                                           <div className="form-group">
                                                             
                                                               <input type="text" className="form-control" name='name' onChange={(e) => handelChangeInputContact(e,index)}/>
                                                           </div>

                                                       </td>
                                                       <td> 
                                                           <div className="form-group">
                                                               
                                                               <input type="text" name='phone' onChange={(e) => handelChangeInputContact(e,index)} className="form-control" />
                                                           </div>

                                                       </td>

                                                       <td> 
                                                           <div className="form-group">
                                                               
                                                               <input type="text" name='mobile' onChange={(e) => handelChangeInputContact(e,index)} className="form-control" />
                                                           </div>

                                                       </td>

                                                       <td> 
                                                           <div className="form-group">
                                                               
                                                               <input type="text" name='job_title' className="form-control" onChange={(e) => handelChangeInputContact(e,index)}/>
                                                           </div>

                                                       </td>
                                                       <td> 
                                                           <div className="form-group">
                                                              
                                                               <input type="text" name='fax' className="form-control" onChange={(e) => handelChangeInputContact(e,index)}/>
                                                           </div>

                                                       </td>
                                                       <td> 
                                                           <div className="form-group">
                                                             
                                                               <input type="text" name='email' className="form-control" onChange={(e) => handelChangeInputContact(e,index)}/>
                                                           </div>

                                                       </td>
                                                      
                                                       <td> 
                                                           <div className="form-group">
                                                              
                                                                <input type="text" name='website' className="form-control" onChange={(e) => handelChangeInputContact(e,index)}/>
                                                           </div>

                                                       </td>

                                                       <td> 
                                                           <div className="form-group">
                                                            
                                                               <input type="text" name='comment' className="form-control" onChange={(e) => handelChangeInputContact(e,index)}/>
                                                           </div>

                                                       </td>

                                                       <td> 
                                                          
                                                            <div class="form-check">
                                                                
                                                                <input className="form-check-input" type="checkbox" value="1" id="default" name='default' onChange={(e) => handelChangeInputContact(e,index)}/>
                                                                <label className="form-check-label" for="default">
                                                                    
                                                                </label>
                                                            </div>
                                                         

                                                       </td>

                                                       <td> 
                                                          
                                                            <div class="form-check">
                                                                
                                                                <input className="form-check-input" type="checkbox" value="1" name='inc_email' id="inc_email" onChange={(e) => handelChangeInputContact(e,index)}/>
                                                                <label className="form-check-label" for="inc_email">
                                                                    
                                                                </label>
                                                            </div>
                                                         

                                                       </td>


                                                       <td> 

                                                       <div  className='input-group mb-3'>
                                                               <div className="input-group-prepend">
                                                                   <button className="btn btn-success" onClick={() => handelAddInputAddress()}>+</button>
                                                                   <button className="btn btn-danger" onClick={() => handelRemoveInputAddress(index)}>-</button>
                                                               </div>
                                                        </div>
                                                
                                                       </td>


                                                   
                                                   </tr>
                                               )   
                                               })
                                           }  
                                                                                           
                                                   </tbody>
                                               </table>
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

export default AddCustomer

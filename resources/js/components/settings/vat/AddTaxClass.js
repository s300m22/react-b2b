import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";

const AddTaxClass = (props) => {
console.log(props.data);
const {data} = props

const [tax_class_id, set_tax_class_id] = useState()
const [country_code, setCountryCode] = useState()
const [state, setState] = useState()
const [postcode, setPostcode] = useState()
const [city, setCity] = useState()
const [rate, setRate] = useState()
const [tax_name, setTaxName] = useState()
const [shipping, setShipping] = useState()
const [compound, setCompound] = useState()
const history = useHistory();

    useEffect(  ()=>{
    
        set_tax_class_id(data.id);
    },[])

    const HandleSubmit = async (e)=>{
        e.preventDefault()
		//console.log(123);
        
                   await fetch('http://127.0.0.1:8000/api/vat/add-tax-rate', {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({

                            tax_class_id,country_code,state,postcode,city,rate,tax_name,shipping,compound
                        })
                    })
					.then(response => {
                        if(!response.ok){ throw response}
                            return response.json()
                           
                    })
                    .then(data => {

                        history.push('/vat/allvat')
                    })
                    .catch(error => {
						
							console.log("Fetch error");
							console.log(error);
						
					});

                
    }

    return (
        <div>
	
					<div className="page-header">
						<div className="row">
							<div className="col">
								<h3 className="page-title">Tax Rates</h3>
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
									<h4 className="card-title">"{data.title}" tax rates </h4>
								</div>
								<div className="card-body">
									<form onSubmit={HandleSubmit}>
									{/* {resultError} */}

                                       


                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Country code (required)</label>
											<div className="col-md-3">
												<input type="text" className="form-control" onChange={e => setCountryCode(e.target.value)}/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">State code</label>
											<div className="col-md-3">
												<input type="text" className="form-control" onChange={e => setState(e.target.value)}/>
											</div>
										</div>
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Postcode / ZIP</label>
											<div className="col-md-3">
												<input type="text" className="form-control" onChange={e => setPostcode(e.target.value)}/>
											</div>
										</div>
                                      
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">City  (required)</label>
											<div className="col-md-3">
												<input type="text" className="form-control" onChange={e => setCity(e.target.value)}/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Rate %</label>
											<div className="col-md-3">
												<input type="password" className="form-control" onChange={e => setRate(e.target.value)}/>
											</div>
										</div>
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Tax name</label>
											<div className="col-md-3">
												<input type="password" className="form-control" onChange={e => setTaxName(e.target.value)}/>
											</div>
										</div>
                                       
                                            
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Shipping</label>
                                            <div className="col-md-3">
                                                <div className="checkbox">
                                                <input type="checkbox" id="shipping" className="check"  onChange={e => setShipping(e.target.checked) } />
                                                <label htmlFor="shipping" className="checktoggle">checkbox</label>

                                                
                                                </div>
                                                
                                            
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Compound </label>
                                            <div className="col-md-3">
                                                <div className="checkbox">
                                                <input type="checkbox" id="compound" className="check"  onChange={e => setCompound(e.target.checked) } />
                                                <label htmlFor="compound" className="checktoggle">checkbox</label>

                                                
                                                </div>
                                                
                                            
                                            </div>
                                        </div>


										<div className="form-group mb-0 row">
										
											<div className="col-md-3">
												<div className="input-group">
													
													<div className="input-group-append">
														<button className="btn btn-primary" type="submit">Save</button>
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

export default AddTaxClass

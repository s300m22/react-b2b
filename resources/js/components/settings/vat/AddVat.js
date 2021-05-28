import React, {useState} from 'react'

const AddVat = () => {

     const [inputDynamic,setinputDynamic] = useState([

         {tax_classes:''},

        ])
    //==============================================================
    const [prices_include_tax,set_prices_include_tax] = useState()
    const [tax_based_on,set_tax_based_on] = useState()
    const [shipping_tax_class,set_shipping_tax_class] = useState()
    const [tax_round_at_subtotal,set_tax_round_at_subtotal] = useState()
    const [tax_display_shop,set_tax_display_shop] = useState()
    const [tax_display_cart,set_tax_display_cart] = useState()
    const [tax_total_display,set_tax_total_display] = useState()
        

     const HandleSubmit = async (e)=>{
        e.preventDefault()
		
                   await fetch('http://127.0.0.1:8000/api/vat/update', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                            
                        },
                        body: JSON.stringify({

                            prices_include_tax,
                            tax_based_on,
                            shipping_tax_class,
                            tax_round_at_subtotal,
                            tax_display_shop,
                            tax_display_cart,
                            tax_total_display,
                            inputDynamic
                        })
                    })
					.then(response => {
                        if(!response.ok){ throw response}
                            return response.json()
                           
                    })
                    .then(data => {
                        history.push('/product/allproduct')
                        console.log(data);
                    })
                    .catch(error => {
					
							console.log("Fetch error");
							console.log(error);
					
					});

    }

    const handelChangeInput = (e, index) => {
        // console.log(e.target.name);
        const values = [...inputDynamic]
        values[index][e.target.name] = e.target.value
        setinputDynamic(values)
        console.log(values);
    }
    const handelAddInput = () => {
        // console.log(e.target.name);
    
        setinputDynamic([...inputDynamic, 
            {tax_classes: ''}
        ])
      
    }
    const handelRemoveInput = (index) => {
       const values = [...inputDynamic]
       values.splice(index,1)
        setinputDynamic(values)
      
    }
    const fetchInput = inputDynamic.map( (inputDynamic, index)=>{
        return(
            <div key={index} className='input-group mb-3'>
             <input type="text" defaultValue={inputDynamic.tax_classes} name='taxclass' className="form-control" onChange={(e) => handelChangeInput(e,index)}/> 
             <div class="input-group-prepend">
                <button className="btn btn-success" onClick={() => handelAddInput()}>+</button>
                <button className="btn btn-danger" onClick={() => handelRemoveInput(index)}>-</button>
             </div>
             
              <br/>
            </div>
           
        )
       
    })
    console.log(inputDynamic);
    return (
        
        <div>

           <div className="page-header">
						<div className="row">
							<div className="col">
								<h3 className="page-title">Tax options</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
									<li className="breadcrumb-item active">Tax options</li>
								</ul>
							</div>
						</div>
					</div>
				
				
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Tax options</h4>
								</div>
								<div className="card-body">
									<form onSubmit={HandleSubmit} enctype="multipart/form-data">
									{/* {resultError} */}
                                    <input type="hidden" name="_method" value="PUT" />
                                    <div className="form-group row">
											<label className="col-form-label col-md-2">Prices entered with tax (required)</label>
											<div className="col-md-10">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="prices_include_tax" value="yes" id="flexRadioDefault1" onChange={e => set_prices_include_tax(e.target.value)}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Yes, I will enter prices inclusive of tax
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="prices_include_tax" value="no" id="flexRadioDefault2" checked onChange={e => set_prices_include_tax(e.target.value)}/>
                                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    No, I will enter prices exclusive of tax
                                                    </label>
                                                </div>

                                               
											</div>

										</div>

                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Calculate tax based on (required)</label>
                                            <div className="col-md-3 ">
                                           
                                                <select className="form-select" name='tax_based_on' onChange={e => set_tax_based_on(e.target.value)}>
                                                    <option>Select</option>
                                                    <option value="1">A+</option>
                                                    <option value="2">O+</option>
                                                    <option value="3">B+</option>
                                                    <option value="4">AB+</option>
                                                </select>
                                            </div>
								        </div>
                                   
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Shipping tax class (required)</label>
                                            <div className="col-md-3 ">
                                           
                                                <select className="form-select" name='shipping_tax_class' onChange={e => set_shipping_tax_class(e.target.value)}>
                                                    <option>Select</option>
                                                    <option value="1">A+</option>
                                                    <option value="2">O+</option>
                                                    <option value="3">B+</option>
                                                    <option value="4">AB+</option>
                                                </select>
                                            </div>
								        </div>
                                   
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Rounding</label>
                                            <div className="col-md-10">

                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault" name='tax_round_at_subtotal' 
                                                onChange={e => set_tax_round_at_subtotal(e.target.value)}/>
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Default checkbox
                                                </label>
                                            </div>
                                                
                                            
                                            </div>
								        </div>
									
									
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Additional tax classes</label>
											<div className="col-md-3">
												{fetchInput}
                                         
                                
											</div>
										</div>

                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Display prices in the shop </label>
                                            <div className="col-md-3">
                                           
                                                <select className="form-select" name='tax_display_shop' onChange={e => set_tax_display_shop(e.target.value)}>
                                                  
                                                    <option value="1" selected>Including tax</option>
                                                    <option value="2">Excluding tax</option>
                                                   
                                                </select>
                                            </div>
								        </div>

                                        
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Display prices during basket and checkout </label>
                                            <div className="col-md-3 ">
                                           
                                                <select className="form-select" name='tax_display_cart' onChange={e => set_tax_display_cart(e.target.value)}>
                                                  
                                                    <option value="1" selected>Including tax</option>
                                                    <option value="2">Excluding tax</option>
                                                   
                                                </select>
                                            </div>
								        </div>

                                        <div className="form-group row">
                                            <label className="col-form-label col-md-2">Display tax totals </label>
                                            <div className="col-md-3 ">
                                           
                                                <select className="form-select" name='tax_total_display' onChange={e => set_tax_total_display(e.target.value)}>
                                                  
                                                    <option value="1" selected>As a single total</option>
                                                    <option value="2">Itemized</option>
                                                   
                                                </select>
                                            </div>
								        </div>

										<div className="form-group mb-0 row">
										
											<div className="col-md-10">
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

export default AddVat

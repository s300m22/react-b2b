import React, {useState, useEffect,useCallback} from 'react'
import { useHistory } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import OptionsForm from './OptionsForm'
import {useDropzone} from 'react-dropzone'
import $ from 'jquery';
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  
const AddProduct = () => {
    const history = useHistory();
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')

    const [summary, setSummary] = useState('setSummary')

    const [user_id, setUser_id] = useState(22)
    const [lang_id, setLang_id] = useState(1)
    const [department_id, setDepartmentID] = useState(1)
    const [product_id, setProductId] = useState(223)
    
    const [sku, setSku] = useState('')
    const [image, setImage] = useState('')
    
    const [basic_price, setBasicPrice] = useState()
    const [wholesale_price, setWholesalePrice] = useState(0)
    const [msrp, setMsrp] = useState(0)
    const [minimum_quantity, setMinimumQuantity] = useState(0)
    const [quantity, setQuantity] = useState('')
    const [layer, setLayer] = useState(0)

    const [pallet, setPallet] = useState(0)
    const [status, setStatus] = useState(0)
    const [vat_class, setVat] = useState(0)
    const [active, setActive] = useState(2)
    //const [files, setFiles] = useState([]);
   

    const HandleSubmit = async (e)=>{
        e.preventDefault()
		//console.log(123);

        const data =  new FormData()
        data.append('image',image[0])
        
        //console.log(data);
                   await fetch('http://127.0.0.1:8000/api/product/add', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                            
                        },
                        body: JSON.stringify({

                            title,
                            summary,
                            description,
                            lang_id,
                            department_id,
                            user_id,
                            product_id,
                            data,
                            sku,
                            basic_price,
                            wholesale_price,
                            msrp,
                            minimum_quantity,
                            quantity,
                            layer,
                            pallet,
                            vat_class,
                            status,
                            active
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

				
                   // console.log(image);

    }


    return (
     
        <div>
                <div className="page-header">
                    <div className="row">
                        <div className="col">
                            <h3 className="page-title">Add Product</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li className="breadcrumb-item active">Add Product</li>
                            </ul>
                        </div>
                    </div>
			    </div>

                <div className="row">
						<div className="col-md-12">
							<div className="card">
								
								<div className="card-body">

                                <form onSubmit={HandleSubmit}>

                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Options</a>
                                            </li>
                                            
                                            {/* <li className="nav-item">
                                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                                            </li> */}
                                        </ul>
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                               
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>title</label>
                                                            <input type="text" className="form-control"  onChange={e => setTitle(e.target.value)}/>
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Product SKU</label>
                                                            <input type="text" name="sku" id="sku" className="form-control" onChange={e => setSku(e.target.value)}/>
                                                        </div>
                                                        
                                                        <div className="form-group">
                                                            <label>Description</label>
                                                            <Editor
                                                                // onInit={(evt, editor) => editorRef.current = editor}
                                                                onChange={e => setDescription(e.target.getContent())}
                                                                    // initialValue="<p>This is the initial content of the editor.</p>"
                                                                    init={{
                                                                    height: 500,
                                                                    menubar: false,
                                                                    plugins: [
                                                                        'advlist autolink lists link image charmap print preview anchor',
                                                                        'searchreplace visualblocks code fullscreen',
                                                                        'insertdatetime media table paste code help wordcount'
                                                                    ],
                                                                    toolbar: 'undo redo | formatselect | ' +
                                                                    'bold italic backcolor | alignleft aligncenter ' +
                                                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                    'removeformat | help',
                                                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                                                    }}
                                                                />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="d-block">Main Image</label>
                                                            <div className="form-check form-check-inline">
                                                            <div id="drop-area">
                                                            <form className="my-form">
                                                                <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
                                                                <input type="file" name='image' id="image" onChange={e => setImage( e.target.files)}/>
                                                                <label className="button" for="fileElem">Select some files</label>
                                                            </form>
                                                            </div>

                                                            </div>
                                                         
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Category *</label>
                                                            <select className="form-control" onChange={e => setDepartmentID(e.target.value)}>
                                                                <option>Select</option>
                                                                <option value="1">A+</option>
                                                                <option value="2">O+</option>
                                                                <option value="3">B+</option>
                                                                <option value="4">AB+</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Basic Price List</label>
                                                            <input type="number" className="form-control" onChange={e => setBasicPrice(parseInt(e.target.value))} />
                                                        </div>

                                                        <div className="form-group">
                                                            <label>Wholesale Price List</label>
                                                            <input type="number" className="form-control" onChange={e => setWholesalePrice(parseInt(e.target.value))} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MSRP</label>
                                                            <input type="number" className="form-control" onChange={e => setMsrp(parseInt(e.target.value))} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Minimum quantity</label>
                                                            <input type="number" className="form-control" onChange={e => setMinimumQuantity(parseInt(e.target.value))}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Quantity</label>
                                                            <input type="number" className="form-control" onChange={e => setQuantity(parseInt(e.target.value))}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Layer</label>
                                                            <input type="number" className="form-control" onChange={e => setLayer(parseInt(e.target.value))}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Pallet</label>
                                                            <input type="number" className="form-control" onChange={e => setPallet(parseInt(e.target.value))}/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Status</label>
                                                            <select className="form-control" onChange={e => setStatus(parseInt(e.target.value))}>
                                                                
                                                                <option>Select</option>
                                                                <option value="1">Available</option>
                                                                <option value="2">Limited Stock</option>
                                                                <option value="3">Pre-order</option>
                                                                <option value="4">Not available</option>
                                                                <option value="5">Discontinued</option>
                                                                <option value="6">Sold Out</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group " onChange={e => setVat(e.target.value)}>
                                                            
                                                            <label>VAT class</label>
                                                            <select className="form-control">
                                                                <option>Select</option>
                                                                <option value="1">Normal Product VAT</option>
                                                                <option value="2">VAT not applied</option>
                                                                
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>

                                              
                                               
                                                <div className="text-right">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>

                                            </div>

                                            <div className="tab-pane fade show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <OptionsForm />
                                                    
                                                
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

export default AddProduct

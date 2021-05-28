import React,{useEffect,useState,useCallback} from 'react'
import { useHistory } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form'
import { Editor } from '@tinymce/tinymce-react';
const EditProduct = (props) => {
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
    const [row, setRow] = useState([])
    const {id} = props
    useEffect(  () => {
        (async ()=>{
           await fetch('http://127.0.0.1:8000/api/product/edit/' + id)
       
            .then( response => {
                 if (!response.ok) { throw response }
                     return   response.json();  
                     //we only get here if there is no error
              })
              .then( data => {
                  setRow(data.data)
                  setTitle(data.data.title)
                  setDescription(data.data.description)
                  setLang_id(data.data.lang_id)
                  setDepartmentID(data.data.department_id)
                  setUser_id(data.data.user_id)
                  setProductId(data.data.product_id)
                  setSku(data.data.sku)
                  setBasicPrice(data.data.basic_price)
                  setWholesalePrice(data.data.wholesale_price)
                  setMsrp(data.data.msrp)
                  setMinimumQuantity(data.data.minimum_quantity)
                  setQuantity(data.data.quantity)
                  setLayer(data.data.layer)
                  setPallet(data.data.pallet)
                  setStatus(data.data.vat_class)
                  setStatus(data.data.status)
                  setVat(data.data.active)
                  console.log(data);
                  
                
              })
              .catch( err => {
               console.log(err);
               //console.log(data);
              })
        })()
      
       
    },[])
    
    const HandleSubmit = async (e)=>{
        e.preventDefault()
		//console.log(123);

                   await fetch('http://127.0.0.1:8000/api/product/update/' + id, {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({
                           
                            title,
                            summary,
                            description,
                            lang_id,
                            department_id,
                            user_id,
                            product_id,
                           
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

                    })
                    .catch(err => {
                        console.log(err);
                    })

                    //await  router.push('/')
					

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
                                                    <input type="text" defaultValue={row.title} className="form-control"  onChange={e => setTitle(e.target.value)}/>
                                                </div>

                                                <div className="form-group">
                                                    <label>Product SKU</label>
                                                    <input type="text" name="sku" id="sku" defaultValue={row.sku} className="form-control" onChange={e => setSku(e.target.value)}/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label>Description</label>
                                                    <Editor  content={row.description}
                                                        // onInit={(evt, editor) => editorRef.current = editor}
                                                        onChange={e => setDescription(e.target.getContent())}
                                                            initialValue={row.description}
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
                                                        <input type="file"  name='image' id="image" onChange={e => setImage( e.target.files)}/>
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
                                                        <option value="1" selected={row.department_id == 1 ? 'selected': ''}>A+</option>
                                                        <option value="2" selected={row.department_id == 2 ? 'selected': ''}>O+</option>
                                                        <option value="3" selected={row.department_id == 3 ? 'selected': ''}>B+</option>
                                                        <option value="4" selected={row.department_id == 4 ? 'selected': ''}>AB+</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Basic Price List</label>
                                                    <input type="number" defaultValue={row.basic_price} className="form-control" onChange={e => setBasicPrice(parseInt(e.target.value))} />
                                                </div>

                                                <div className="form-group">
                                                    <label>Wholesale Price List</label>
                                                    <input type="number"  defaultValue={row.wholesale_price} className="form-control" onChange={e => setWholesalePrice(parseInt(e.target.value))} />
                                                </div>
                                                <div className="form-group">
                                                    <label>MSRP</label>
                                                    <input type="number" defaultValue={row.msrp} className="form-control" onChange={e => setMsrp(parseInt(e.target.value))} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Minimum quantity</label>
                                                    <input type="number" defaultValue={row.minimum_quantity} className="form-control" onChange={e => setMinimumQuantity(parseInt(e.target.value))}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Quantity</label>
                                                    <input type="number" defaultValue={row.quantity} className="form-control" onChange={e => setQuantity(parseInt(e.target.value))}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Layer</label>
                                                    <input type="number" defaultValue={row.layer} className="form-control" onChange={e => setLayer(parseInt(e.target.value))}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Pallet</label>
                                                    <input type="number" defaultValue={row.pallet} className="form-control" onChange={e => setPallet(parseInt(e.target.value))}/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Status</label>
                                                    <select className="form-control" onChange={e => setStatus(parseInt(e.target.value))}>
                                                        <option>Select</option>
                                                        <option value="1" selected={row.status == 1 ? 'selected': ''}>Available</option>
                                                        <option value="2" selected={row.status == 2 ? 'selected': ''}>Limited Stock</option>
                                                        <option value="3" selected={row.status == 3 ? 'selected': ''}>Pre-order</option>
                                                        <option value="4" selected={row.status == 4 ? 'selected': ''}>Not available</option>
                                                        <option value="5" selected={row.status == 5 ? 'selected': ''}>Discontinued</option>
                                                        <option value="6" selected={row.status == 6 ? 'selected': ''}>Sold Out</option>
                                                    </select>
                                                </div>
                                                <div className="form-group " onChange={e => setVat(e.target.value)}>
                                                    <label>VAT class</label>
                                                    <select className="form-control">
                                                        <option>Select</option>
                                                        <option value="1" selected={row.status == 1 ? 'selected': ''}>Normal Product VAT</option>
                                                        <option value="2" selected={row.status == 2 ? 'selected': ''}>VAT not applied</option>
                                                        
                                                    </select>
                                                </div>

                                            </div>
                                        </div>

                                      
                                       
                                        <div className="text-right">
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </div>

                                    </div>

                                    <div className="tab-pane fade show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                     Tab2
                                            {/* <div {...getRootProps({className: 'dropzone'})}>
                                                <input {...getInputProps()} />
                                                <p style={{textAlign: 'center'}}>Drag 'n' drop some files here, or click to select files</p>
                                            </div>
                                            <aside style={thumbsContainer}>
                                                {thumbs}
                                            </aside> */}
                                        
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

export default EditProduct

import React, {useState, useEffect,useCallback} from 'react'
import { useHistory } from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
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
    const [files, setFiles] = useState([]);
    console.log(description);

    const HandleSubmit = async (e)=>{
        e.preventDefault()
		//console.log(123);

                   await fetch('https://ffapps.itvip.live/api/auth/register', {
                        method: 'POST',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify({

                            title,description,,email,password,notification,role
                        })
                    })
					.then(response => {
                        if(!response.ok){ throw response}
                            return response.json()
                           
                    })
                    .then(data => {
                        history.push('/alluser')
                    })
                    .catch(error => {
						if (typeof error.json === "function") {
							error.json().then(jsonError => {
								console.log("Json error from API");
								const arr = JSON.parse(jsonError)
								setError([arr])
							

							}).catch(genericError => {
								console.log("Generic error from API");
								console.log(error.statusText);
							});
						} else {
							console.log("Fetch error");
							console.log(error);
						}
					});

				
				

    }

    // useEffect(  ()=>{
    //     ( async () =>{
    //         // $(".nav-tabs a").Onclick(function(){
    //         //     $(this).tab('show');
    //         // });
    //         // $('.nav-tabs a').on('shown.bs.tab', function(event){
    //         //     var x = $(event.target).text();         
    //         //     var y = $(event.relatedTarget).text();  
    //         //     $(".act span").text(x);
    //         //     $(".prev span").text(y);
    //         // });
    //     })()
      
        
    //   },[])

useEffect(() => {
    console.log();
    return () => {
        cleanup
    }
}, [input])


  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));
  //useEffect(() => () => {
    files.map(file => {
        console.log(file.name);

    })
    // Make sure to revoke the data uris to avoid memory leaks
    //files.forEach(file => URL.revokeObjectURL(file.preview));

 // }, [files]);
//   console.log(files[0]);
    return (
        <div>
            <div className="page-header">
						<div className="row">
							<div className="col">
								<h3 className="page-title">Product</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
                                        <a href="index.html">Dashboard</a>
                                    </li>
									<li className="breadcrumb-item active">Add Product</li>
								</ul>
							</div>
						</div>
					</div>
				
				
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-header">
									<h4 className="card-title">Add Product</h4>
								</div>
								<div className="card-body">
                                 <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
                                    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
                                    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
                                    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
                                </ul>

									<form onSubmit={HandleSubmit} >
									{/* {resultError} */}
                                <div class="tab-content">
                                    <div id="home" class="tab-pane fade in active">
    
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">title (required)</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setUsername(e.target.value)}/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">First Name</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setFirstname(e.target.value)}/>
											</div>
										</div>
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Last Name</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setLastname(e.target.value)}/>
											</div>
										</div>
                                      
                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Email (required)</label>
											<div className="col-md-10">
												<input type="text" className="form-control" onChange={e => setEmail(e.target.value)}/>
											</div>
										</div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">Password</label>
											<div className="col-md-10">
												<input type="password" className="form-control" onChange={e => setPassword(e.target.value)}/>
											</div>
										</div>

                                        <div className="form-group row">
											<label className="col-form-label col-md-2">Description</label>
											<div className="col-md-10">
                                            <Editor
                                               // onInit={(evt, editor) => editorRef.current = editor}
                                               onChange={e => setDescription(e.target.getContent())}
                                                initialValue="<p>This is the initial content of the editor.</p>"
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
										</div>

 

    
 
      
    
   
									    <div className="form-group row">
                                            <label className="col-form-label col-md-2">Status</label>
                                            <div className="col-md-10">
                                                <div className="checkbox">
                                                <input type="checkbox" id="notification_2" className="check"  onChange={e => setNotification(e.target.checked) } />
                                                <label htmlFor="notification_2" className="checktoggle">checkbox</label>

                                    
                                    </div>
                                    
                                
                                </div>
                            </div>
										<div className="form-group row">
											<label className="col-form-label col-md-2">category</label>
											<div className="col-md-10">
												<select className="form-control" onChange={e => setRole(e.target.value)}>
													<option>-- Select category --</option>
													<option>Admin</option>
													<option>Option 2</option>
													
												</select>
											</div>
										</div>

									

                            
    
    </div>
    <div id="menu1" class="tab-pane fade">
       
        <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>

     
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>

    <div className="form-group mb-0 row">
										
        <div className="col-md-10">
            <div className="input-group">
                
                <div className="input-group-append">
                    <button className="btn btn-primary" type="submit">Add New User</button>
                </div>
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

export default AddProduct

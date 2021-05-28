<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Product_lang;
use Storage;
use Image;
use Validator;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => [
            'login',
            'register',
            'delete',
            'edit',
            'update',
            'addProduct',
            'allProduct'
            ]
            ]);
    }

    public function allProduct()
    {
        $product = Product_lang::get();
        return response()->json([
            'message' => ' Successfully',
            'data' => $product
        ], 201);
    
    }

    public function delete($id)
    {
                $product = Product_lang::find($id);
                $product->delete($id);
                if(!$product){
                     return response()->json(['message' => 'false']);
                }
               
                return response()->json(['message' => 'true','data'=> $product->delete($id)]);
                
    }

    public function edit($id)
    {
                $product = Product_lang::find($id);
                if(!$product){
                     return response()->json(['message' => 'false']);
                }
               
                return response()->json(['message' => 'true','data'=>$product]);
                
    }
    
    public function addProduct(Request  $request )
    {
       
        $product = new Product_lang();
        $product->title = $request->title;
        $product->summary = $request->summary;
        $product->description = $request->description;
        $product->lang_id = $request->lang_id;
        $product->department_id = $request->department_id;
        $product->product_id = $request->product_id;
        $product->user_id = $request->user_id;
        $product->sku = $request->sku;
        $product->basic_price = $request->basic_price;
        $product->wholesale_price = $request->wholesale_price;
        $product->msrp = $request->msrp;
        $product->minimum_quantity = $request->minimum_quantity;
        $product->quantity = $request->quantity;
        $product->layer = $request->layer;
        $product->pallet = $request->pallet;
        $product->vat_class = $request->vat_class;
        $product->status = $request->status;
        $product->active = $request->active;
        $product->image = $request->image;
        

    
        // $file = $request->file('image');
        // $extension = $request->image->getClientOriginalExtension();  //Get Image Extension
        // $fileName =  uniqid().'.'.$extension;  //Concatenate both to get FileName (eg: file.jpg)
        // $file->move(public_path().'/file_cuti/', $fileName);  
        // $data = $fileName;  
        // $product->image = $data;

//         if ($request->hasFile('image')) {
//             $image      = $request->file('image');
//             $fileName   = time() . '.' . $image->getClientOriginalExtension();

//             $img = Image::make($image->getRealPath());
//             $img->resize(120, 120, function ($constraint) {
//                 $constraint->aspectRatio();                 
//             });

//             $img->stream(); // <-- Key point

//             //dd();

//             Storage::disk('local')->put('images/1/smalls'.'/'. $fileName, $img, 'public');
//             $product->image = $fileName;
// }

        $product->save();
        if(!$product){
            return response()->json([
                'message' => 'Can Not Added This Product !',
                'product' => $product
            ], 204);
        }

        return response()->json([
            'message' => 'Product Successfully Added',
            'product' => $product
        ], 201);

        

    }

    public function update(Request $request, $id) {
       
      
        $product = new Product_lang();
        $product->exists = true;
        $product->id = $id; //already exists in database.
        $product->title = $request->title;
        $product->summary = $request->summary;
        $product->description = $request->description;
        $product->lang_id = $request->lang_id;
        $product->department_id = $request->department_id;
        $product->product_id = $request->product_id;
        $product->user_id = $request->user_id;
        $product->sku = $request->sku;
        $product->basic_price = $request->basic_price;
        $product->wholesale_price = $request->wholesale_price;
        $product->msrp = $request->msrp;
        $product->minimum_quantity = $request->minimum_quantity;
        $product->quantity = $request->quantity;
        $product->layer = $request->layer;
        $product->pallet = $request->pallet;
        $product->vat_class = $request->vat_class;
        $product->status = $request->status;
        $product->active = $request->active;
        $product->image = $request->image;
        

        $product->save();

        return response()->json([
            'message' => 'User successfully updated',
            'user' => $product
        ], 201);
    }
    


}

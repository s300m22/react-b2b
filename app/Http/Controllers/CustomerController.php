<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Validator;
class CustomerController extends Controller
{


    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => [
    //         'login',
    //         'register',
    //         'delete',
    //         'edit',
    //         'update',
    //         'addProduct',
    //         'allProduct',
    //         'edit'
    //         ]
    //         ]);
    // }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Customer = Customer::all();

        return response()->json($Customer);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd(1);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
            'currency' => 'required',
            'payment_term' => 'required',
            'account_receivable' => 'required',
            'sale_price_tier' => 'required',
            'sale_account' => 'required',
            'tax_rule' => 'required',
            'sales_representative' => 'required',
            'default_carrier' => 'required',
            'default_location' => 'required',
            'tax_number' => 'required',
            'category' => 'required',
            'discount' => 'required',
            'credit_limit' => 'required',
            'on_credit_hold' => 'required',
            'attribute_set' => 'required'
            
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages()->first());
        }

        $Customer = new Customer();

        $Customer->name                  = $request->name;
        $Customer->status                = $request->status;
        $Customer->currency              = $request->currency;
        $Customer->payment_term          = $request->payment_term;
        $Customer->account_receivable    = $request->account_receivable;
        $Customer->sale_price_tier       = $request->sale_price_tier;
        $Customer->sale_account          = $request->sale_account;
        $Customer->tax_rule              = $request->tax_rule;
        $Customer->sales_representative  = $request->sales_representative;
        $Customer->default_carrier       = $request->default_carrier;
        $Customer->default_location      = $request->default_location;
        $Customer->tax_number            = $request->tax_number;
        $Customer->category              = $request->category;
        $Customer->discount              = $request->discount;
        $Customer->credit_limit          = $request->credit_limit;
        $Customer->on_credit_hold        = $request->on_credit_hold;
        $Customer->attribute_set         = $request->attribute_set;
        $Customer->input_dynamic_address = json_encode($request->input_dynamic_address); 
        $Customer->input_dynamic_contact = json_encode($request->input_dynamic_contact);
        $Customer->tags                  = $request->tags;
        $Customer->comments              = $request->comments;
        $Customer->save();

        if(!$Customer) {
            return response()->json(['message' => 'There Is Error']);
        }
        return response()->json(['message' => 'Success Addedd Customer','true']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
       return Customer::find($id);

       // dd($Customer);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
          // dd(1);
          $validator = Validator::make($request->all(), [
            'name' => 'required',
            'status' => 'required',
            'currency' => 'required',
            'payment_term' => 'required',
            'account_receivable' => 'required',
            'sale_price_tier' => 'required',
            'sale_account' => 'required',
            'tax_rule' => 'required',
            'sales_representative' => 'required',
            'default_carrier' => 'required',
            'default_location' => 'required',
            'tax_number' => 'required',
            'category' => 'required',
            'discount' => 'required',
            'credit_limit' => 'required',
            'on_credit_hold' => 'required',
            'attribute_set' => 'required'
            
            
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages()->first(), 422);
        }

        $Customer = new Customer();
        $Customer->id                    = $id;
        $Customer->exists                = true;
        $Customer->name                  = $request->name;
        $Customer->status                = $request->status;
        $Customer->currency              = $request->currency;
        $Customer->payment_term          = $request->payment_term;
        $Customer->account_receivable    = $request->account_receivable;
        $Customer->sale_price_tier       = $request->sale_price_tier;
        $Customer->sale_account          = $request->sale_account;
        $Customer->tax_rule              = $request->tax_rule;
        $Customer->sales_representative  = $request->sales_representative;
        $Customer->default_carrier       = $request->default_carrier;
        $Customer->default_location      = $request->default_location;
        $Customer->tax_number            = $request->tax_number;
        $Customer->category              = $request->category;
        $Customer->discount              = $request->discount;
        $Customer->credit_limit          = $request->credit_limit;
        $Customer->on_credit_hold        = $request->on_credit_hold;
        $Customer->attribute_set         = $request->attribute_set;
        $Customer->input_dynamic_address = json_encode($request->input_dynamic_address); 
        $Customer->input_dynamic_contact = json_encode($request->input_dynamic_contact);
        $Customer->tags                  = $request->tags;
        $Customer->comments              = $request->comments;
        $Customer->save();

        if(!$Customer) {
            return response()->json(['message' => 'There Is Error']);
        }
        return response()->json(['message' => 'Success Updated', 'data' => $Customer]);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Customer = Customer::find($id);
        $Customer->delete($id);
        if(!$Customer){
             return response()->json(['message' => 'false']);
        }
       
        return response()->json(['message' => 'The Customer has been deleted']);
    }
}

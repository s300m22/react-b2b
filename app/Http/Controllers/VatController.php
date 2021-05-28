<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Taxe;
use App\Models\Tax_class;
use Validator;
class VatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => [
            'login',
            'register',
            'delete',
            'edit',
            'update',
            'addProduct',
            'allProduct',
            'update',
            'create',
            'addTaxRate',
            'allTaxClassById'
          
            ]
            ]);
    }

    public function index()
    {

        dd(12);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $Taxes = Taxe::pluck('inputDynamic')->toArray();
     
        foreach($Taxes as  $val){
        
            return $val;
            
        }
        
    }

    public function addTaxRate(Request $request)
    {
        $taxClass = new Tax_class();
        $taxClass->tax_class_id = $request->tax_class_id;
        $taxClass->country_code = $request->country_code;
        $taxClass->state = $request->state;
        $taxClass->postcode = $request->postcode;
        $taxClass->city = $request->city;
        $taxClass->rate = $request->rate;
        $taxClass->tax_name = $request->tax_name;
        $taxClass->shipping = $request->shipping;
        $taxClass->compound = $request->compound;
        $taxClass->save();

       if(!$taxClass){
            return response()->json(['message' => 'There Is Error']);
        }
        return response()->json(['message' => 'Success', 'data' => $taxClass ]);
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
       // dd($request->all());
      
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

    public function allTaxClassById($id)
    {
      
        $taxClass = Tax_class::where('tax_class_id', $id)->get();
        return $taxClass;
       
        
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $Taxes = new Taxe();
        $Taxes->id                    = 14;
        $Taxes->exists              = true;
        $Taxes->prices_include_tax    = $request->prices_include_tax;
        $Taxes->tax_based_on          = $request->tax_based_on;
        $Taxes->shipping_tax_class    = $request->shipping_tax_class;
        $Taxes->tax_round_at_subtotal = $request->tax_round_at_subtotal;
        $Taxes->tax_display_shop      = $request->tax_display_shop;
        $Taxes->tax_display_cart      = $request->tax_display_cart;
        $Taxes->tax_total_display     = $request->tax_total_display;
        $Taxes->inputDynamic          = json_encode($request->inputDynamic);
        $Taxes->save();
        if(!$Taxes){
            return response()->json(['message' => 'There Is Error']);
        }
        return response()->json(['message' => 'Success', 'data' => $Taxes]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

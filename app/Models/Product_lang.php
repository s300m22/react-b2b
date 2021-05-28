<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_lang extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'summary',
        'description' ,
        'lang_id',
        'department_id',
        'product_id',
        'user_id',
        'image',
        'sku',
        'basic_price' ,
        'wholesale_price' ,
        'msrp'  ,
        'minimum_quantity',
        'quantity' ,
        'pallet' ,
        'layer' ,
        'vat_class' ,
        'status' ,
        'active' 

    ];
    
    //protected $guarded = [];

}

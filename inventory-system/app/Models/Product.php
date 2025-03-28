<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'category',
        'brand',
        'model',
        'unit_price',
        'stock_quantity',
        'reorder_level',
        'warranty_period',
    ];
}

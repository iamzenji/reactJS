<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StockDetail extends Model
{
    protected $fillable = [
        'type',
        'supplier_id',
        'quantity',
        'unit_price',
        'sold_by',
        'sold_date',
        'received_by',
        'received_date',
    ];
}

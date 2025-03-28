<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ActionLog extends Model
{
    protected $fillable = [
        'stock_details_id',
        'activity_type',
        'user_id',
    ];
}

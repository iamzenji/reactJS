<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AccessoriesUser extends Model
{
    protected $fillable = [
        'name',
        'accessorie_id',
        'user_id',
    ];
}

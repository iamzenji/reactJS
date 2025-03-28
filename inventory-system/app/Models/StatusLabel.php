<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusLabel extends Model
{
    protected $fillable = [
        'label_name',
        'category',
        'description',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KitsLicense extends Model
{
    protected $fillable = [
        'name',
        'license_type',
        'expiration_date',
    ];
}

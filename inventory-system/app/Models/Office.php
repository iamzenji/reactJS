<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
    protected $fillable = [
        'name',
        'code',
        'department_id',
    ];

    // Relationship to Department
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
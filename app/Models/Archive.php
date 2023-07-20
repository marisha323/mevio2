<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Archive extends Model
{
    use HasFactory;

    const ADD_TO_ARCHIVE = false;
    const DELETE_FROM_ARCHIVE = true;


    protected $fillable = [
        'userId',
        'deskId',
        'created_at',
        'updated_at'
    ];

}

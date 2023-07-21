<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteDesk extends Model
{
    use HasFactory;

    const ADD_TO_FAVORITE = false;
    const DELETE_FROM_FAVORITE = true;


    protected $fillable = [
        'userId',
        'deskId',
    ];
}

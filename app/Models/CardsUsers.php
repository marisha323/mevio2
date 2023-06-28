<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CardsUsers extends Model
{
    use HasFactory;
    protected $fillable = [
        'cardId',
        'userId',
    ];
}


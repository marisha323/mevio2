<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesksUsers extends Model
{
    protected $table = 'desk_user';
    use HasFactory;

    protected $fillable = [
        'deskId',
        'userId',
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Desk extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'creatorId',
        'isPublic',
        'dateOfCreation',
        'themeId',
        'isArchive',
    ];

    public function users ()
    {
        return $this->belongsToMany(User::class,'desks_users');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Desk extends Model
{
    use HasFactory;

    protected $fillable = [
        'deskName',
        'userId',
        'isPublic',
        'dateOfCreation',
        'themeId',
        'isArchive',
        'created_at',
        'updated_at'
    ];

    public function users (): BelongsToMany
    {
        return $this->belongsToMany(User::class );
    }
}

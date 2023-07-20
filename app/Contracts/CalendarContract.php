<?php
namespace App\Contracts;

use Illuminate\Http\Request;

interface CalendarContract
{
    public function index($userId);
    public function index_week($userId);
}


?>

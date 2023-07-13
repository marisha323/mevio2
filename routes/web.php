<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\DeskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Added by Yehor
use App\Http\Controllers\HomeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/user-desks',[DeskController::class,'actionGetUserDesks']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/users', [UserController::class, 'returnUsers']);
    Route::delete('/users/{id}', [UserController::class, 'delete']);

    Route::get('/desk-panel',function (){
        return Inertia::render('DeskPanel/DeskPanel') ;
    });

    Route::get('/calendar',function (){
        return Inertia::render('Calendar/Calendar') ;
    });

    Route::get('/current-desk', [CardController::class, 'currentDesk']);
//    Route::get('/current-desk',function (){
//        return Inertia::render('CurrentDesk/CurrentDesk') ;
//    });

    // Route::get('/users',function (){
    //     return Inertia::render('Users/Users') ;
    // });

    Route::get('/week-calendar',function (){
        return Inertia::render('Calendar/WeekCalendar') ;
    });

    Route::get('/Home',function (){
        return Inertia::render('Home/Home') ;
    });


    //SAVE CARD
    Route::get('/create-card',function (){
        return Inertia::render('UserComponent/CreateCard');
    });
    Route::post('/posts/createCard',[CardController::class,'store'])->name('post.store');

    //UPDATE COLUMN_ID
    Route::post('/update-card-column/{id}', [CardController::class, 'updateCardColumn'])->name('update-card-column');



    // Route::get('/create-card', [CardController::class, 'createCard'])->name('create-card.createCard');
    //FIND USER By Email
    Route::get('/usercomponent/Index',[UserController::class,'index'])->name('UserComponent.Index');
    Route::post('/usercomponent/findByEmail',[UserController::class,'findByEmail'])->name('UserComponent.findByEmail');
});







require __DIR__.'/auth.php';




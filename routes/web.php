<?php

use App\Http\Controllers\CalendarController;
use App\Http\Controllers\InvitationController;
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



Route::middleware('auth')->group(function () {

    Route::get('/get-all-invitations', [InvitationController::class,'actionGetAllInvitations']);
    Route::post('/create-invitation',[InvitationController::class,'actionCreateInvitation']);

    Route::get('api/themes',[DeskController::class, 'actionGetAllThemes']
    );

    Route::get('/user-own-desks',[DeskController::class,'actionGetUserOwnDesks']);

    Route::get('/desk-panel',[DeskController::class,'actionGetAllUsersDesks'])
        ->name('desk.panel');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/users', [UserController::class, 'returnUsers']);
    Route::delete('/users/{userId}/desk/{deskId}', [UserController::class, 'delete']);

    Route::get('/calendar',function (){
        return Inertia::render('Calendar/Calendar');
    });

    Route::get('/calendar', [CalendarController::class, 'index']);
    Route::get('/week-calendar', [CalendarController::class, 'index_week']);

    //DESKS
    Route::get('/user-own-desks',[DeskController::class,'actionGetUserOwnDesks']);
    Route::get('/get-favorite-desks',[DeskController::class,'actionGetFavoriteDesks']);
    Route::get('/get-archive-desks',[DeskController::class,'actionGetArchiveDesks']);
    Route::post("/change-desk-favorite",[DeskController::class,'actionChangeDeskFavorite']);
    Route::post("/change-desk-archive",[DeskController::class,'actionChangeDeskArchive']);
    Route::get('/desk-panel',[DeskController::class,'actionGetAllUsersDesks'])
        ->name('desk.panel');
    Route::get('/current-desk', [CardController::class, 'currentDesk']);
//    Route::get('/current-desk',function (){
//        return Inertia::render('CurrentDesk/CurrentDesk') ;
//    });

    // Route::get('/users',function (){
    //     return Inertia::render('Users/Users') ;
    // });

//    Route::get('/week-calendar',function (){
//        return Inertia::render('Calendar/WeekCalendar') ;
//    });

    Route::get('/Home',function (){
        return Inertia::render('Home/Home') ;
    });

    //SAVE DESK
    Route::post('/create-desk',[DeskController::class,'actionCreateDesk']);


    //SAVE CARD
//    Route::get('/create-card',function (){
//        return Inertia::render('UserComponent/CreateCard');
//    });
    Route::post('/posts/createCard',[CardController::class,'store']);


    //FIND USER By Email
    Route::get('/usercomponent/Index',[UserController::class,'index'])->name('UserComponent.Index');
    Route::post('/usercomponent/findByEmail',[UserController::class,'findByEmail'])->name('UserComponent.findByEmail');

    Route::post('/update-card-column/{id}',[CardController::class, 'updateCardColumn']);

});



require __DIR__.'/auth.php';


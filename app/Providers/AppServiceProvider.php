<?php

namespace App\Providers;

use App\Contracts\CalendarContract;
use App\Contracts\UserContract;
use App\Http\Controllers\CalendarController;
use App\Repositories\CalendarRepository;
use App\Repositories\UserRepository;

use App\Contracts\ArchiveContract;
use App\Repositories\ArchiveRepository;

use App\Contracts\CardContract;
use App\Repositories\CardRepository;

use App\Contracts\CardsUserContract;
use App\Repositories\CardsUserRepository;

use App\Contracts\ColumnContract;
use App\Repositories\ColumnRepository;

use App\Contracts\CommentContract;
use App\Repositories\CommentRepository;

use App\Contracts\DeskContract;
use App\Repositories\DeskRepository;

use App\Contracts\DesksUsersContract;
use App\Repositories\DesksUsersRepository;

use App\Contracts\FavoriteDeskContract;
use App\Repositories\FavoriteDeskRepository;

use App\Contracts\InvitationContract;
use App\Repositories\InvitationRepository;

use App\Contracts\PremiumContract;
use App\Repositories\PremiumRepository;

use App\Contracts\ThemeContract;
use App\Repositories\ThemeRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserContract::class,UserRepository::class);
        $this->app->bind(ArchiveContract::class,ArchiveRepository::class);
        $this->app->bind(CardContract::class,CardRepository::class);
        $this->app->bind(CardsUserContract::class,CardsUserRepository::class);
        $this->app->bind(ColumnContract::class,ColumnRepository::class);
        $this->app->bind(CommentContract::class,CommentRepository::class);
        $this->app->bind(DeskContract::class,DeskRepository::class);
        $this->app->bind(DesksUsersContract::class,DesksUsersRepository::class);
        $this->app->bind(FavoriteDeskContract::class,FavoriteDeskRepository::class);
        $this->app->bind(InvitationContract::class,InvitationRepository::class);
        $this->app->bind(PremiumContract::class,PremiumRepository::class);
        $this->app->bind(ThemeContract::class,ThemeRepository::class);
        $this->app->bind(CalendarContract::class, CalendarRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}

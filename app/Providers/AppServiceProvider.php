<?php

namespace App\Providers;

use App\Contracts\UserContract;
use App\Repositories\UserRepository;

use App\Contracts\ArchiveContract;
use App\Repositories\ArchiveRepository;

use App\Contracts\CardContract;
use App\Repositories\CardRepository;

use App\Contracts\CartUserContract;
use App\Repositories\CartUserRepository;

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
        $this->app->bind(CartUserContract::class,CartUserRepository::class);
        $this->app->bind(ColumnContract::class,ColumnRepository::class);
        $this->app->bind(CommentContract::class,CommentRepository::class);
        $this->app->bind(DeskContract::class,DeskRepository::class);
        $this->app->bind(DesksUsersContract::class,DesksUsersRepository::class);
        $this->app->bind(FavoriteDeskContract::class,FavoriteDeskRepository::class);
        $this->app->bind(InvitationContract::class,InvitationRepository::class);
        $this->app->bind(PremiumContract::class,PremiumRepository::class);
        $this->app->bind(ThemeContract::class,ThemeRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}

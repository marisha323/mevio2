<?php

namespace App\Http\Controllers;

use App\Contracts\UserContract;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $userRepository;

    public function __construct(UserContract $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function index($email)
    {
        $user = $this->userRepository->findById($email);
        return Inertia::render('UserComponent/index', [
            'values' => $user,
        ]);
    }


}

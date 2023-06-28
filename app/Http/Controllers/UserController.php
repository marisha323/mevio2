<?php

namespace App\Http\Controllers;

use App\Contracts\UserContract;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userModel;

    public function __construct(UserContract $userRepository)
    {
        $this->userModel = $userRepository;
    }

    public function index()
    {
       $this->userModel->index();
    }



    public function findByEmail(Request $request)
    {
        $email = $request->post('email');
        $user = $this->userModel->findByEmail($email);
       // dd($user);

        return Inertia::render('UserComponent/Index', [
            'user' => $user,
        ]);
    }
}

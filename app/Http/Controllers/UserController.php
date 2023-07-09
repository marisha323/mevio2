<?php

namespace App\Http\Controllers;

use App\Contracts\UserContract;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userModel;

    public function __construct(UserRepository $userRepository)
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
    public function returnUsers(){
        //userModel is actually a UserRepository!
        $users = $this->userModel->returnUsers();
        return Inertia::render("Users/Users",['users' => $users,]);
    }
    public function delete($id){
        $this->userModel->delete($id);
    }
}

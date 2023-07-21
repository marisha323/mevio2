<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

       $user= $request->user()->fill($request->validated());
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($request->hasFile('userLogoPath')) {
            // Отримайте файл з запиту

            $file = $request->file('userLogoPath');
            // Виконайте потрібну обробку та збереження файлу
            $destinationPath = 'userLogoPath'; // Шлях до папки, де ви хочете зберегти файл
            $fileName = $file->getClientOriginalName(); // Отримання оригінального імені файлу

            $file->move($destinationPath, $fileName); // Збереження файлу у вказану папку
            $user->userLogoPath = $fileName;
        }
        $request->user()->save();
        return Redirect::route('profile.edit');

//        $user = $request->user();
//        $user->fill($request->validated());
//
//        if ($user->isDirty('email')) {
//            $user->email_verified_at = null;
//        }
//        dd($request->email);
//        //dd($user);
////        if (request()->hasFile('userLogoPath')) {
////            dd($user);
////            $file = request()->file('userLogoPath');
////            $destinationPath = 'public/userLogoPath';
////            $fileName = $file->getClientOriginalName();
////            $file->move($destinationPath, $fileName);
////            $user->userLogoPath = $fileName;
////        }
//
//        $user->save();
//
//        return redirect()->route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}

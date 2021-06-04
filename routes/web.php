<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\{
    UsersController,
    UserAnswerController,
    AboutAnswersController,
    BioAnswersController,
    LifestyleAnswersController,
    DiscoveryQueuesController
};
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [UsersController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/users', [UsersController::class, 'users'])->middleware(['auth', 'verified'])->name('users');
Route::get('/users/{id}', [UsersController::class, 'getProfile'])->middleware(['auth', 'verified'])->name('get-user-profile');
Route::get('/perfect-match/{id}', [UserAnswerController::class, 'getAnswers'])->middleware(['auth', 'verified'])->name('get-perfect-match-qa');
Route::get('/about/{id}', [AboutAnswersController::class, 'get'])->middleware(['auth', 'verified'])->name('get-about-qa');
Route::get('/bio/{id}', [BioAnswersController::class, 'get'])->middleware(['auth', 'verified'])->name('get-about-qa');
Route::get('/life-style/{id}', [LifestyleAnswersController::class, 'get'])->middleware(['auth', 'verified'])->name('get-lifestyle-qa');
Route::get('/dic-queue/{id}', [DiscoveryQueuesController::class, 'get'])->middleware(['auth', 'verified'])->name('get-disc-queue');

require __DIR__.'/auth.php';

<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ListController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Teacher\TeacherDashboardController;
use App\Http\Controllers\Student\StudentDashboardController;

// Public welcome page using Inertia + React
Route::get('/', function () {
    return Inertia::render('welcome', [  // NOTE: 'welcome' matches the filename without extension and case-sensitive
    ]);
});

Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index']);
    // Add more admin routes
});

Route::middleware(['auth', 'teacher'])->prefix('teacher')->group(function () {
    Route::get('/dashboard', [TeacherDashboardController::class, 'index']);
    // Add more teacher routes
     Route::resource('lists', ListController::class);
     Route::resource('tasks', TaskController::class);
});

Route::middleware(['auth', 'student'])->prefix('student')->group(function () {
    Route::get('/dashboard', [StudentDashboardController::class, 'index']);
    // Add more student routes
   
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

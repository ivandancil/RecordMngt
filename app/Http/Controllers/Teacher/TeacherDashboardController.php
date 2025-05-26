<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherDashboardController extends Controller
{
      public function index()
    {
        return Inertia::render('Teacher/Dashboard', [
            'message' => 'Welcome to the Teacher Dashboard',
            // you can add more data here, e.g. counts of users, stats, etc.
        ]);
    }
}

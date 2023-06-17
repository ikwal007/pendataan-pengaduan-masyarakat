<?php

namespace App\Http\Controllers\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SuperAdmin\EditPasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

// use ;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = new User();
        $dataForStats = $users->getAllUserInfoCount();
        $dataForTable = $users->getAllUserData();

        return Inertia::render('SuperAdmin/Dashboard', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $users = new User();
        $dataForStats = $users->getAllUserInfoCount();
        $dataForShowDetail = $users->getDetailDataUser($id);

        return Inertia::render('SuperAdmin/ShowDetail', compact(['dataForShowDetail', 'dataForStats']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $users = new User();
        $dataForStats = $users->getAllUserInfoCount();
        $dataForShowDetail = $users->getDetailDataUser($id);

        return Inertia::render('SuperAdmin/EditPassword', compact(['dataForShowDetail', 'dataForStats']));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditPasswordRequest $request, string $id)
    {
        if (Auth()->user()->roles->first()->name !== 'Super_Admin') {
            abort(403, 'Unauthorized action.');
        }

        $user = User::find($id);

        $user->password = Hash::make($request->new_password);

        $user->save();

        return redirect('/super-admin/dashboard')->with('message', 'Edit Data Success');
    }
}

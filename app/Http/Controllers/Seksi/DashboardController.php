<?php

namespace App\Http\Controllers\Seksi;

use App\Http\Controllers\Controller;
use App\Models\Pemohon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pemohon = new Pemohon();
        $dataForTable = $pemohon->getAllPemohonans(5);
        $dataForStats = $pemohon->getCountAllPemohons();

        return Inertia::render('Seksi/Index', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $pemohon = new Pemohon();
        $dataForShowDetail = $pemohon->getShowDetails($id);
        $dataForStats = $pemohon->getCountAllPemohons();

        return Inertia::render('Seksi/Show', compact(['dataForTable', 'dataForStats']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pemohons', function (Blueprint $table) {
            $table->ulid('id')->primary();
            $table->foreignUlid('jenis_pengaduan_id');
            $table->foreignUlid('jenis_media_pengaduan_id');
            $table->string('nama_pemohon', 50);
            $table->string('nik', 16)->nullable();
            $table->string('no_telepon', 20);
            $table->string('no_hak', 30)->nullable();
            $table->foreignUlid('jenis_sertifikat_id')->nullable();
            $table->text('keterangan_pengaduan_pemohon');
            $table->foreignUlid('kecamatan_id')->nullable();
            $table->foreignUlid('desa_id')->nullable();
            $table->foreignUlid('status_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pemohons');
    }
};

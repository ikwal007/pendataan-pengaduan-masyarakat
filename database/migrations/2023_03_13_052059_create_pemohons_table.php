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
            $table->foreignUlid('id');
            $table->string('jenis_pengaduan', 60);
            $table->string('jenis_media_pengaduan', 20);
            $table->string('nama_pemohon', 50);
            $table->string('nik', 16)->nullable();
            $table->string('no_hak', 30)->nullable();
            $table->string('jenis_sertifikat', 40)->nullable();
            $table->text('keterangan_pengaduan_pemohon');
            $table->foreignUlid('penanganan_id')->nullable();
            $table->foreignUlid('kecamatan_id')->nullable();
            $table->foreignUlid('desa_id')->nullable();
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

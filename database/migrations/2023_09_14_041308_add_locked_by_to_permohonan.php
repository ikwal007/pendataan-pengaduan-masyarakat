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
        Schema::table('pemohons', function (Blueprint $table) {
            $table->ulid('locked_by')->nullable();
            $table->timestamp('locked_at')->nullable();
            $table->foreign('locked_by')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('pemohons', function (Blueprint $table) {
            $table->dropForeign(['locked_by']);
            $table->dropColumn('locked_by'); 
        });
    }
};

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
        Schema::table('replies', function (Blueprint $table) {
        $table->string("doctor_name")->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('replies', function (Blueprint $table) {
            //
        });
    }
};
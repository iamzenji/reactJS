<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
{
    Schema::create('accessories_users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->unsignedBigInteger('accessorie_id');
        $table->unsignedBigInteger('user_id');
        $table->timestamps();

    });
}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accessories_users');
    }
};

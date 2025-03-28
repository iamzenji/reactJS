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
    Schema::create('models', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->unsignedBigInteger('manufacturer_id');
        $table->unsignedBigInteger('category_id');
        $table->date('release_date')->nullable();
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
        Schema::dropIfExists('models');
    }
};

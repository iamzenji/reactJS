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
    Schema::create('action_log', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('stock_details_id');
        $table->enum('activity_type', ['return', 'request', 'condemn', 'issued', 'missing']);
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
        Schema::dropIfExists('action_log');
    }
};

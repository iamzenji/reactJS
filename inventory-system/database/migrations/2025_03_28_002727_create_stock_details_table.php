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
        Schema::create('stock_details', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->unsignedBigInteger('supplier_id');
            $table->integer('quantity');
            $table->decimal('unit_price', 10, 2);
            $table->unsignedBigInteger('sold_by')->nullable();
            $table->date('sold_date')->nullable();
            $table->unsignedBigInteger('received_by')->nullable();
            $table->date('received_date')->nullable();
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
        Schema::dropIfExists('stock_details');
    }
};

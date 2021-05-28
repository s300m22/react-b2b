<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductLangsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_langs', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->text('summary')->nullable();
            $table->longText('description')->nullable();
            $table->integer('lang_id')->nullable();
            $table->integer('department_id')->nullable();
            $table->integer('product_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->text('image')->nullable();
            $table->text('sku')->nullable();
            $table->integer('basic_price')->nullable();
            $table->integer('wholesale_price')->nullable();
            $table->integer('msrp')->nullable();
            $table->integer('minimum_quantity')->nullable();
            $table->integer('quantity')->nullable();
            $table->integer('layer')->nullable();
            $table->integer('pallet')->nullable();
            $table->integer('vat_class')->nullable();
            $table->integer('status')->nullable();
            $table->integer('active')->nullable();
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
        Schema::dropIfExists('product_langs');
    }
}

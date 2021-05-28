<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tax_classes', function (Blueprint $table) {
            $table->id();
            $table->string('tax_class_id');
            $table->string('country_code');
            $table->string('state');
            $table->string('postcode');
            $table->string('city');
            $table->string('rate');
            $table->string('tax_name');
            $table->string('shipping');
            $table->string('compound');
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
        Schema::dropIfExists('tax_classes');
    }
}

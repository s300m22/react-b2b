<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taxes', function (Blueprint $table) {
            $table->id();
            $table->string('prices_include_tax');
            $table->string('tax_based_on');
            $table->string('shipping_tax_class');
            $table->string('tax_round_at_subtotal');
            $table->string('tax_display_shop');
            $table->string('tax_display_cart');
            $table->string('tax_total_display');
            $table->string('inputDynamic');
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
        Schema::dropIfExists('taxes');
    }
}

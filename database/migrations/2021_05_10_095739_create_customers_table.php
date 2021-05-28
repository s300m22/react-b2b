<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('status');
            $table->string('currency');
            $table->string('payment_term');
            $table->string('account_receivable');
            $table->string('sale_price_tier');
            $table->string('sale_account');
            $table->string('tax_rule');
            $table->string('sales_representative');
            $table->string('default_carrier');
            $table->string('default_location');
            $table->string('tax_number');
            $table->string('category');
            $table->string('discount');
            $table->string('credit_limit');
            $table->string('on_credit_hold');
            $table->string('attribute_set');
            $table->json('input_dynamic_address');
            $table->json('input_dynamic_contact');
            $table->string('tags');
            $table->text('comments');
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
        Schema::dropIfExists('customers');
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product_lang;
class ProductLangsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product_lang::factory()
        ->count(5)
        ->create();
    }
}

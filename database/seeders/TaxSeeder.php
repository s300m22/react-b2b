<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tax;
class TaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        Tax::factory()
        ->count(5)
        ->create();
    }
}

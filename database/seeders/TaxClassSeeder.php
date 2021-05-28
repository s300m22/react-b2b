<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Tax_class;
class TaxClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tax_class::factory()
        ->count(5)
        ->create();
    }
}

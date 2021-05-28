<?php

namespace Database\Factories;

use App\Models\Product_Lang;
use Illuminate\Database\Eloquent\Factories\Factory;

class Product_LangFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product_Lang::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->name,
            'summary' => $this->faker->name,
            'description' => $this->faker->name,
            'lang_id' => random_int(100, 999),
            'department_id' => random_int(100, 999),
            'product_id' => random_int(800, 999),
            'user_id' => random_int(100, 999),
            'image' => $this->faker->image,
            'sku'=> 'sku',
            'basic_price'=> random_int(100, 999),
            'wholesale_price'=> random_int(100, 999),
            'msrp' => random_int(100, 999),
            'minimum_quantity'=> random_int(100, 999),
            'quantity'=> random_int(100, 999),
            'pallet'=> random_int(100, 999),
            'layer'=> random_int(100, 999),
            'vat_class'=> random_int(100, 999),
            'status'=> random_int(1, 5),
            'active'=> random_int(1, 2),
            

        ];
    }
}
       
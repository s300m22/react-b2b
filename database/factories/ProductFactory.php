<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'depid' => random_int(100, 999),
            'image' => $this->faker->image,
            'status' => random_int(1, 2),
            'userid' => random_int(50, 100),
            'options' => json_encode([
                $this->faker->randomElement(
                     [
                       "house" => '495',
                       "flat" => '533', 
                       "apartment" => '895', 
                       "room" => '665',
                        "shop" => '447', 
                        "lot" => '987',
                        "garage" => '362'
                     ]
                  )
             ]),
        ];
    }
}

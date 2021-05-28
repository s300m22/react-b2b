<?php

namespace Database\Factories;

use App\Models\Tax_class;
use Illuminate\Database\Eloquent\Factories\Factory;

class Tax_ClassFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tax_class::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

            'country_code' => $this->faker->name,
            'tax_class_id' => random_int(1, 20),
            'state' => $this->faker->name,
            'postcode' => $this->faker->name,
            'city' => $this->faker->name,
            'rate' => $this->faker->name,
            'tax_name' => $this->faker->name,
            'shipping' => $this->faker->name,
            'compound' => $this->faker->name
        ];
    }
}

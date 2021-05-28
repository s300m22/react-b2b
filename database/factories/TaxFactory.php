<?php

namespace Database\Factories;

use App\Models\Tax;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaxFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tax::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

            'prices_include_tax' => $this->faker->name,
            'tax_based_on' => random_int(1, 10),
            'shipping_tax_class' => random_int(1, 2),
            'tax_round_at_subtotal' => 1,
            'tax_display_shop' => random_int(1, 2),
            'tax_display_cart' => random_int(1, 2),
            'tax_total_display' => random_int(1, 2),
            'inputDynamic' =>  json_encode([
                [
                    "tax_classes" => "tax_classes",
                    "tax_classes" => "tax_classes",
                ],
                [
                    "tax_classes" => "tax_classes",
                    "tax_classes" => "tax_classes",
        
                ],
                [
                    "tax_classes" => "tax_classes",
                    "tax_classes" => "tax_classes",
        
                ],
                [
                    "tax_classes" => "tax_classes",
                    "tax_classes" => "tax_classes",
        
                ] 
            ]),
               
               
           

           
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            
            'name' => $this->faker->name,
            'status' => random_int(1, 5),
            'currency' => random_int(1, 5),
            'payment_term' => random_int(1, 5),
            'account_receivable' => random_int(1, 5),
            'sale_price_tier' => random_int(1, 5),
            'sale_account' => random_int(1, 5),
            'tax_rule' => random_int(1, 5),
            'sales_representative'=> random_int(1, 5),
            'default_carrier'=> random_int(1, 5),
            'default_location'=> random_int(1, 5),
            'tax_number' => random_int(100, 999),
            'category'=> random_int(100, 999),
            'discount'=> random_int(100, 999),
            'credit_limit'=> random_int(100, 999),
            'on_credit_hold'=> random_int(0, 1),
            'attribute_set'=> random_int(1, 5),
            'input_dynamic_address'=>  json_encode([
                [
                    "line1" => "line1",
                    "line2" => "line2",
                    "city" => "city",
                    "suburb" => "suburb",
                    "state" => "state",
                    "country" => "country",
                    "type" => "type",
                    "default_for_type" => "default_for_type",
                ],
                [
                    "line1" => "line1",
                    "line2" => "line2",
                    "city" => "city",
                    "suburb" => "suburb",
                    "state" => "state",
                    "country" => "country",
                    "type" => "type",
                    "default_for_type" => "default_for_type",
                ],
                [
                    "line1" => "line1",
                    "line2" => "line2",
                    "city" => "city",
                    "suburb" => "suburb",
                    "state" => "state",
                    "country" => "country",
                    "type" => "type",
                    "default_for_type" => "default_for_type",
                ]
            ]),
            'input_dynamic_contact'=>  json_encode([
                [
                    "name" => "name",
                    "phone" => "phone",
                    "mobile" => "mobile",
                    "job_title" => "job_title",
                    "fax" => "fax",
                    "email" => "email",
                    "website" => "website",
                    "comment" => "comment",
                    "default" => "default",
                    "inc_email" => "inc_email",
    
                ],
                [
                    "name" => "name",
                    "phone" => "phone",
                    "mobile" => "mobile",
                    "job_title" => "job_title",
                    "fax" => "fax",
                    "email" => "email",
                    "website" => "website",
                    "comment" => "comment",
                    "default" => "default",
                    "inc_email" => "inc_email",
    
                ],
                [
                    "name" => "name",
                    "phone" => "phone",
                    "mobile" => "mobile",
                    "job_title" => "job_title",
                    "fax" => "fax",
                    "email" => "email",
                    "website" => "website",
                    "comment" => "comment",
                    "default" => "default",
                    "inc_email" => "inc_email",
    
                    ]
            ]),
            'tags'=> 'tags,tags,tags,tags',
            'comments'=> 'comments commentscomments commentscomments',
            
        ];
    }
}

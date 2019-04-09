<?php

use App\Models\Attribute;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ProductSeeder::class);
        $now = Carbon::now();
        $attributes =     [[
                'name' => 'Name',
                'slug' => 'name',
                'description' => null,
                'sort_order' => 1,
                'group' => 'General',
                'type' => 'text',
                'is_required' => true,
                'is_collection' => false,
                'default' => '',
                'created_at' => $now,
                 'updated_at' => $now,
                 'entities' => ['product']
            ],
            [
                'name' => 'SKU',
                'slug' => 'sku',
                'description' => null,
                'sort_order' => 2,
                'group' => 'General',
                'type' => 'text',
                'is_required' => true,
                'is_collection' => false,
                'default' => '',
                'created_at' => $now,
                 'updated_at' => $now,
                 'entities' => ['product']
            ],
            [
                'name' => 'Price',
                'slug' => 'price',
                'description' => null,
                'sort_order' => 3,
                'group' => 'Price',
                'type' => 'integer',
                'is_required' => true,
                'is_collection' => false,
                'default' => '',
                'created_at' => $now,
                 'updated_at' => $now,
                 'entities' => ['product']
            ],
            [
                'name' => 'Color',
                'slug' => 'color',
                'description' => null,
                'sort_order' => 4,
                'group' => 'General',
                'type' => 'select',
                'is_required' => true,
                'is_collection' => false,
                'default' => '',
                'created_at' => $now,
                 'updated_at' => $now
            ],

            [
                'name' => 'Size',
                'slug' => 'size',
                'description' => null,
                'sort_order' => 5,
                'group' => 'General',
                'type' => 'select',
                'is_required' => true,
                'is_collection' => false,
                'default' => '',
                'created_at' => $now,
                 'updated_at' => $now,
                 'entities' => ['product']
            ]];
        foreach ($attributes as $attribute) {
            Attribute::create($attribute);
        }
    }
}

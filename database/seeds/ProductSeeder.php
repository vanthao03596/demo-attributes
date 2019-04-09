<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $product = new Product;
        $product->fill(['type' => 'configurable', 'sku' => 'ao']);
        $product->save();
        $product->variants()->createMany([
            ['type' => 'simple','sku' => 'ao-variant-1'],
            ['type' => 'simple','sku' => 'ao-variant-2'],
            ['type' => 'simple','sku' => 'ao-variant-3']
        ]);
    }
}

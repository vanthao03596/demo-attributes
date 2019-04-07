<?php

namespace App;

use Rinvex\Attributes\Traits\Attributable;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Attributable;
    protected $with = ['eav'];
}

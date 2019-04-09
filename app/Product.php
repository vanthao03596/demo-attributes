<?php

namespace App;

use Rinvex\Attributes\Traits\Attributable;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use Attributable;
    protected $with = ['eav'];
    protected $fillable = ['sku', 'type', 'parent_id'];

    public function variants()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }
}

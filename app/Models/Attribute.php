<?php
declare(strict_types=1);

namespace App\Models;
use App\Traits\Auditable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\Activitylog\Traits\LogsActivity;
use Rinvex\Attributes\Models\Attribute as BaseAttribute;

class Attribute extends BaseAttribute
{
    use Auditable;
    use LogsActivity;
    /**
     * Indicates whether to log only dirty attributes or all.
     *
     * @var bool
     */
    protected static $logOnlyDirty = true;
    /**
     * The attributes that are logged on change.
     *
     * @var array
     */
    protected static $logFillable = true;
    /**
     * The attributes that are ignored on change.
     *
     * @var array
     */
    protected static $ignoreChangedAttributes = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    /**
     * Get the route key for the model.
     *
     * @param \Illuminate\Database\Eloquent\Model $entity
     * @param string                              $accessArea
     *
     * @return \Illuminate\View\View
     */
    public function render(Model $entity, string $accessArea): string
    {
        $default = '';
        $selected = '';
        switch ($this->type) {
            case 'select':
                $default = collect(array_map('trans', array_map('trim', explode("\n", $this->default))))->map(function ($item) use (&$selected) {
                    if (mb_strpos($item, '=')) {
                        $key = mb_strstr($item, '=', true);
                        $value = Str::replaceFirst('=', '', mb_strstr($item, '='));
                        // Check for SELECTED itmes (marked by asterisk)
                        ! Str::contains($value, '*') || $selected = $key;
                        ! Str::contains($value, '*') || $value = Str::replaceLast('*', '', $value);
                    } else {
                        $key = $value = $item;
                        // Check for SELECTED itmes (marked by asterisk)
                        ! Str::contains($value, '*') || $key = $value = $selected = Str::replaceLast('*', '', $value);
                    }
                    return [$key => $value];
                })->collapse();
                return view("{$accessArea}.types.".$this->type, ['attribute' => $this, 'entity' => $entity, 'default' => $default, 'selected' => $selected])->render();
            case 'check':
                $default = collect(array_map('trans', array_map('trim', explode("\n", $this->default))))->map(function ($item) use ($entity) {
                    $details = [
                        'label' => '',
                        'status' => false,
                    ];
                    if (mb_strpos($item, '=')) {
                        $details['label'] = mb_strstr($item, '=', true);
                        $item = Str::replaceFirst('=', '', mb_strstr($item, '='));
                        // Check for SELECTED itmes (marked by asterisk)
                        ! Str::contains($item, '*') || $details['status'] = true;
                        ! Str::contains($item, '*') || $item = Str::replaceLast('*', '', $item);
                        ! $entity->exists || $details['status'] = $entity->{$this->slug}->search($item) !== false;
                    } else {
                        $details['label'] = $item;
                        // Check for SELECTED itmes (marked by asterisk)
                        ! Str::contains($item, '*') || $details['status'] = true;
                        ! Str::contains($item, '*') || $details['label'] = $item = Str::replaceLast('*', '', $item);
                        ! $entity->exists || $details['status'] = $entity->{$this->slug}->search($item) !== false;
                    }
                    return [$item => $details];
                })->collapse();
                return view("{$accessArea}.types.".$this->type, ['attribute' => $this, 'entity' => $entity, 'default' => $default])->render();
            default:
                return view("{$accessArea}.types.".$this->type, ['attribute' => $this, 'entity' => $entity, 'default' => $default])->render();
        }
    }
    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}

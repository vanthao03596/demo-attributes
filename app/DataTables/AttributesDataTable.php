<?php
declare(strict_types=1);

namespace App\DataTables;
use App\Models\Attribute;
use App\Transformers\AttributeTransformer;
class AttributesDataTable extends AbstractDataTable
{
    /**
     * {@inheritdoc}
     */
    protected $model = Attribute::class;
    /**
     * {@inheritdoc}
     */
    protected $transformer = AttributeTransformer::class;
    /**
     * {@inheritdoc}
     */
    protected $order = [
        [1, 'asc'],
        [0, 'asc'],
    ];
    /**
     * {@inheritdoc}
     */
    protected $builderParameters = [
//        'rowGroup' => '{
//            dataSrc: \'group\'
//        }',
    ];
    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns(): array
    {
        $link = false
            ? '"<a href=\""+ route(\'adminarea.attributes.edit\', {attribute: full.id, locale: \''.$this->request->segment(1).'\'}).url()+"\">"+data+"</a>"'
            : '"<a href=\""+ route(\'adminarea.attributes.edit\', {attribute: full.id}).url()+"\">"+data+"</a>"';
        return [
            'name' => ['title' => trans('common.name'), 'render' => $link, 'responsivePriority' => 0],
            'type' => ['title' => trans('common.type'), 'render' => trans('common.boolean')],
            'group' => ['title' => trans('common.group'), 'visible' => false],
            'is_collection' => ['title' => trans('common.is_collection')],
            'is_required' => ['title' => trans('common.is_required')],
            'created_at' => ['title' => trans('common.created_at'), 'render' => "moment(data).format('YYYY-MM-DD, hh:mm:ss A')"],
            'updated_at' => ['title' => trans('common.updated_at'), 'render' => "moment(data).format('YYYY-MM-DD, hh:mm:ss A')"],
        ];
    }
}

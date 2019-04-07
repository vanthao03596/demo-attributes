<?php

declare(strict_types=1);

namespace Cortex\Foundation\DataTables;

use Spatie\MediaLibrary\Models\Media;
use Cortex\Foundation\Transformers\MediaTransformer;

/**
 * @property \Spatie\MediaLibrary\HasMedia\HasMedia $resource
 * @property string                                 $tabs
 * @property string                                 $id
 * @property string                                 $url
 */
class MediaDataTable extends AbstractDataTable
{
    /**
     * {@inheritdoc}
     */
    protected $model = Media::class;

    /**
     * {@inheritdoc}
     */
    protected $createButton = false;

    /**
     * {@inheritdoc}
     */
    protected $builderParameters = [
        'initComplete' => 'function (settings) {
            implicitForms.initialize();
        }',
    ];

    /**
     * {@inheritdoc}
     */
    protected $transformer = MediaTransformer::class;

    /**
     * Get the query object to be processed by dataTables.
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Query\Builder|\Illuminate\Support\Collection
     */
    public function query()
    {
        $query = $this->resource->media()->orderBy('order_column', 'ASC');

        return $this->applyScopes($query);
    }

    /**
     * Display ajax response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function ajax()
    {
        return datatables($this->query())
            ->setTransformer(app($this->transformer))
            ->make(true);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns(): array
    {
        return [
            'name' => ['title' => trans('common.name'), 'responsivePriority' => 0],
            'file_name' => ['title' => trans('common.file_name')],
            'mime_type' => ['title' => trans('common.mime_type')],
            'size' => ['title' => trans('common.size')],
            'created_at' => ['title' => trans('common.created_at'), 'render' => "moment(data).format('YYYY-MM-DD, hh:mm:ss A')"],
            'updated_at' => ['title' => trans('common.updated_at'), 'render' => "moment(data).format('YYYY-MM-DD, hh:mm:ss A')"],
            'delete' => ['title' => trans('common.delete'), 'orderable' => false, 'searchable' => false, 'render' => '"<a href=\"#\" data-toggle=\"modal\" data-target=\"#delete-confirmation\"
                data-modal-action=\""+data+"\"
                data-modal-title=\"" + Lang.trans(\'messages.delete_confirmation_title\') + "\"
                data-modal-button=\"<a href=\'#\' class=\'btn btn-danger\' data-form=\'delete\' data-token=\''.csrf_token().'\'><i class=\'fa fa-trash-o\'></i> \"" + Lang.trans(\'common.delete\') + "\"</a>\"
                data-modal-body=\"" + Lang.trans(\'messages.delete_confirmation_body\', {type: \'media\', name: full.name}) + "\"
                title=\"" + Lang.trans(\'common.delete\') + "\"><i class=\"fa fa-trash text-danger\"></i></a>"'],
        ];
    }
}

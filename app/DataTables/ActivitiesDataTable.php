<?php

declare(strict_types=1);

namespace App\DataTables;

use App\Transformers\ActivityTransformer;

/**
 * @property \Spatie\Activitylog\Traits\CausesActivity $resource
 * @property string                                    $tabs
 * @property string                                    $id
 */
class ActivitiesDataTable extends LogsDataTable
{
    /**
     * {@inheritdoc}
     */
    protected $transformer = ActivityTransformer::class;

    /**
     * Get the query object to be processed by dataTables.
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Query\Builder|\Illuminate\Support\Collection
     */
    public function query()
    {
        $query = $this->resource->actions();

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
            'details' => ['title' => '', 'data' => null, 'defaultContent' => '', 'class' => 'dt-details-control', 'searchable' => false, 'orderable' => false],
            'subject' => ['title' => trans('common.subject'), 'name' => 'subject.name', 'searchable' => false, 'orderable' => false, 'render' => 'full.subject_route ? "<a href=\""+full.subject_route+"\">"+data+"</a>" : data', 'responsivePriority' => 0],
            'description' => ['title' => trans('common.description'), 'orderable' => false],
            'created_at' => ['title' => trans('common.date'), 'render' => "moment(data).format('YYYY-MM-DD, hh:mm:ss A')"],
        ];
    }
}

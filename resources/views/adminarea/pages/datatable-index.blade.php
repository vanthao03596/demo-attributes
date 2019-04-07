{{-- Master Layout --}}
@extends('adminarea.layouts.default')

{{-- Page Title --}}
@section('title')
    Attribute
@endsection

{{-- Main Content --}}
@section('content')

    <div class="content-wrapper">
        <section class="content-header">
            <h1>Attribute CRUD</h1>
        </section>

        {{-- Main content --}}
        <section class="content">

            <div class="row">

                <div class="col-md-12">

                    <div class="box">
                        <div class="box-body">
                            {!! $dataTable->table(['class' => 'table table-striped table-hover responsive dataTableBuilder', 'id' => "{$id}"]) !!}
                        </div>
                    </div>

                </div>

            </div>

        </section>

    </div>

@endsection

@push('head-elements')
    <meta name="turbolinks-cache-control" content="no-cache">
@endpush

@push('styles')
    <link href="{{ mix('css/datatables.css') }}" rel="stylesheet">
@endpush

@push('vendor-scripts')
    <script src="{{ mix('js/datatables.js') }}" defer></script>
@endpush

@push('inline-scripts')
    {!! $dataTable->scripts() !!}
@endpush

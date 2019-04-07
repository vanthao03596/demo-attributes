{{-- Master Layout --}}
@extends('adminarea.layouts.default')

{{-- Page Title --}}
@section('title')
    {{ extract_title(Breadcrumbs::render()) }}
@endsection

{{-- Main Content --}}
@section('content')

    <div class="content-wrapper">

        {{-- Main content --}}
        <section class="content">

            <div class="row">
                <div class="col-md-12">
                    <h1><i class="fa fa-dashboard"></i> {{ trans('common.adminarea_welcome') }}</h1>
                    <h4>{{ trans('common.adminarea_welcome_body') }}</h4>
                </div>

            </div>

        </section>
    </div>

@endsection

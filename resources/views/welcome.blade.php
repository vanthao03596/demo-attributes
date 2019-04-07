{{-- Master Layout --}}
@extends('adminarea.layouts.default')

{{-- Page Title --}}
@section('title')
    Create attributes Product
@endsection

{{-- Main Content --}}
@section('content')

    <div class="content-wrapper">
        <section class="content-header">
            <h1>Create attributes Product</h1>
        </section>

        {{-- Main content --}}
        <section class="content">
            @attributes($product)
        </section>

    </div>

@endsection

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
            <form action="/test" id="create-product-form" method="POST">
                @csrf
                @foreach($product->getEntityAttributes() as $attribute)
                    {!! $attribute->render($product, 'adminarea') !!}
                @endforeach
                {{ Form::button(trans('common.submit'), ['class' => 'btn btn-primary btn-flat', 'type' => 'submit']) }}
            </form>
        </section>

    </div>

@endsection

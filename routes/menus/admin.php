<?php

declare(strict_types=1);

use Rinvex\Menus\Models\MenuItem;
use Rinvex\Menus\Models\MenuGenerator;
use App\Models\Attribute;

Menu::register('adminarea.sidebar', function (MenuGenerator $menu, Attribute $attribute) {
    $menu->findByTitleOrAdd(trans('common.cms'), 40, 'fa fa-file-text-o', [], function (MenuItem $dropdown) use ($attribute) {
        $dropdown->route(['adminarea.attributes.index'], trans('common.attributes'), 10, 'fa fa-leaf')->ifCan('list', $attribute)->activateOnRoute('adminarea.attributes');
    });
});

Menu::register('adminarea.attributes.tabs', function (MenuGenerator $menu, Attribute $attribute) {
    $menu->route(['adminarea.attributes.import'], trans('common.records'))->if(Route::is('adminarea.attributes.import*'));
    $menu->route(['adminarea.attributes.import.logs'], trans('common.logs'))->if(Route::is('adminarea.attributes.import*'));
    $menu->route(['adminarea.attributes.create'], trans('common.details'))->if(Route::is('adminarea.attributes.create'));
    $menu->route(['adminarea.attributes.edit', ['attribute' => $attribute]], trans('common.details'))->if($attribute->exists);
    $menu->route(['adminarea.attributes.logs', ['attribute' => $attribute]], trans('common.logs'))->if($attribute->exists);
});

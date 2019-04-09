<?php

namespace App\Providers;

use App\Product;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Routing\Router;
use App\Models\Attribute;
use Illuminate\View\Compilers\BladeCompiler;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->bindBlueprintMacro();
        $this->registerBladeExtensions();
        // Bind eloquent models to IoC container
//        $this->app['config']['rinvex.attributes.models.attribute'] === Attribute::class
//        || $this->app->alias('rinvex.attributes.attribute', Attribute::class);
        $this->app->bind(\Yajra\DataTables\Html\Builder::class, \App\Overrides\Yajra\DataTables\Html\Builder::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Router $router)
    {
        // Bind route models and constrains
//        $router->pattern('attribute', '[a-zA-Z0-9-]+');
//        $router->model('attribute', config('rinvex.attributes.models.attribute'));

        // Map relations
        // Relation::morphMap([
        //     'attribute' => config('rinvex.attributes.models.attribute'),
        // ]);

        // Add default attributes types
        Attribute::typeMap([
            'integer' => \Rinvex\Attributes\Models\Type\Integer::class,
            'boolean' => \Rinvex\Attributes\Models\Type\Boolean::class,
            'select' => \Rinvex\Attributes\Models\Type\Varchar::class,
            'textarea' => \Rinvex\Attributes\Models\Type\Text::class,
            'radio' => \Rinvex\Attributes\Models\Type\Varchar::class,
            'check' => \Rinvex\Attributes\Models\Type\Varchar::class,
            'text' => \Rinvex\Attributes\Models\Type\Varchar::class,
        ]);

        // Register blade extensions

        require __DIR__.'/../../routes/menus/admin.php';
//        $this->app->afterResolving('blade.compiler', function () {
//            require __DIR__.'/../../routes/menus/admin.php';
//        });

        Relation::morphMap([
            'product' => Product::class,
        ]);

        app('rinvex.attributes.entities')->push('product');

    }

    /**
     * Bind blueprint macro.
     *
     * @return void
     */
    protected function bindBlueprintMacro(): void
    {
        Blueprint::macro('auditable', function () {
            $this->integer('created_by_id')->unsigned()->after('created_at')->nullable();
            $this->string('created_by_type')->after('created_at')->nullable();
            $this->integer('updated_by_id')->unsigned()->after('updated_at')->nullable();
            $this->string('updated_by_type')->after('updated_at')->nullable();
        });

        Blueprint::macro('dropAuditable', function () {
            $this->dropForeign($this->createIndexName('foreign', ['updated_by_type']));
            $this->dropForeign($this->createIndexName('foreign', ['updated_by_id']));
            $this->dropForeign($this->createIndexName('foreign', ['created_by_type']));
            $this->dropForeign($this->createIndexName('foreign', ['created_by_id']));
            $this->dropColumn(['updated_by_type', 'updated_by_id', 'created_by_type', 'created_by_id']);
        });

        Blueprint::macro('auditableAndTimestamps', function ($precision = 0) {
            $this->timestamp('created_at', $precision)->nullable();
            $this->integer('created_by_id')->unsigned()->nullable();
            $this->string('created_by_type')->nullable();
            $this->timestamp('updated_at', $precision)->nullable();
            $this->integer('updated_by_id')->unsigned()->nullable();
            $this->string('updated_by_type')->nullable();
        });

        Blueprint::macro('dropauditableAndTimestamps', function () {
            $this->dropForeign($this->createIndexName('foreign', ['updated_by_type']));
            $this->dropForeign($this->createIndexName('foreign', ['updated_by_id']));
            $this->dropForeign($this->createIndexName('foreign', ['updated_at']));
            $this->dropForeign($this->createIndexName('foreign', ['created_by_type']));
            $this->dropForeign($this->createIndexName('foreign', ['created_by_id']));
            $this->dropForeign($this->createIndexName('foreign', ['created_at']));
            $this->dropColumn(['updated_by_type', 'updated_by_id', 'updated_at', 'created_by_type', 'created_by_id', 'created_at']);
        });
    }

    /**
     * Register the blade extensions.
     *
     * @return void
     */
    protected function registerBladeExtensions(): void
    {
        $this->app->afterResolving('blade.compiler', function (BladeCompiler $bladeCompiler) {
            // @attributes($entity)
            $bladeCompiler->directive('attributes', function ($expression) {
                return "<?php echo ($expression)->getEntityAttributes()->map->render({$expression}, 'adminarea'); ?>";
            });
        });
    }
}

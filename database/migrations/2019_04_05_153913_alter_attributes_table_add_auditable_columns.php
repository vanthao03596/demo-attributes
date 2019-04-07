<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterAttributesTableAddAuditableColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(config('rinvex.attributes.tables.attributes'), function (Blueprint $table) {
            $table->auditable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table(config('rinvex.attributes.tables.attributes'), function (Blueprint $table) {
            $table->dropAuditable();
        });
    }
}

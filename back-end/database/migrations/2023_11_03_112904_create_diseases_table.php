<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDiseasesTable extends Migration {

	public function up()
	{
		Schema::create('diseases', function(Blueprint $table) {
			$table->id();
			$table->timestamps();
			$table->string('name', 255);
		});
	}

	public function down()
	{
		Schema::drop('diseases');
	}
}
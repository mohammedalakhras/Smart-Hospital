<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCountriesTable extends Migration {

	public function up()
	{
		Schema::create('countries', function(Blueprint $table) {
			$table->id();
			$table->timestamps();
			$table->string('name', 200);
		});
	}

	public function down()
	{
		Schema::drop('countries');
	}
}
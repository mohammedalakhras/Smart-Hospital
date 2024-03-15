<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateChronicDseasesTable extends Migration {

	public function up()
	{
		Schema::create('chronic_dseases', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->bigInteger('pation_id')->unsigned();
			$table->bigInteger('diseases_id')->unsigned();
			$table->string('notes', 250);
		});
	}

	public function down()
	{
		Schema::drop('chronic_dseases');
	}
}
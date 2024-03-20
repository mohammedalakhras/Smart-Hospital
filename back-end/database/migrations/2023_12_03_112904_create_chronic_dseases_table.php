<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateChronicDseasesTable extends Migration {

	public function up()
	{
		Schema::create('chronic_dseases', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table
			->foreignId('pation_id')
			->constrained('pation')
			->cascadeOnDelete()
			->cascadeOnUpdate();
			$table
			->foreignId('diseases_id')
			->constrained('diseases')
			->cascadeOnDelete()
			->cascadeOnUpdate();
			$table->string('n1otes', 250);
		});
	}

	public function down()
	{
		Schema::drop('chronic_dseases');
	}
}
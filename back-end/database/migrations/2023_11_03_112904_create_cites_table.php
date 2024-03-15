<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCitesTable extends Migration {

	public function up()
	{
		Schema::create('cites', function(Blueprint $table) {
			$table->id();
			$table->timestamps();
			$table->string('name', 200);
			$table
					->foreignId('country_id')
					->constrained('countries')
					->cascadeOnDelete()
					->cascadeOnUpdate();
		});
	}

	public function down()
	{
		Schema::drop('cites');
	}
}
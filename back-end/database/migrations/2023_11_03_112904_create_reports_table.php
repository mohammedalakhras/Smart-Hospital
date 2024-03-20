<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateReportsTable extends Migration {

	public function up()
	{
		Schema::create('reports', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->bigInteger('docotr_id');
			$table->bigInteger('pation_id');
			$table->string('text', 500);
		});
	}

	public function down()
	{
		Schema::drop('reports');
	}
}
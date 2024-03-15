<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateQuestionsTable extends Migration {

	public function up()
	{
		Schema::create('questions', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->foreignId('pation_id')
				  ->constrained('pation');
			$table->string('message', 500);
		});
	}

	public function down()
	{
		Schema::drop('questions');
	}
}
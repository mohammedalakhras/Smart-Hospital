<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateQuestionsMediaTable extends Migration {

	public function up()
	{
		Schema::create('questionsMedia', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->bigInteger('quastion_id')->unsigned();
			$table->string('file_path', 150);
		});
	}

	public function down()
	{
		Schema::drop('questionsMedia');
	}
}
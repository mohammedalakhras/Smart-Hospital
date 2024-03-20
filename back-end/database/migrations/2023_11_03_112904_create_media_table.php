<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateMediaTable extends Migration {

	public function up()
	{
		Schema::create('media', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->bigInteger('person_id');
			$table->bigInteger('role_id');
			$table->string('file_path', 100);
			$table->integer('info');
		});
	}

	public function down()
	{
		Schema::drop('media');
	}
}
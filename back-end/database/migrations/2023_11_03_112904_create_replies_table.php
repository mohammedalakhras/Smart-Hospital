<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRepliesTable extends Migration {

	public function up()
	{
		Schema::create('replies', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->bigInteger('qusation_id')->unsigned();
			$table->string('reply', 255);
			$table->date('date');
			$table->time('time');
		});
	}

	public function down()
	{
		Schema::drop('replies');
	}
}
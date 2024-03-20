<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAdminsTable extends Migration {

	public function up()
	{
		Schema::create('admins', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('fname', 255);
			$table->string('lname', 255);
			$table->string('father', 255);
			$table->string('mother', 200)->nullable();
			$table->string('email', 100);
			$table->string('password', 255);
			$table->integer('type')->default('1');
			$table->bigInteger('city_id')->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('admins');
	}
}
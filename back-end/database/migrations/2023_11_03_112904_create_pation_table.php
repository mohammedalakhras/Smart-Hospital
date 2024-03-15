<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePationTable extends Migration {

	public function up()
	{
		Schema::create('pation', function(Blueprint $table) {
			$table->id();
			$table->string('email', 100)->unique();
			$table->string('password', 200);
			$table->timestamps();
			$table->string('full_name');
			$table->string('father', 255)->nullable();
			$table->string('mother', 255)->nullable();
			$table->date('Bdate')->nullable();
			$table->string('mobile', 15)->unique()->nullable();
			$table->tinyInteger('blocked')->default('0');
			$table->foreignId('city_id')->nullable()
					->constrained('cites');
		});
	}

	public function down()
	{
		Schema::drop('pation');
	}
}
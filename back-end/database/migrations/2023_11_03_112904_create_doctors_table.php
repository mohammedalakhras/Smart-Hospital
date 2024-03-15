<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateDoctorsTable extends Migration {

	public function up()
	{
		Schema::create('doctors', function(Blueprint $table) {
			$table->id();
			$table->timestamps();
			$table->string('full_name');
			$table->string('father', 200)->nullable();
			$table->string('mother', 200)->nullable();
			$table->string('SSN', 255)->nullable();
			$table->string('email', 100)->unique();
			$table->string('password', 255);
			$table->date('Bdate')->nullable();
			$table->string('info', 500)->nullable();
			$table->string('Telephone', 15)->unique()->nullable();
			$table->string('mobile', 15)->unique()->nullable();
			$table->integer('External')->nullable();
			$table->tinyInteger('activated')->default('0');
			$table->tinyInteger('blocked')->default('0');
			$table
					->foreignId('city_id')->nullable()
					->constrained('cites');
			$table
					->foreignId('spec_id')->nullable()
					->constrained('specializations');
		});
	}

	public function down()
	{
		Schema::drop('doctors');
	}
}
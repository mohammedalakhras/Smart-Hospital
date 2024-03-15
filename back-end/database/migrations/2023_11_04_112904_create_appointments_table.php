<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAppointmentsTable extends Migration {

	public function up()
	{
		Schema::create('appointments', function(Blueprint $table) {
			$table->id();
			$table->timestamps();
			$table->foreignId('pation_id')
					->constrained('pation');
			$table->foreignId('doctor_id')
					->constrained('doctors');
			$table->date('date');
			$table->time('time');
			$table->integer('type')  ->default(0);
			$table->integer('status')->default(0);
			$table->string('ReqInfo', 200)->nullable();
			$table->string('diagnostic', 200)->nullable();
		});
	}

	public function down()
	{
		Schema::drop('appointments');
	}
}
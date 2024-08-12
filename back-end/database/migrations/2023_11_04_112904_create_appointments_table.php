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
			$table->date('date')->nullable();
			$table->time('time')->nullable();
			$table->integer('type')->default(0);
			$table->enum('status',["pinding","accept","reject","review","finshed"])->default('pinding');
			$table->string('ReqInfo', 200)->nullable();
			$table->string('diagnostic', 200)->nullable();
		});
	}

	public function down()
	{
		Schema::drop('appointments');
	}
}
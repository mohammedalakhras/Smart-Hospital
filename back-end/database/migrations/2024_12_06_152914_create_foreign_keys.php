<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Eloquent\Model;

class CreateForeignKeys extends Migration {

	public function up()
	{
		Schema::table('pation', function(Blueprint $table) {
			$table->foreign('city_id')->references('id')->on('cites')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('cites', function(Blueprint $table) {
			$table->foreign('country_id')->references('id')->on('countries')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('admins', function(Blueprint $table) {
			$table->foreign('city_id')->references('id')->on('cites')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('doctors', function(Blueprint $table) {
			$table->foreign('city_id')->references('id')->on('cites')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('doctors', function(Blueprint $table) {
			$table->foreign('spec_id')->references('id')->on('specializations')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('questions', function(Blueprint $table) {
			$table->foreign('pation_id')->references('id')->on('pation')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('appointments', function(Blueprint $table) {
			$table->foreign('pation_id')->references('id')->on('pation')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('appointments', function(Blueprint $table) {
			$table->foreign('doctor_id')->references('id')->on('doctors')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('chronic_dseases', function(Blueprint $table) {
			$table->foreign('pation_id')->references('id')->on('pation')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('chronic_dseases', function(Blueprint $table) {
			$table->foreign('diseases_id')->references('id')->on('diseases')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('replies', function(Blueprint $table) {
			$table->foreign('qusation_id')->references('id')->on('questions')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
		Schema::table('questionsMedia', function(Blueprint $table) {
			$table->foreign('quastion_id')->references('id')->on('questions')
						->onDelete('cascade')
						->onUpdate('cascade');
		});
	}

	public function down()
	{
		Schema::table('pation', function(Blueprint $table) {
			$table->dropForeign('pation_city_id_foreign');
		});
		Schema::table('cites', function(Blueprint $table) {
			$table->dropForeign('cites_country_id_foreign');
		});
		Schema::table('admins', function(Blueprint $table) {
			$table->dropForeign('admins_city_id_foreign');
		});
		Schema::table('doctors', function(Blueprint $table) {
			$table->dropForeign('doctors_city_id_foreign');
		});
		Schema::table('doctors', function(Blueprint $table) {
			$table->dropForeign('doctors_spec_id_foreign');
		});
		Schema::table('questions', function(Blueprint $table) {
			$table->dropForeign('questions_pation_id_foreign');
		});
		Schema::table('appointments', function(Blueprint $table) {
			$table->dropForeign('appointments_pation_id_foreign');
		});
		Schema::table('appointments', function(Blueprint $table) {
			$table->dropForeign('appointments_doctor_id_foreign');
		});
		Schema::table('chronic_dseases', function(Blueprint $table) {
			$table->dropForeign('chronic_dseases_pation_id_foreign');
		});
		Schema::table('chronic_dseases', function(Blueprint $table) {
			$table->dropForeign('chronic_dseases_diseases_id_foreign');
		});
		Schema::table('replies', function(Blueprint $table) {
			$table->dropForeign('replies_qusation_id_foreign');
		});
		Schema::table('questionsMedia', function(Blueprint $table) {
			$table->dropForeign('questionsMedia_quastion_id_foreign');
		});
	}
}
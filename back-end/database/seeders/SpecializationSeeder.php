<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Specialization;
use DB;
class SpecializationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('specializations')->delete();
        $speclations=['جلدية',"مخ واعصاب","اطفال","داخلية","نسائية","جراحة"];
        foreach($speclations as $spe){
            Specialization::create(['name'=>$spe]);
        }
    }
}

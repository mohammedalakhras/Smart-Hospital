<?php

namespace Database\Seeders;

use App\Models\Countriey;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CountrySeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('countries')->delete();
        $countrs=["سورية","الامارات", "مصر","السعودية"];
        foreach($countrs as $country){
            Countriey::create(["name"=>$country]);    
        }
    }
}

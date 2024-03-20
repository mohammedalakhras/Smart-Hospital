<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
class CitySeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cites')->delete();
        $cites =['حمص',"دمشق","حماه","حلب","طرطوس","اللاذقية","درعا","ديرالزور"];
        foreach ($cites as $city){
            City::create([
                "name"       =>$city,
                "country_id" =>"1"
            ]);

        }
    }
}

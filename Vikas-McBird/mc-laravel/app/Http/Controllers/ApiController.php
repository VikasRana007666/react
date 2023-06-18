<?php

namespace App\Http\Controllers;

use App\Models\TempUser;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPSTORM_META\type;

class ApiController extends Controller
{
    public $temp_user_id;

    public function day_month_year(Request $request)
    {
        $days = [];
        for ($i = 1; $i < 32; $i++) {
            array_push($days, $i);
        }

        $months = [
            ["id" => "1", "month" => "January"],
            ["id" => "2", "month" => "February"],
            ["id" => "3", "month" => "March"],
            ["id" => "4", "month" => "April"],
            ["id" => "5", "month" => "May"],
            ["id" => "6", "month" => "June"],
            ["id" => "7", "month" => "July"],
            ["id" => "8", "month" => "August"],
            ["id" => "9", "month" => "September"],
            ["id" => "10", "month" => "October"],
            ["id" => "11", "month" => "November"],
            ["id" => "12", "month" => "December"]
        ];


        $years = [];
        for ($i = 2002; $i > 1909; $i--) {
            array_push($years, ["year" => $i]);
        }

        return response()->json([
            "status" => true,
            "message" => "Day Month Year!",
            "data" => [
                "days" => $days,
                "months" => $months,
                "years" => $years
            ]
        ]);
    }

    public function home_form(Request $request)
    {
        $validators = Validator::make($request->all(), [
            "first_name" => "required",
            "last_name" => "required",
            "day" => "required",
            "month" => "required",
            "year" => "required",
        ]);

        if ($validators->fails()) {
            return response()->json([
                "status" => false,
                "message" => $validators->errors()
            ]);
        }

        $request->merge(['ip_address' => $request->ip()]);
        $user = TempUser::create($request->only(
            'first_name',
            'last_name',
            'day',
            'month',
            'year',
            'ip_address',
            'browser'
        ));

        return response()->json([
            "status" => true,
            "message" => "Successfull",
            "data" => $user
        ]);
    }

    public function sign_up_form(Request $request)
    {
        $validators = Validator::make($request->all(), [
            "email" => "required",
            "phone" => "required"
        ]);

        if ($validators->fails()) {
            return response()->json([
                "status" => false,
                "message" => $validators->errors()
            ]);
        }

        if (empty($request->user_id)) {
            return response()->json([
                "status" => false,
                "message" => "User Not Found!"
            ]);
        } else {
            $user_id = $request->user_id;
        }

        $check = TempUser::where(["email" => $request->email])->exists();
        if ($check) {
            return response()->json([
                "status" => false,
                "message" => "Email Already Exists!"
            ]);
        }

        $check = TempUser::where(["phone" => $request->phone])->exists();
        if ($check) {
            return response()->json([
                "status" => false,
                "message" => "Phone Number Already Exists!"
            ]);
        }

        $user = TempUser::where(["id" => $user_id])->first();

        $user->update([
            "email" => $request->email,
            "phone" => $request->phone
        ]);

        return response()->json([
            "status" => true,
            "message" => "Successfull",
            "data" => $user
        ]);
    }

    public function add_address(Request $request)
    {
        $validators = Validator::make($request->all(), [
            // "email" => "required",
            // "phone" => "required"
        ]);

        if ($validators->fails()) {
            return response()->json([
                "status" => false,
                "message" => $validators->errors()
            ]);
        }

        if (empty($request->user_id)) {
            return response()->json([
                "status" => false,
                "message" => "User Not Found!"
            ]);
        } else {
            $user_id = $request->user_id;
        }

        $addresses = $request->addresses;

        foreach ($addresses as $item) {
            Address::updateOrCreate([
                "user_id" => $user_id,
                "address_1" => $item['address1'],
                "address_2" => $item['address2'],
                "address_3" => $item['address3']
            ]);
        }

        $addresses = Address::where(["user_id" => $user_id])->get();

        return response()->json([
            "status" => true,
            "message" => "Successfull",
            "data" => $addresses
        ]);
    }
}

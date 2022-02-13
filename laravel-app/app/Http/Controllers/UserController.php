<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Redirect, Response, File;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function index(){
        return view('signup');
    }
    function register(Request $req){
        $fname = $req -> input('fname');
        $lname = $req -> input('lname');
        $addr = $req -> input('address');
        $phone = $req -> input('phone');
        $signupoption = $req -> input('signupoption');
        $email = $req -> input('email');
        $password = Hash::make($req -> input('password'));

        DB::table('owner') -> insert([
            'Fname' => $fname,
            'Lname' => $lname,
            'email' => $email,
            'Phone' => $phone,
            'password' => $password
        ]);

        DB::table('login') -> insert([
            'username' => $email,
            'password' => $password,
            'type' => $signupoption
        ]);
    }

    function updatevisit(request $req){
        $name = $req -> input('name');
        $aptno = $req -> input('aptno');
        $rname = $req -> input('rname');
        $vdate = $req -> input('vdate');
        $email = $req -> input('email');
        $phone = $req -> input('phone');

        DB::table('homevisitors') -> insert([
            'visitor_name' => $name,
            'aptno' => $aptno,
            'resident_name' => $rname,
            'date' => $vdate,
            'email' => $email,
            'phone' => $phone
        ]);
    }

    function login(request $req){
        $email = $req -> input('email');
        $password = $req -> input('password');

        $user = DB::table('login')->where('username', $email)->first();

        if(!Hash::check($password, $user->password)){
            echo 'Not Matched';
        }
        else{ 
            $user = DB::table('owner') -> where('email', $email)->first();
            $users = DB::table('login') -> where('username', $email)-> first();
            $fname = $user->Fname;
            $lname = $user->Lname;
            $dob = $user->DOB;
            $email = $user->email;
            $phone = $user->Phone;

            $type = $users -> type;
        
            echo $email . ',' . $fname . "," . $lname . "," . $dob . "," . $phone . "," . $fname . $lname . "," . $type;
        }
    }

    function visitorforms(request $req){
        $name = $req -> input('vname');
        $date = $req -> input('vdate');
        $email = $req -> input('vemail');
        $phone = $req -> input('vcontact');
        $purpose = $req -> input('vpurpose');

        DB::table('visitor') -> insert([
            'Name' => $name,
            'DateOfVisit' => $date,
            'email' => $email,
            'contact' => $phone,
            'purpose' => $purpose
        ]);
    }

    function updateprofile(request $req){
        $fname = $req -> input('fname');
        $lname = $req -> input('lname');
        $email = $req -> input('email');
        $phone = $req -> input('phone');
        $dob = $req -> input('dob');
        $name = $req -> input('vname');
        $date = $req -> input('vdate');
        $vemail = $req -> input('vemail');
        $vphone = $req -> input('vcontact');
        $purpose = $req -> input('vpurpose');

        if(($name == ''||$name == null)&&($date == '' || $date == null)&&($vemail == ''||$vemail == null)&&($vphone == ''||$vphone == null)&&($purpose == ''||$purpose == null)){
            DB::table('owner')->where('email', $email)->update(['Fname'=>$fname, 'Lname'=>$lname, 'Phone'=> $phone, 'DOB'=>$dob]);

            $user = DB::table('owner') -> where('email', $email)->first();
            $fname = $user->Fname;
            $lname = $user->Lname;
            $dob = $user->DOB;
            $email = $user->email;
            $phone = $user->Phone;

            echo $email . ',' . $fname . "," . $lname . "," . $dob . "," . $phone . "," . $fname . $lname;

            
        } 
        else{

            DB::table('visitor') -> insert([
                'Name' => $name,
                'DateOfVisit' => $date,
                'email' => $vemail,
                'contact' => $vphone,
                'purpose' => $purpose
            ]);
        }

    }

    function visitapartment(request $req){
        $vname = $req -> input('vname');
        $vaptno = $req -> input('vaptno');
        $vrname = $req -> input('vrname');
        $vdate = $req -> input('vdate');
        $vemail = $req -> input('vemail');
        $vphone = $req -> input('vphone');

        $vgname = $req -> input('vgname');
        $gname = $req -> input('gname');
        $vgdate = $req -> input('vgdate');
        $vgemail = $req -> input('vgemail'); 
        $vgphone = $req -> input('vgphone');

        if(($vname == ''||$vname == null)&&($vaptno == '' || $vaptno == null)&&($vrname == ''||$vrname == null)&&($vdate == ''||$vdate == null)&&($vemail == ''||$vemail == null)&&($vphone == ''||$vphone == null)){
            DB::table('gardenvisit') -> insert([
                'visitor_name' => $vgname,
                'garden_name' => $gname,
                'dov' => $vgdate,
                'email' => $vgemail,
                'phone' => $vgphone
            ]);
        }else{
            DB::table('homevisitors') -> insert([
                'visitor_name' => $vname,
                'aptno' => $vaptno,
                'resident_name' => $vrname,
                'date' => $vdate,
                'email' => $vemail,
                'phone' => $vphone
            ]);
        }
    }

    function apartmentdata(request $req){
        $user = DB::table('apartments')->get();
        echo $user;
    }
}

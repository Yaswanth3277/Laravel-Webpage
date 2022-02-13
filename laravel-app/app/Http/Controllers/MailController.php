<?php

namespace App\Http\Controllers;

use App\Mail\contactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail(){
        $details = [
            'title' => 'Test mail',
            'body' => 'This is for testing mail using gmail'
        ];

        Mail::to("lunamarhousing@gmail.com")->send(new contactMail($details));
        return "Email Sent";
    }
}

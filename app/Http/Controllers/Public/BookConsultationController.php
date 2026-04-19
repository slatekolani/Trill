<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Mail\ConsultationFormFirm;
use App\Mail\ConsultationFormUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookConsultationController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name'           => ['required', 'string', 'max:255'],
            'email'          => ['required', 'email', 'max:255'],
            'phone'          => ['required', 'string', 'max:50'],
            'organisation'   => ['nullable', 'string', 'max:255'],
            'area'           => ['required', 'string', 'max:255'],
            'preferred_date' => ['nullable', 'date'],
            'preferred_time' => ['nullable', 'string', 'max:50'],
            'method'         => ['required', 'in:in-person,phone,video'],
            'matter'         => ['required', 'string'],
            'how_heard'      => ['nullable', 'string', 'max:100'],
        ]);

        // Notify the firm
        Mail::to('info@trill.co.tz')
            ->send(new ConsultationFormFirm($data));

        // Send confirmation to the client
        Mail::to($data['email'], $data['name'])
            ->send(new ConsultationFormUser($data));

        return back()->with('success', 'Your consultation request has been submitted. We will contact you within 24 hours to confirm your appointment.');
    }
}

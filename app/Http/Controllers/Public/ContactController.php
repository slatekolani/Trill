<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormFirm;
use App\Mail\ContactFormUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $data = $request->validate([
            'name'    => ['required', 'string', 'max:255'],
            'email'   => ['required', 'email', 'max:255'],
            'phone'   => ['nullable', 'string', 'max:50'],
            'area'    => ['nullable', 'string', 'max:255'],
            'subject' => ['required', 'string', 'max:500'],
            'message' => ['required', 'string'],
        ]);

        // Notify the firm
        Mail::to('info@trill.co.tz')
            ->send(new ContactFormFirm($data));

        // Send confirmation to the enquirer
        Mail::to($data['email'], $data['name'])
            ->send(new ContactFormUser($data));

        return back()->with('success', 'Your message has been sent. We will be in touch within 24 hours.');
    }
}

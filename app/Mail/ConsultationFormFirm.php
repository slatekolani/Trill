<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ConsultationFormFirm extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public array $formData) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New Consultation Request: ' . $this->formData['name'],
            replyTo: [
                new \Illuminate\Mail\Mailables\Address(
                    $this->formData['email'],
                    $this->formData['name']
                ),
            ],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.consultation-firm',
        );
    }
}

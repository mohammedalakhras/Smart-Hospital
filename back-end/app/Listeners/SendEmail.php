<?php

namespace App\Listeners;

use App\Events\UpdateStatusAppointment;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendEmail
{
  
    public function __construct()
    {
        
    }
    public function handle(object $event): void
    {
        Notification::send($event->user, new \App\Notifications\sendEmail($event->request,$event->doctor_name));

    }
}

<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class sendEmail extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public $requestt,public $doctor_name)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    
    {

        $status = $this->requestt->status;
        switch($this->requestt->status){
            case "accept" :$this->requestt->status=" تم قبول";
            case "reject" :$this->requestt->status="تم رفض";
            case "review" :$this->requestt->status="تم وضع مراجعة ل";

        }
        return (new MailMessage)
        ->greeting("مرحبا  $notifiable->full_name")
        // ->line($this->requestt->status)
        ->line($this->requestt->status)
        ->line("موعد لك مع الدكتور  ")
        ->line($this->doctor_name)
        ->line($status=="reject" ? "بتاريخ  ".$this->requestt->date."الساعة ".$this->requestt->time:"")
        ->line("شكرا لك لاستخدامك تطبيقنا");
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}

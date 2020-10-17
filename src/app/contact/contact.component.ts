import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('Al-bathaa', 'template_efezph8', e.target as HTMLFormElement, 'user_CBPqtcPvPnOBG8CioVCYY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Form is submitted successfully.');
        document.location.href="/contact";
      }, (error) => {
        console.log(error.text);
      });
  }

}

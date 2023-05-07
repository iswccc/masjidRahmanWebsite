import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isSaved: boolean = false;

  closeResult: string | undefined;

  feedbackForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  constructor(private http: HttpClient) {}

  onClick() {
    console.log('Submit button was clicked!');
  }

  handleSubmit(formData: NgForm) {
    console.log(formData);
  }

  submitAlert() {
    alert('Response Submitted!');
  }

  handleFinalSubmit() {
    var feedback = this.feedbackForm.value;
    console.log(feedback);
    this.http.post('https://formspree.io/f/mbjqddqk', feedback).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.isSaved = false;
    if (this.feedbackForm.status == 'INVALID') {
    } else {
      this.isSaved = true;
    }
  }
  ngOnInit(): void {}
}

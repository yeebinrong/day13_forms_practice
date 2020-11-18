import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'templateform';
  labels = ['Fish','Meat','Vegetables'];
  dietArray: FormArray;
  rsvpForm: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dietArray = this.fb.array(
      this.labels.map(() => {
        this.fb.control('');
      })
    )
    this.rsvpForm = this.fb.group({
      name: this.fb.control('', [ Validators.required]),
      email: this.fb.control('', [ Validators.required, Validators.email]),
      phone: this.fb.control('', [ Validators.required]),
      attending: this.fb.control('', [ Validators.required]),
      guest: this.fb.control(null, [ Validators.required]),
      diet: this.dietArray,
      newsletter: this.fb.control(false),
      dob: this.fb.control('', [ Validators.required])
    })
  }

  processForm(form: NgForm) {
    const rsvp = this.rsvpForm.value;   
    console.log(rsvp);
    form.reset();
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  email='faye4870@gmail.com'
  contactForm!: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      console.log('Message envoyé:', this.contactForm.value);
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
      setTimeout(() => this.success = false, 3000);
    }
  }
}

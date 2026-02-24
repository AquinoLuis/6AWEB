import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css'
})
export class TemplateDemoComponent {
  title = 'Template Driven Form';
  username = '';
  email = '';
  password = '';
  role = '';
  gender = '';
  status = '';
  comments = '';

  submitted = false;
  submittedData: any = null;

  onSubmit() {
    this.submitted = true;
    this.submittedData = {
      username: this.username,
      email: this.email,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    };
  }
}

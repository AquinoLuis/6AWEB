import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_mat_demo');
  isDarkMode = false;
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}

import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient';
import { User, Product } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('REST_API_DASHBOARD');
  httpusers: User[] = [];
  httpproducts: Product[] = [];

  constructor(private httpService: HttpclientService) {}

  ngOnInit() {
    this.httpService.getUsersRemotely().subscribe((data: User[]) => {
      this.httpusers = data.slice(0, 5);
    });


    this.httpService.getProductsRemotely().subscribe((data: any) => {

      this.httpproducts = data.products.slice(0, 5);
    });
  }
}

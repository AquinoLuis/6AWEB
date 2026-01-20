import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-share-data');

  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
  }[] = [];

  public products: {
    pid: number,
    prodname: string,
    desc: string,
    price: string,
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productService: Products
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}

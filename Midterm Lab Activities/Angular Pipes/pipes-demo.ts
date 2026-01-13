import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe,  JsonPipe,  LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, AsyncPipe, DecimalPipe,TitleCasePipe, PercentPipe, JsonPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  price = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  time$ = interval(1000)
  .pipe(map(val => new Date()))

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  name = 'Angular Pipe';

  currentProgress: number = 0.25;
  fullValue: number = 1.3495;

  students = {
    Susane: [4, 3, 2, 1, 5],
    Jenifer: [3, 5, 2, 2],
    John: [5, 3, 3, 4, 1]
  };

   product = {
    id: 1,
    name: 'Laptop',
    details: {
      brand: 'ExampleBrand',
      price: 999.99
    },
    tags: ['electronics', 'computers']
  };


}




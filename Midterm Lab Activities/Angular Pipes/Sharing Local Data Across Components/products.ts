import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
  return [
    {
      pid: 101,
      prodname: 'Logitech Mouse',
      desc: '6 Button Mechanical Mouse',
      price: '899.00',
    },
    {
      pid: 102,
      prodname: 'JBL BT Speaker',
      desc: 'Waterproof Radio 360 Surround',
      price: '1,099.00',
    },
    {
      pid: 103,
      prodname: 'Mechanical Keyboard',
      desc: 'Hot-swappable RGB Backlit',
      price: '2,395.00',
    },
    {
      pid: 104,
      prodname: 'Oculus Meta',
      desc: 'All-in-one Gaming Headset',
      price: '22,450.00',
    }
  ];
}
}

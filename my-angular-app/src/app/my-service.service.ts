import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor() { }

  getData(): string {
    return 'Hello from MyService!';
  }
}

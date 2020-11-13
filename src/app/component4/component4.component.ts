import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  template: `<p>component4 works!</p>`,
  styles: [`p {font-size: 3rem}`]
})
export class Component4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HelloWorld',
  template: '<h2>{{title}}</h2>'
})
export class HelloWorldComponent implements OnInit {

  title = "Hello World";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent implements OnInit {

  constructor() { }

  creditCardNumber : String  ='1234567896564321';
  colorList = ['yellow', 'red', 'green', 'blue', 'black'];
  interval :number = 1000;

  ngOnInit() {
  }

}

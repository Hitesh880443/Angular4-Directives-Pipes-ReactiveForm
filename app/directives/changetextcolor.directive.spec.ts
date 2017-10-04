import { ChangetextcolorDirective } from './changetextcolor.directive';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
template: `<p appChangetextcolor [txtcolor1]="['yellow', 'red', 'green', 'blue', 'black']">The color of this text will cycle through colors after given intervals (1 Sec )</p>`
})

class TestComponent {

}

describe('CycleColorsDirective', () => {
let fixture: ComponentFixture<TestComponent>;
let component: TestComponent;
let element;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [ChangetextcolorDirective, TestComponent]
}).compileComponents();

fixture = TestBed.createComponent(TestComponent);
component = fixture.componentInstance;
element = fixture.debugElement.query(By.directive(ChangetextcolorDirective));
fixture.detectChanges();

});

it('the color   should change after specofied interval', () => {
console.log(element);
  let colors = element.attributes['ng-reflect-colors-array'];

let index = 0;

setTimeout(function() {

  let stinterval = setInterval(function(){

    expect(element.nativeElement.style.color).toBe(colors[index]);
    index++;
    if (index + 1 === colors.length) {
     clearInterval(stinterval);
    }

  }, 1000);

}, 200);

});
});

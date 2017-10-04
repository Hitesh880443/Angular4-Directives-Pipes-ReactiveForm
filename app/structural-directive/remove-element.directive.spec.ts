import { RemoveElementDirective } from './remove-element.directive';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
@Component({
template: `<p *appRemoveElement="5000">The element will be removed from DOM after 5 Seconds</p>`
})
class TestComponent {

}
describe('RemoveElementDirective', () => {
let fixture: ComponentFixture<TestComponent>;

beforeEach(() => {
TestBed.configureTestingModule({
declarations: [ RemoveElementDirective, TestComponent]
}).compileComponents();

fixture = TestBed.createComponent(TestComponent);

fixture.detectChanges();
});

it('The p tag is created', () => {
let element = fixture.debugElement;
element.queryAll(By.directive(RemoveElementDirective));

expect(element.children.length).toBe(1);
});

it('the p tag should disappear after 1 sec', () => {
let element = fixture.debugElement.queryAll(By.directive(RemoveElementDirective))[0];
setTimeout(function(){
expect(element).toBeFalsy();
}, 6000);
});
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardMaskPipe } from  '../../pipes/card-mask.pipe';
import { DirectivesPipesComponent } from './directives-pipes.component';
import { ChangetextcolorDirective } from '../../directives/changetextcolor.directive';
import { RemoveElementDirective } from '../../structural-directive/remove-element.directive';


describe('DirectivesPipesComponent', () => {
  let component: DirectivesPipesComponent;
  let fixture: ComponentFixture<DirectivesPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesPipesComponent, CardMaskPipe, ChangetextcolorDirective, RemoveElementDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

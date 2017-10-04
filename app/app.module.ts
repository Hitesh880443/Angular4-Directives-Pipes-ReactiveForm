import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectivesPipesComponent } from './pages/directives-pipes/directives-pipes.component';
import { FormComponent } from './pages/form/form.component';
import { routing } from './app.routes';
import { CardMaskPipe } from './pipes/card-mask.pipe';
import { ChangetextcolorDirective } from './directives/changetextcolor.directive';
import { RemoveElementDirective } from './structural-directive/remove-element.directive'; 
@NgModule({
  declarations: [
    AppComponent,
    DirectivesPipesComponent,
    FormComponent,
    CardMaskPipe,
    ChangetextcolorDirective,
    RemoveElementDirective
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

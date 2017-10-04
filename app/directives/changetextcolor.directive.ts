import { Directive ,ElementRef, Input,Renderer,OnInit} from '@angular/core';

@Directive({
  selector: '[appChangetextcolor]'
})
export class ChangetextcolorDirective implements OnInit{ 
  constructor(public el: ElementRef, public renderer: Renderer) {}
  @Input() txtcolor1: any;
  counterVal : number = 0;
ngOnInit(){
  // Use renderer to render the emelemt with styles
  console.log('color',this.txtcolor1[0]);
    

    setInterval(()=> {
      this.changeColor();
    
      
    },1000); 
    }


changeColor(){
  console.log('color',this.txtcolor1[this.counterVal]);
  this.renderer.setElementStyle(this.el.nativeElement, 'color',this.txtcolor1[this.counterVal]) 
  this.counterVal ++;
  if(this.counterVal>this.txtcolor1.length){
   this.counterVal=0;
  }
   
}
  



}

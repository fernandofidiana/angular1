import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input()
  text:string='';
  @Input()
  color:string='';
  @Input()
  fn:any =()=>{};

  @Output()
  presionar = new EventEmitter<any>();

  emitirEvento(){
    this.presionar.emit("He hhecho click");
  }
}

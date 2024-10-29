import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CronoComponent } from './components/crono/crono.component';
import { ButtonComponent } from "./components/button/button.component";
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CronoComponent, RouterLink, ButtonComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'helloworld';
  numero:number=0;

  constructor(){
    setInterval(()=>{
      this.numero=this.numero==9?0:(this.numero+1);
      
    },1000);
  }

  resetearSegundos():void{
    this.numero=0;
  }

  hazalgo(event:any):void{
    console.log(event)
  }
}

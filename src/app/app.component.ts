import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 inheritatecountervalue:number = 4;

 counterChangeMethod($event){
    //console.log($event);
    this.inheritatecountervalue=$event;
  }
}

import { Component, OnInit ,EventEmitter,Input} from '@angular/core';

@Component({
  
  selector: 'app-counter', 
  outputs:["counterChange"],
  inputs:["counterValue"],
  template:`<div><button (click)="onplushaction()"> + </button>
{{counterValue}}
          <button (click)="onminuseaction()"> -</button>

 </div>`

                                   //'./counter.component.html',
                                     // styleUrls:     []                                                     //['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counterValue:number = 0;
   counterChange:EventEmitter<number>;


  constructor() { 
    // this.counterValue=0;
    this.counterChange=new EventEmitter();
  }

onplushaction(){
  this.counterValue= this.counterValue+1;
   this.counterChange.emit(this.counterValue)
       return false;

}

onminuseaction(){
   this.counterValue= this.counterValue-1;
   this.counterChange.emit(this.counterValue)
        return false;

}
  ngOnInit() {
  }

}

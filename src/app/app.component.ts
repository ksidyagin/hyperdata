import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
   data: any;
   activeState: boolean[] = [true, false, false];
   chartOptions: any;
   constructor() {}

    ngOnInit() {
      this.data = {
         datasets: [{
             data: [
                 11,
                 16,
                 7,
                 3,
                 14
             ],
             backgroundColor: [
                 "#42A5F5",
                 "#66BB6A",
                 "#FFA726",
                 "#26C6DA",
                 "#7E57C2"
             ],
             label: 'My dataset'
         }],
         labels: [
             "Red",
             "Green",
             "Yellow",
             "Grey",
             "Blue"
         ]
     };
   }

}

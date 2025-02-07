import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../model/grocery.model';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.scss'
})
export class GroceryComponent {
  groceries$?: Observable<Grocery[]>;

  onTypeChange(event: any) {

  }
  increment(groc:any) {

  }

  decrement(groc:any) {

  }
  
}

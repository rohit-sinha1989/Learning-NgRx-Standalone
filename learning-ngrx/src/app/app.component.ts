import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryComponent } from './component/grocery/grocery.component';
import { BucketComponent } from './component/bucket/bucket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroceryComponent, BucketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning-ngrx';
}

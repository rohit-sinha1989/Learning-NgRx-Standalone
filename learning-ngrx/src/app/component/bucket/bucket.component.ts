import { Component } from '@angular/core';
import { Observable,async } from 'rxjs';
import { Bucket } from '../../../model/bucket.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.scss'
})
export class BucketComponent {
  myBucket$?:Observable<Bucket[]>;
}

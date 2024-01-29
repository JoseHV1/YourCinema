import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-cast',
  templateUrl: './card-cast.component.html',
  styleUrls: ['./card-cast.component.scss']
})
export class CardCastComponent {
  @Input() cast!: any;

  constructor(private router: Router){}

  redirectDetails(id: string): void{
    this.router.navigate([`details/cast/${id}`]);
  }
}

import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  currentNumberPage: number = 1;
  listNumberPagination: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  onChangePage(number: number) {
    this.changePage.emit(number);
    this.currentNumberPage = number;
  }
}

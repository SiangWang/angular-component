import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  @Input() pageSize: number;
  @Input() skip: number;
  @Input() total: number;
  @Output() pageChange = new EventEmitter<{ skip: number; take: number; }>();

  prev() {
    if (this.skip - this.pageSize < 0) {
      return;
    }
    this.onPageChange(this.skip -= this.pageSize);
  }

  next() {
    if (this.skip + this.pageSize >= this.total) {
      return;
    }
    this.onPageChange(this.skip += this.pageSize);
  }

  private onPageChange(skip: number) {
    this.pageChange.emit({ skip, take: this.pageSize });
  }

  floor(n: number) { return Math.floor(n); }

  ceil(n: number) { return Math.ceil(n); }

}

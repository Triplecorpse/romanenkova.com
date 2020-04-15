import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pagesLength: number;
  @Input() pagesActive: Array<number>;
  @Output() pageChange = new EventEmitter<number>();

  repeatable: Array<number>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //TODO: look for param "page"
    //TODO: set param "page" if in input
    this.route.params.subscribe((params: Params) => {

    });
    this.setRepeatable();
  }

  ngOnChanges({pagesActive, pagesLength}: SimpleChanges) {
    if (pagesActive) {
      this.goToPage(pagesActive.currentValue);
    }

    if (pagesLength) {
      this.setRepeatable();
    }
  }

  goToPage(page: number) {
    this.pageChange.emit(page)
    //TODO: set param "page"
  }

  private setRepeatable() {
    this.repeatable = new Array<number>(this.pagesLength);
  }
}

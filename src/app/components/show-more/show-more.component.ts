import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import IPage from '../../../../interfaces/iPage';
import {IContact} from '../../../../interfaces/IContact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() data: IPage<IContact>;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
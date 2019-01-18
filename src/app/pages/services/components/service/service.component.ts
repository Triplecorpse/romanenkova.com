import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IService} from '../../../../interfaces/IService';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceComponent implements OnInit {
  @Input() service: IService;

  constructor() {
  }

  ngOnInit() {
  }

}

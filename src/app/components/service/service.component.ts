import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Database} from '../../../../_interface/IMongooseSchema';
import {PageDataGuardService} from '../../page-data-guard.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceComponent implements OnInit {
  @Input() service: Database.IService;

  constructor() {
  }

  ngOnInit() {
  }
}

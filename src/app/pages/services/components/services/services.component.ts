import {Component, OnInit} from '@angular/core';
import {PageDataGuardService} from '../../../../page-data-guard.service';
import {Database} from '../../../../../../_interface/IMongooseSchema';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  public services: Array<Database.IService>;

  constructor(private pageDataGuardService: PageDataGuardService) { }

  ngOnInit() {
    this.services = this.pageDataGuardService.pageData.service.items;
  }
}

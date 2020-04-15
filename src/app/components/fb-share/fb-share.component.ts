import {Component, Input} from '@angular/core';
import {LocationService} from '../../services/location.service';

@Component({
  selector: 'app-fb-share',
  templateUrl: './fb-share.component.html',
  styleUrls: ['./fb-share.component.scss']
})
export class FbShareComponent {
  @Input() text: string;

  get url(): string {
    return this.location.href;
  }

  constructor(private location: LocationService) {
  }
}

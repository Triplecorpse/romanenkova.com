import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {PageDataGuardService} from '../../../page-data-guard.service';
import {INavItem} from '../../../../../_interface/INavItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  @Input() public isArticlePage: boolean;
  @Input() public isArticlesPage: boolean;

  public nav: Array<INavItem>;
  private anchorMap: Array<{ anchor: string, href: string }> = [
    {href: 'about', anchor: 'about'},
    {href: 'services', anchor: 'services'},
    {href: 'diplomas', anchor: 'diplomas'},
    {href: 'articles', anchor: 'articles'},
    {href: '#contacts', anchor: 'contacts'}
  ];

  constructor(private pageDataGuardService: PageDataGuardService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnChanges() {
    setTimeout(() => {
      console.log('s, -e');
      console.log(this.isArticlesPage);
      console.log(this.isArticlePage);
      this.changeDetectorRef.markForCheck();
    }, 100);
  }

  ngOnInit() {
    this.nav = this.pageDataGuardService.pageData.index.nav.map((navItem: INavItem): INavItem => {
      const anchor: string = navItem.anchor;
      const navUrlItem = this.anchorMap.find(anchorMapItem => anchorMapItem.anchor === anchor);
      navItem.href = navUrlItem.href;

      return navItem;
    });
  }
}

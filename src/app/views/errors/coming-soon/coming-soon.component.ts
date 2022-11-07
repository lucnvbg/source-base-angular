import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { RouterLinkDefault } from 'app/theme/components/menu/menu';

@Component({
  selector: 'coming-soon',
  templateUrl: './coming-soon.component.html',
})
export class CommingSoonComponent {
  public settings: Settings;
  constructor(public appSettings: AppSettings, public router: Router) {
    this.settings = this.appSettings.settings;
  }

  searchResult(): void {
    this.router.navigate(['/search']);
  }

  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
  }

  back() {
    this.router.navigate([RouterLinkDefault]);
  }
}

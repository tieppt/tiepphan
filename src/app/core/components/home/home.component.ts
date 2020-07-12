import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { environment } from '@tp-blog/env/environment';
import { map } from 'rxjs/operators';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'tp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$ = this.scullyRoutesService.available$.pipe(
    map(routes => routes.filter(route => route.layout === 'post'))
  );
  constructor(
    private seoService: SeoService,
    private scullyRoutesService: ScullyRoutesService,
  ) { }

  ngOnInit(): void {
    this.seoService.setData({
      author: 'Tiep Phan',
      title: 'Tiep Phan | Lập Trình Thật Kỳ Diệu',
      url: environment.siteUrl,
      description: 'Welcome to my blog. I\'m Tiep Phan, a Google Developer Expert in Angular.'
    });
  }

}

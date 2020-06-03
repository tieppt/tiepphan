import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { SeoService } from '../core/services/seo.service';

declare var ng: any;

@Component({
  selector: 'tp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scullyRoutesService: ScullyRoutesService,
    private seoService: SeoService,
  ) { }

  ngOnInit() {
    this.scullyRoutesService.getCurrent().subscribe({
      next: (route) => {
        console.log(route);
        this.seoService.setData({
          title: route.title,
          description: route.description,
          author: route.author,
          image: route.image,
          url: route.route,
          keywords: route.tags,
          type: 'article',
          published: route.date
        });
      }
    });
  }

}

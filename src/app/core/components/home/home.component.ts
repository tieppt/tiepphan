import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { environment } from '@tp-blog/env/environment';

@Component({
  selector: 'tp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.setData({
      author: 'Tiep Phan',
      title: 'Tiep Phan | Lập Trình Thật Kỳ Diệu',
      url: environment.siteUrl,
      description: 'Welcome to my blog. I\'m Tiep Phan, a Google Developer Expert in Angular.'
    });
  }

}

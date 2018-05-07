import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  pageData;

  constructor(public router: Router, public route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.route.data
        .subscribe((data) => {
          this.pageData = route.snapshot.firstChild.data;
        });
        console.log(this.pageData.pageTitle, this.pageData.pageType);
      }
    });
   }

  ngOnInit() {
  }

}

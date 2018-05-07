import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  carouselOptions: any = {
    nav: true,
    center: true,
    loop: true,
    margin: 0, 
    dots: true,  
    items: 1, 
    navText: ["<i class='material-icons'>chevron_left</i>", "<i class='material-icons'>chevron_right</i>"]
}

  ngOnInit() {
  }

}

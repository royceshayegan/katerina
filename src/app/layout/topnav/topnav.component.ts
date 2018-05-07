import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toggleMenu() {
    document.getElementById("nav-icon").classList.toggle('open');
    document.getElementById("mobile-nav").classList.toggle('open');
  }

  closeMenu() {
    document.getElementById("nav-icon").classList.remove('open');
    document.getElementById("mobile-nav").classList.remove('open');
  }

}
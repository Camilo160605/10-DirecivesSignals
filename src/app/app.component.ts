import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuItems! : MenuItem[]


  ngOnInit(): void {
    this.menuItems = [
      { label: 'Products Page', routerLink: 'products' },
      { label: 'Bootstrap Page', routerLink: 'bootstrap' },
  ];
  }




}

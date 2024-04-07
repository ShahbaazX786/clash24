import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  NavbarItems: MenuItem[] | undefined;
  constructor() {}

  ngOnInit() {
    this.NavbarItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Clans',
        icon: 'pi pi-user-plus',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
      {
        label: 'Season Pass',
        icon: 'pi pi-calendar',
      },
      {
        label: 'My Profile',
        icon: 'pi pi-user',
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
      },
    ];
  }
}

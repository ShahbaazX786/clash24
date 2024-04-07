import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  FooterItems: MenuItem[] | undefined;
  constructor() {}

  ngOnInit(): void {
    this.FooterItems = [
      {
        label: 'Clash24 &copy;',
      },
      {
        label: '2024',
      },
      {
        label: 'All Rights Reserved',
      },
    ];
  }
}

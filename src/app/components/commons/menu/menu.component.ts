import { Component, OnInit } from '@angular/core';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import {User as user} from 'src/app/model/admin.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class MenuComponent implements OnInit {

  constructor() { }

  user: user[] = [
    {
      nombreUsuario: "Franck",
    }
  ];

  ngOnInit(): void {
  }

}

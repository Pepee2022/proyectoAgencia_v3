import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { User } from 'src/app/model/admin.model';

import { PacketDataService } from 'src/app/services/packet-data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class MenuComponent implements OnInit {

  constructor(private packetDataService: PacketDataService) {
    this.user = packetDataService.user;
  }

  user: User[] = [

  ];

  ngOnInit(): void {
  }

}

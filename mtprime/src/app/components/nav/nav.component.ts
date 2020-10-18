import { Component, OnInit } from '@angular/core';


import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  loggedInUser: string;

  items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label:'Dashboard',
                icon:'pi pi-fw pi-eye',
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'Event Table',
                        icon:'pi pi-fw pi-table'
                    },
                    {
                        label:'Add Events',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                ]
            },
            {
                label:'Volunteers',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'Volunteer Table',
                        icon:'pi pi-fw pi-table',

                    },
                    {
                        label:'Add Volunteer',
                        icon:'pi pi-fw pi-user-plus',

                    },
                ]
            },
            {
                label:'Settings',
                icon:'pi pi-fw pi-cog',
                items:[
                    {
                        label:'Family ID',
                        icon:'pi pi-fw pi-key',
                    },
                ]
            }
        ];
  }

}

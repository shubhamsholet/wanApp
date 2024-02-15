import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked',
  templateUrl: './linked.page.html',
  styleUrls: ['./linked.page.scss'],
})
export class LinkedPage implements OnInit {

  divicesdetails: any = [
    {
      divicename: 'manas hospital',
      location: 'delhi',
      videoscount: 10,
      edit: true,
    },
    {
      divicename: 'parveen hospital',
      location: 'mumbai',
      videoscount: 110,
      edit: false,
    },
    {
      divicename: 'ravindra hospital',
      location: 'gurgaun',
      videoscount: 20,
      edit: true,
    },
    {
      divicename: 'paras hospital',
      location: 'delhi',
      videoscount: 110,
      edit: false,
    },
    {
      divicename: 'rohit clinic',
      location: 'bawal',
      videoscount: 1,
      edit: true,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

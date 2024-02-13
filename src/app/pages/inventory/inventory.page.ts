import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('revenue') revenue: any;
  @ViewChild('duration') duration: any;

  isOpen = false;
  openit = false;

  revenuetype(e: Event) {
    this.revenue.event = e;
    this.openit = true;
  }
  defaultduration(e: Event) {
    this.duration.event = e;
    this.isOpen = true;
  }

  openitdismissbtn() {
    this.openit = false;
  }
  openitsubmitbtn() {

  }
  isopendismiss() {
    this.isOpen = false;
  }
  isopensubmit() {

  }
}

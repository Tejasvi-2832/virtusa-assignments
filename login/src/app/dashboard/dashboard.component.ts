import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dateToday: string;
  welcome: string;
  name: string;
  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date().toDateString();
    this.welcome = "Welcome to dashboard!"
    this.name = "You are authenticated!"
  }

}

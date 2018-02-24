import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.css']
})
export class NavigationComponent implements OnInit {
  title: string;
  constructor() {
    this.title = 'navigation';
  }

  ngOnInit() {}
}

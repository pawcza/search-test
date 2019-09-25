import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public hasResults = false;

  constructor() { }

  ngOnInit() {
  }

  executeSearch() {
    this.hasResults = true;
  }

  clearSearch() {
    this.hasResults = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { appointmentCard } from 'src/models/appointmentCard';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchedFor:boolean = false;
  searchResult: appointmentCard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

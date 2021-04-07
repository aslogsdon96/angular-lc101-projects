import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  links = ['https://nookipedia.com/','https://bobs-burgers.fandom.com/','https://www.launchcode.org/'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://dodo.ac/np/images/thumb/4/44/Sprinkle_NH.png/136px-Sprinkle_NH.png';
  image3 = 'https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero?v=2021040605';

  constructor() { }

  ngOnInit() {
  }

}
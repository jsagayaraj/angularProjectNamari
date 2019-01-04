import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../config.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {

  gallery = {};

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.gallery = this.getGallery();
  }
  
  getGallery(){
    return this.config.getConfig().gallery;
  }
}

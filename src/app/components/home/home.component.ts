import { Component, OnInit } from '@angular/core';
import { AdbService } from '../../services/adb/adb.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  public onchange(e) {
  }

}

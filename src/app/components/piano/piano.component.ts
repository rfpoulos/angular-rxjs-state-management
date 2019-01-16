import { Component, OnInit } from '@angular/core';
import { KeypressService } from 'src/app/services/keypress/keypress.service';

@Component({
  selector: 'piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {

  constructor(
    private keypressService: KeypressService
  ) { }

  ngOnInit() {

  }

}

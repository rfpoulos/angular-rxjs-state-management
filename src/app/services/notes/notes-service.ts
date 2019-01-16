import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  private notes = {
    a: () => new Audio('http://www.vibrationdata.com/piano_octave_A_A.mp3'),
    b: () => new Audio('http://www.vibrationdata.com/piano_B.mp3'),
    c: () => new Audio('http://www.vibrationdata.com/piano_middle_C.mp3'),
    d: () => new Audio('http://www.vibrationdata.com/piano_D.mp3'),
    e: () => new Audio('http://www.vibrationdata.com/piano_E.mp3'),
    f: () => new Audio('http://www.vibrationdata.com/piano_F.mp3'),
    g: () => new Audio('http://www.vibrationdata.com/piano_G.mp3')
  }

  public playNote(note): void {
    this.notes[note]()
      .play();
  }
}

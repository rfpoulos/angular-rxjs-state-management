import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes-service';

@Component({
  selector: 'piano-key',
  templateUrl: './piano-key.component.html',
  styleUrls: ['./piano-key.component.css']
})
export class PianoKeyComponent implements OnInit {
  @Input() note: string;

  private isPressed: boolean = false; 
  constructor(
    private notesService: NotesService,
  ) { }

  ngOnInit() {
  }

  public playNote() {
    this.notesService.playNote(this.note);
  }

  public setClasses() {
    const classes = {
      note: true,
      pressed: this.isPressed
    }
    return classes;
  }
}

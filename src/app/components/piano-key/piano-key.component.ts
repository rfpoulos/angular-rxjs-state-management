import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes/notes-service';
import { StoreService } from 'src/app/services/store/store.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'piano-key',
  templateUrl: './piano-key.component.html',
  styleUrls: ['./piano-key.component.css']
})
export class PianoKeyComponent implements OnInit {
  @Input() note: string;

  private isPressed: boolean = false;
  private pressed$: Observable<boolean>;

  constructor(
    private notesService: NotesService,
    private storeService: StoreService
  ) { }

  ngOnInit() {
    this.pressed$ = this.storeService.get(["keys", this.note]);
    this.pressed$.subscribe((bool) => this.onPress(bool));
  }

  public onClick() {
    this.storeService.set(["keys", this.note], true);
    setTimeout(() => {
      this.storeService.set(["keys", this.note], false);
    }, 250);
  }

  public setClasses() {
    const classes = {
      note: true,
      pressed: this.isPressed
    }
    return classes;
  }

  private onPress(bool) {
    this.isPressed = bool;
    if (bool) {
      this.notesService.playNote(this.note);
    }
  }
}

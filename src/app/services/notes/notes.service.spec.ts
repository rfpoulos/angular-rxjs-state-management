import { TestBed, inject } from '@angular/core/testing';
import { NotesService } from 'src/app/services/notes/notes-service';


describe('NotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesService]
    });
  });

  it('should be created', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));
});

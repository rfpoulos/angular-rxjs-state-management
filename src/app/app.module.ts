import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PianoKeyComponent } from 'src/app/components/piano-key/piano-key.component';
import { PianoComponent } from './components/piano/piano.component';

@NgModule({
  declarations: [
    AppComponent,
    PianoKeyComponent,
    PianoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

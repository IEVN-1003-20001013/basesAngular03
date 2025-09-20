import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeslistComponent } from './heroes/heroeslist/heroeslist.component';
import { HeroeFilterPipe } from './heroes/heroe-filter.pipe';
import { OperaBasComponent } from './formularios/opera-bas/opera-bas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeslistComponent,
    HeroeFilterPipe,
    OperaBasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSortModule, fadeInContent } from '@angular/material';
import { PublicApiService } from './services/public-api.service';
import { SearchComponent } from './components/search/search.component';
import { MatTableModule } from '@angular/material/table';
import { BooleanIconPipe } from './misc/boolean-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BooleanIconPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [PublicApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

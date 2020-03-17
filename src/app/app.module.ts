import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchboxModule } from './searchbox/searchbox.module';
import { ViewComponent } from './view/view.component';
import { ChartsModule } from 'ng2-charts';
import { TileComponent } from './tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchboxComponent,
    ViewComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SearchboxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

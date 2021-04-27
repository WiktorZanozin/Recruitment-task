import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './definition/definition.component';
import { LoremComponent } from './lorem/lorem.component';
import { SummaryComponent } from './summary/summary.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    DefinitionComponent,
    LoremComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

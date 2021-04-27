import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './wizard/material.module';
import { RouterModule, Routes } from '@angular/router';
import { DefinitionComponent } from './definition/definition.component';
import { LoremComponent } from './lorem/lorem.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes =  [
  { path: '', redirectTo: '/definition', pathMatch: 'full' },
  { path: 'definition', component: DefinitionComponent, data: {label: 'DEFINITION' , step: "1", icon:false}},
  { path: 'choose_prod', component: LoremComponent, data: {label: 'CHOOSE PRODUCTS', step: "2", icon:false}},
  { path: 'exclude_prod', component: LoremComponent, data: {label: 'EXCLUDE PRODUCTS', step: "3", icon:false}},
  { path: 'bonus_prod', component: LoremComponent, data: {label: 'BONUS PRODUCTS', step: "4", icon:true}},
  { path: 'products_lim', component: LoremComponent, data: {label: 'PRODUCTS LIMITS', step: "5", icon:true}},
  { path: 'choose_clients', component: LoremComponent, data: {label: 'CHOOSE CLIENTS', step: "6", icon:false}},
  { path: 'exclude_clients', component: LoremComponent,data: {label: 'EXCLUDE CLIENTS', step: "7", icon:false}},
  { path: 'clients_lim', component: LoremComponent,data: {label: 'CLIENTS LIMITS', step: "8", icon:false}},
  { path: 'summary', component: SummaryComponent, data: {label: 'SUMMARY', step: "9", icon:false}}
];

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

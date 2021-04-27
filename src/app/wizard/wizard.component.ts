import { Component, OnInit } from '@angular/core';
import { routes } from '../app.module';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})

export class WizardComponent{
  routes = routes;
}

import { Component, OnInit } from '@angular/core';
import { JSONSchema, StorageMap } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';
import { routes } from './app.module';
import { BusinessConditionType, ConditionType, PortalType, Definition } from './models/definition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  disableLink: boolean = true;
  routes = routes.slice(1);
  title = 'recruitment-task';
  marketingDefinition$: Observable<Definition>;

  constructor(private storage: StorageMap) {}

  ngOnInit() {
    const schema: JSONSchema = {
      type: 'object',
      properties: {
        marketingName: { type: 'string' },
        technicialName: { type: 'string' },
        description: { type: 'string' },
        portalType: { type: 'string', enum: Object.values(PortalType) },
        conditionType: { type: 'string', enum: Object.values(ConditionType) },
        buisnessConditionType: { type: 'string', enum: Object.values(BusinessConditionType) },
        otherPromotionsConnection: { type: 'boolean' },
        backPromotion: { type: 'boolean' },
        startDate: {type:'string'},
        endDate: {type:'string'},
      },
       required: ['marketingName']
    };
    this.storage.clear();
    this.marketingDefinition$ = this.storage.watch<Definition>('marketingDefinition', schema);
    this.marketingDefinition$.subscribe(
      {
        next: (values) => {
          if(values){
            (!!values.marketingName || !!values.technicialName) ? this.disableLink = false : this.disableLink = true
          } else this.disableLink = true;
        },
        error: (error) => { console.log(error) },
      })
  }

}

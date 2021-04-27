import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StorageMap } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';
import { BusinessConditionType, ConditionType, PortalType } from '../models/definition';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements OnInit{

  marketingForm = new FormGroup({
    marketingName : new FormControl(''),
    technicialName : new FormControl(''),
    description: new FormControl(''),
    portalType: new FormControl(PortalType.Portal1),
    conditionType: new FormControl(ConditionType.Condition1),
    buisnessConditionType: new FormControl(BusinessConditionType.BasePrice),
    otherPromotionsConnection: new FormControl(false),
    backPromotion: new FormControl(false),
    startDate: new FormControl(''),
    endDate: new FormControl('')
  })
  constructor(private storage: StorageMap) {}

  ngOnInit(){
    this.setDefault();
    this.marketingForm.valueChanges.subscribe((values:any) => {
        values.startDate? values.startDate  = values.startDate.toJSON() : null;
        values.endDate? values.endDate  = values.endDate.toJSON() : null;
      return this.storage.set('marketingDefinition', values).subscribe(() => {})
    })
  }

  setDefault() {
    this.storage.get('marketingDefinition').subscribe({
      next: (values:any)=> {
        if(values){
          values.startDate? values.startDate =new Date(values.startDate) : null;
          values.endDate? values.endDate = new Date(values.endDate) : null;

          this.marketingForm.setValue(values)
        }},
      error: (error) => {console.log(error)},
    })
  }

  keys = Object.keys;
  portalTypes = PortalType;
  conditionTypes = ConditionType;
  buisnessConditionTypes = BusinessConditionType;
}

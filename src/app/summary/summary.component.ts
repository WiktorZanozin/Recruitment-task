import { Component, OnInit } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Definition } from './../models/definition';
import { AppComponent } from './../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  submitted: boolean = false;
  marketingNames = [{id : 1, marketingName: "Mock Value 1 Link not working"},
                    {id:2, marketingName: "Mock Value 2 Link not working"}];

  displayedColumns: string[] = ['marketingName', 'editIcon', 'deleteIcon'];

  constructor(private storage: StorageMap, private route: Router) { }

  ngOnInit(): void {
    this.storage.get('marketingDefinition').subscribe({
      next: (values:Definition)=> values.marketingName?
       this.marketingNames.push({id: this.marketingNames.length + 1, marketingName: values.marketingName}) : null
    })
  }

  submit(): void{
    this.submitted = true;
  }

  deleteMarketing(id:number):void{
    this.marketingNames=this.marketingNames.filter((m)=> (m.id!== id))
    this.storage.clear().subscribe(() => {});
    this.route.navigateByUrl('/definition');
  }
}

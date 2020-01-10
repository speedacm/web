import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Content.service';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
})

export class PolicyComponent implements OnInit {
  public policies: Policy[];

  constructor(private contentService: ContentService) {

  }

  ngOnInit() {

    this.contentService.AllPolicies()
      .subscribe((data: Policy[]) =>
        this.policies = data
      );

 
  }
}

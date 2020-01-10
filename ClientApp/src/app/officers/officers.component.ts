import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Content.service';

@Component({
  selector: 'app-home',
  templateUrl: './officers.component.html',
})

export class OfficersComponent implements OnInit {
  public officers: Officer[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.AllOfficers()
      .subscribe((data: Officer[]) => this.officers = data);
  }
}

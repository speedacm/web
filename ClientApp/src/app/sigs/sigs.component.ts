import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Content.service';

@Component({
  selector: 'app-home',
  templateUrl: './sigs.component.html',
})

export class SigsComponent implements OnInit {
  public infos: SigInfo[];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.AllSigInfo()
      .subscribe((data: SigInfo[]) => this.infos = data);
  }
}

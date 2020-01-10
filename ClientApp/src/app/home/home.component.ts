import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  public activities: Activity[];
  public dateThreshold = 30;

  constructor(private contentService: ContentService) {

  }

  ngOnInit() {
    const daysFromNow = (date: Date): number =>
      Math.ceil((date.getTime() - Date.now()) / (1000 * 3600 * 24));

    this.contentService.AllActivities()
      .subscribe((data: Activity[]) =>
        this.activities = data.filter(act =>
          daysFromNow(new Date(act.date)) <= this.dateThreshold)
      );

    // this.activities = [
    //   { Name: 'have fun', Description: '<p style="color: red;"> what is up </p>', Date: new Date() },
    //   { Name: 'have no fun', Description: '<p style="color: green;"> what is down </p>', Date: new Date() },
    //   { Name: 'have fun', Description: '<p style="color: black;"> what is up </p>', Date: new Date() },
    //   { Name: 'have no fun', Description: '<p style="color: yellow;"> what is up </p>', Date: new Date() }
    // ];

  }
}

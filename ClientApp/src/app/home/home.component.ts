import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Content.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
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
    }
}

import { Component, OnInit } from '@angular/core';
import { ContentService } from '../Content.service';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
})

export class NotesComponent implements OnInit {
    public note: MeetingNotes[];
   

    constructor(private contentService: ContentService) {

    }

    ngOnInit() {
        
        this.contentService.AllMeetingNotes()
            .subscribe((data: MeetingNotes[]) =>
                this.note = data
            );

        // this.activities = [
        //   { Name: 'have fun', Description: '<p style="color: red;"> what is up </p>', Date: new Date() },
        //   { Name: 'have no fun', Description: '<p style="color: green;"> what is down </p>', Date: new Date() },
        //   { Name: 'have fun', Description: '<p style="color: black;"> what is up </p>', Date: new Date() },
        //   { Name: 'have no fun', Description: '<p style="color: yellow;"> what is up </p>', Date: new Date() }
        // ];

    }
}

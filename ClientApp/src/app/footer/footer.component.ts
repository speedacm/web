import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    private time: Date;
    private handle?: number = null;

    ngOnInit(): void {
        (window as any).easterEgg = () => (window.location as any) = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        this.time = new Date();
    }

    camEnter(): void {
        this.handle = window.setInterval(() => this.time = new Date(), 3000);
    }

    camLeave(): void {
        window.clearInterval(this.handle);
        this.handle = null;
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    ngOnInit(): void {
        (window as any).blinky = () => document.getElementsByTagName('body').item(0).classList.toggle('blinky');
    }
}

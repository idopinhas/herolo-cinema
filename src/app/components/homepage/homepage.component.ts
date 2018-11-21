import {Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    @ViewChild('homeVideo') homeVideo: ElementRef;
    constructor() { }

    ngOnInit() {
        this.homeVideo.nativeElement.playbackRate = 0.8;
    }
}

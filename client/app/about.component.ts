import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
moduleId:module.id,
selector:'',
templateUrl:'./about.component.html'
})

export class AboutComponent implements OnInit{

    constructor(private title:Title) { }

    ngOnInit() {
        this.title.setTitle('About');
    }


}
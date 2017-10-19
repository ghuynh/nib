import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    
    public constructor(
        private router: Router
    ) { }
    ngOnInit() {
        
    }

    
}

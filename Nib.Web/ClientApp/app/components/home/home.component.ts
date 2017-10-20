import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { TitleServices } from '../../services/services';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    title: string = null;
    public constructor(
        private router: Router,
        private titleService: TitleServices
    ) { }
    ngOnInit() {
        this.titleService.getTitle()
            .subscribe(
            success => {
                this.title = success.json();
                },
                error => {
                    alert("There's some error occurred.");
                }
            )
        
    }

    
}

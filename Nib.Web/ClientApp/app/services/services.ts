import { Injectable, Inject} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class TitleServices {
    baseurl: string = null;
    constructor(private http: Http, @Inject('ORIGIN_URL') originUrl: string) {
        this.baseurl = originUrl;
    }
    getTitle() {
        return this.http.get(this.baseurl + '/home/title');
    }

    
}
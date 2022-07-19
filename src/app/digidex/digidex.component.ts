import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../services/url-api";

@Component({
  selector: 'app-digidex',
  templateUrl: './digidex.component.html',
  styleUrls: ['./digidex.component.scss']
})
export class DigidexComponent implements OnInit {

  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    this._httpService.getRequest<any>(UrlApi.rawUrlDigimon)
      .subscribe((jsonResponse) => {
        console.log(jsonResponse);
      }
    );
  }

}

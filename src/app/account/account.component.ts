import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../services/url-api";
import {Account} from "../../models/steamish/account";
import {SteamIshRequest} from "../../models/steamish/steam-ish-request";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  steamIshRequest: SteamIshRequest<Account> | undefined;

  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    this._httpService.getRequest<SteamIshRequest<Account>>(UrlApi.urlAccount)
      .subscribe((jsonResponse) => {
        console.log(jsonResponse.items);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {UrlApi} from "../../services/url-api";
import {Account} from "../../models/steamish/account";
import {SteamIshRequest} from "../../models/steamish/steam-ish-request";
import {sprintf} from "sprintf-js";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  steamIshRequest: SteamIshRequest<Account> | undefined;
  arrayItems: number[] = [10, 15, 20, 25, 50];

  constructor(private _httpService: HttpClientService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(page: number = 1, itemsPerPage: number = 20): void {
    this._httpService.getRequest<SteamIshRequest<Account>>(sprintf(UrlApi.urlAccountPaginate, page, itemsPerPage))
    .subscribe((jsonResponse) => {
        this.steamIshRequest = jsonResponse;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {JwtAuthService} from "../../services/jwt-auth.service";

@Component({
  selector: 'app-jwt-connexion',
  templateUrl: './jwt-connexion.component.html',
  styleUrls: ['./jwt-connexion.component.scss']
})
export class JwtConnexionComponent implements OnInit {

  constructor(private jwtAuth: JwtAuthService) { }

  ngOnInit(): void {
    this.jwtAuth.getToken().subscribe((jwtAuth) => {
      localStorage.setItem(JwtAuthService.KEY_TOKEN, jwtAuth.token);
      this.jwtAuth.getCountries().subscribe((countries) => {
        console.log(countries);
      });
    });
  }

}

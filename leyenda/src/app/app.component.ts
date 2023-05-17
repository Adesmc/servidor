import { Component, OnInit, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  NgcCookieConsentService,
  NgcNoCookieLawEvent,
  NgcInitializingEvent,
  NgcStatusChangeEvent,
} from "ngx-cookieconsent";
import { Subscription } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leyenda';
  constructor(private cookie:CookieService){

  }

  SetCookie(){
    this.cookie.set("userid","adminUser");
  }

  removeCookie(){
    this.cookie.deleteAll
  }
}

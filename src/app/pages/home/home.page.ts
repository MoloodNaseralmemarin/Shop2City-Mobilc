import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
   IonIcon,
   IonLabel,
   IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonTabs,IonTabBar,IonTabButton,IonTabs,IonIcon,
IonContent,
IonLabel,
RouterModule
],
})
export class HomePage {
  constructor() {}
}

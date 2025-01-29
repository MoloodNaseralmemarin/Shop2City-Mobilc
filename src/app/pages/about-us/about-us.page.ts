import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterModule,
IonBackButton,IonCard,IonCard
  ]
})
export class AboutUsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

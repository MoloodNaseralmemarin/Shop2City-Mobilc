import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard,IonCardContent]
})
export class ProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

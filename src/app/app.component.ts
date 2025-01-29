import { Platform } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet,IonContent,IonList,
  IonMenuToggle, IonItem,IonLabel,IonIcon,IonMenu,IonHeader,IonToolbar,IonTitle
 } from '@ionic/angular/standalone';
import { CurrentUser } from './shared/models/account/currentuser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonRouterOutlet,
    IonApp,IonContent,IonList,IonMenuToggle,RouterLink,
    IonItem,IonLabel,IonIcon,IonMenu,IonHeader,IonToolbar,IonTitle
  ],
})
export class AppComponent {
  user: CurrentUser = null;

  constructor(
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService,
    private router: Router
  ) {
    this.document.documentElement.dir = 'rtl';
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.authService.checkUserAuth().subscribe(res => {
        if (res.status === 'Success') {
          const user = new CurrentUser(
            res.data.userId,
            res.data.firstName,
            res.data.lastName,
            res.data.address);
          this.authService.setCurrentUser(user);
        }
      });

      this.authService.getCurrentUser().subscribe(user => {
        this.user = user;
      });

    });
  }

  logOutUser() {
    Preferences.remove({ key: 'eshop-cookie' }).then(res => {
      this.authService.setCurrentUser(null);
      this.router.navigate(['/']);
    });
  }
}

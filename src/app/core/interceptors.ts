import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

export const EshopInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService);
  const token = cookieService.get('eshop-cookie');
  
  const myRequest = req.clone({
    url: environment.apiUrl + req.url,
    headers: req.headers.append('Authorization', 'Bearer ' + token),
  });
  return next(myRequest);
};

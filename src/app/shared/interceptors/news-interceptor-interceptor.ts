import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const newsInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
    
   const baseUrl = environment.BASE_URL;
   
  if (req.url.includes('assets/')) {
    return next(req);
  }else{
   const isAbsolute = req.url.startsWith('http');    
  const apiReq = isAbsolute ? req : req.clone({url: `${baseUrl}/${req.url}`});


  return next(apiReq);

  }

};

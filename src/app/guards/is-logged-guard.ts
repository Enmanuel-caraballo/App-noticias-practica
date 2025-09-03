import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../shared/services/storage';
import { CONSTANTS } from '../constants/constants';

export const isLoggedGuard: CanActivateFn = (route, state) => {

   const storageSrv = inject(StorageService);
  const router = inject(Router);
  const auth = storageSrv.get<{uuid: string}>(CONSTANTS.AUTH);

  const url = state.url;
  const publicUrl = ['/', '/login', '/register'];

  if(url === '/login' && !auth){
    return true;
  }

  if(!auth && publicUrl.includes(url)){

    return true;
  }
  if(router.url === '/' && !auth){
    return true;
  }
    
  router.navigate(['/home']);
  return false;
/*  const auth = storageSrv.get<{uuid: string}>("AUTH");
  if(!auth){
    router.navigate(['/home']);
    
  }
  router.navigate(['/login']);
  return false;
  */
};

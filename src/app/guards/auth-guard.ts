import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../shared/services/storage';
import { CONSTANTS } from '../constants/constants';

export const authGuard: CanActivateFn = (route, state) => {
  const storageSrv = inject(StorageService);
  const router = inject(Router);
  const auth = storageSrv.get<{uuid: string}>(CONSTANTS.AUTH);
  if(!auth){
    router.navigate(['/login']);
    return false;
  }
  return true;
};

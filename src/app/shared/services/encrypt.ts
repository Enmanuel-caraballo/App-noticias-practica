import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class Encrypt {
  
  secretKey = 'EnmanuelFullStackXD';
  constructor(){};
  encrypt(value: string): string{
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  deCrypt(value: string): string{
    return CryptoJS.AES.decrypt(value, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    
  }



}

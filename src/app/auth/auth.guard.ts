import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  if (window.sessionStorage.getItem("CURR_USER")){
    console.log("checking... Logged in !");
    return true;
  }else
  {
    console.log("checking... Not Logged in !");
    return false;
  }
  
};

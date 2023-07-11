import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  curr_user? : User;
  isLogged?: boolean;

  constructor(public authservice : AuthService) { }

  ngOnInit(): void {
    // const user = window.sessionStorage.getItem("CURR_USER");
    // if (user)
    // {
    //   this.isLogged=true;
    // }
    // else{
    //   this.isLogged=false;
    // }

  }
}

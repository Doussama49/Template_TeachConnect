import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  title: string[] = ["Creez votre compte", "Connectez vous"];
  bottom_description: string[] = ["Vous avez deja un compte ? ", "Vous n'avez pas de compte ?"];
  bottom_path: string[] = ["Connectez vous ", "Inscrivez vous"];
  path: string[] = ["/users/login", "/users/create"];

  indice!: number;

  activatedRoute!: string;

  constructor(private route: ActivatedRoute, private router: Router) {
   this.getRouterPath();
   this.getTitle();
  }

  getTitle(): void {
    this.indice = this.activatedRoute == "/users/create" ? 0 : 1;
    console.log(this.indice)
  }

  getRouterPath(): void{
    this.activatedRoute = this.router.url;
    console.log(this.activatedRoute)

  }

  update(): void {
    this.getRouterPath();
    this.getTitle();
    this.router.navigate([this.path[this.indice]]);

  }
}

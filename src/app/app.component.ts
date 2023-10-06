import { Component } from '@angular/core';
import { UsuariosServiceService } from './services/usuarios-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
  public vista:number = 1;

  constructor(private consultaUsuario: UsuariosServiceService){}

  buscarUsuario(login:any):void{
      console.log(login);

      if (login != '') {
          this.consultaUsuario.usuario(login);
          this.cambiarVista(2);
      }else{
          this.cambiarVista(1);
      }
  }

  cambiarVista(dato:number):void{
      this.vista = dato;
  }
}

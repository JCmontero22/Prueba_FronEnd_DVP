import { Component, EventEmitter, Output } from '@angular/core';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

    @Output()
    public loginUsuario: EventEmitter<string> = new EventEmitter;
    public data:any[] = [];

    constructor(private listaUsuarios: UsuariosServiceService){}

    ngOnInit():void{
        this.listadoUsuarios();
    }

    listadoUsuarios(): any{
        this.listaUsuarios.getUsuarios().subscribe(data => {

            for (let i = 0; i < 10; i++) {
                this.data.push({'login': data[i].login, 'id': data[i].id})
            }
        })
    }

    selectUsuario(login: string):void{
        this.loginUsuario.emit(login);
    }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-buscador-usuario',
  templateUrl: './buscador-usuario.component.html',
  styleUrls: ['./buscador-usuario.component.css']
})
export class BuscadorUsuarioComponent {

    @Output()
    public loginUsuario: EventEmitter<string> = new EventEmitter;
    public usuario:string = '';
    data: any[] = [];

    constructor(private usuarioServicio: UsuariosServiceService){}

    buscarUsuario(){
        if (this.usuario.length == 0) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'El campo usuario esta basio',
            });
        }else{
            if (this.usuario.length < 4 || this.usuario == 'doublevpartners') {
                if (this.usuario != 'doublevpartners') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El campo no tiene la cantidad de caracteres necesarios para la busqueda',
                    });
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El usuario no es valido',
                    });
                }
            }else{
                this.loginUsuario.emit(this.usuario);
            }
        }
    }


}

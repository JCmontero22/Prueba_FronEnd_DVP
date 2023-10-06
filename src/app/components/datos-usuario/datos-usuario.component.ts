import { Component, EventEmitter, Output } from '@angular/core';
import { UsuariosServiceService } from 'src/app/services/usuarios-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent {

    @Output()
    public vistas:EventEmitter<number> = new EventEmitter;
    public data:any[]=[];

    constructor(private dataUsuarios: UsuariosServiceService){}

    ngOnInit():void{
        this.dataUsuario();
    }

    dataUsuario(){
        this.dataUsuarios.getDataUsuario().subscribe(data =>{
            console.log(data);

            this.data.push(data);
        },(error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El usuario no existe ',
            });
            this.vistas.emit(1);
        });
    }

    cambiarVista():void{
        this.vistas.emit(1);
    }
}




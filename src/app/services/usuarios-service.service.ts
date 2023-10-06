import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

    private urlApi = environment.hostApi;
    private user:string = '';
    constructor(private http: HttpClient) { }

    public getUsuarios():Observable<any>{
        return this.http.get<any>(this.urlApi);
    }

    public usuario(login: string){
        this.user = login;
    }

    public getDataUsuario():Observable<any>{
      return this.http.get<any>(this.urlApi+'/'+this.user);
    }

    

    /* public getUsuarioNombre */

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorUsuarioComponent } from './components/buscador-usuario/buscador-usuario.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { FormsModule } from '@angular/forms';
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    BuscadorUsuarioComponent,
    ListaUsuariosComponent,
    DatosUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

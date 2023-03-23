import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario.model';

import { PersonaService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  usuario: usuario = new usuario ("", "", "", "");

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}

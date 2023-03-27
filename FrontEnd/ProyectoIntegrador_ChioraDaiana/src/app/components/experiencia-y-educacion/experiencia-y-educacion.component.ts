import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/service/educacion.service';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  public educacion: Educacion[] = [];



  constructor(private educacionService: EducacionService){}
  ngOnInit(): void {
    this.getEducacion();
    
  }

public getEducacion():void {
  this.educacionService.getEducacion().subscribe({
    next: (Response:Educacion[]) => {
      this.educacion = Response;
  },
  error: (error:HttpErrorResponse) => {
    alert(error.message);
  }
})
}

}





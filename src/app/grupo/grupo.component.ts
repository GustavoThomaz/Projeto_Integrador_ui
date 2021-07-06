import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../model/Grupo';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  listaGrupos: Grupo[]

  constructor(
    private grupoService: GrupoService,
    private router: Router
  ) { }

  ngOnInit(){
    if(environment.tokenUsuario ==''){
      this.router.navigate(['/entrar'])
    }
    this.pegarTodos()
  }

  pegarTodos(){
    this.grupoService.getAllGrupo().subscribe((resp:Grupo[])=>{
      this.listaGrupos = resp
    })
  }
}

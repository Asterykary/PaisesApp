import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  capitales: Country[] = [];

  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;

    this.termino = termino;

    this.capitalService.buscarCapital(this.termino) // Servicio no va a hacer el mismo
    .subscribe((capitales) => {
      this.capitales = capitales;
      console.log(capitales);
    }, (err) =>{
      this.hayError = true;
      this.capitales = [];
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
  }

}

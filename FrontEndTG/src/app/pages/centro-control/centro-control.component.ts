import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ModosModel } from 'src/app/models/ModosModel';
import { ModosService } from 'src/app/services/modos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-centro-control',
  templateUrl: './centro-control.component.html',
})
export class CentroControlComponent implements OnInit {


  isChecked: boolean = false; 

  constructor(private modosService: ModosService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    let obs: Observable<any>[] = [];
    obs.push(this.modosService.GetModoActual());

    forkJoin(obs).subscribe({
      next: response => {
        console.log(response)
        if(response[0] == null){
          this.isChecked = false
          console.log("1")
        }
        else{
          this.isChecked = true
          console.log("2")
        }
        console.log(this.isChecked)
        // this.toastr.success(this.isChecked == true ? "Robot encendido con éxtio" : "Robot apagado con éxito");
      },
      error: err => {
        console.log(err);
        this.toastr.error(err);
      }
    });

  }

  onToggle() {
    console.log('Cambio de estado del checkbox: ', this.isChecked);

    let modo: ModosModel = {
      Id:1,
      Activo: this.isChecked
    }

    let obs: Observable<any>[] = [];
    obs.push(this.modosService.ActualizarModo(modo));

    forkJoin(obs).subscribe({
      next: response => {
        console.log(response)
        this.toastr.success(this.isChecked == true ? "Robot encendido con éxtio" : "Robot apagado con éxito");
      },
      error: err => {
        console.log(err);
        this.toastr.error(err);
      }
    });
  }

}

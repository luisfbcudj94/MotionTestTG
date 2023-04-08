import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ModosModel } from 'src/app/models/ModosModel';
import { ModosService } from 'src/app/services/modos.service';

@Component({
  selector: 'app-centro-control',
  templateUrl: './centro-control.component.html',
})
export class CentroControlComponent {


  isChecked: boolean = false; 

  constructor(private modosService: ModosService,
  ) {}

  onToggle() {
    console.log('Cambio de estado del checkbox: ', this.isChecked);

    let modo: ModosModel = {
      Id:1,
      Activo: this.isChecked
    }

    let obs: Observable<ModosModel>[] = [];
    obs.push(this.modosService.ActualizarModo(modo));

    forkJoin(obs).subscribe({
      next: response => {
        console.log(response)
        // this.spinner.hide();
      },
      error: err => {
        console.log(err);
        // this.spinner.hide();
        // this.toastr.error(err);
      }
    });
  }

}

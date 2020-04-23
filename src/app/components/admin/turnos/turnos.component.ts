import { Component, OnInit } from '@angular/core';
import { TurnosService } from '../../../services/turnos.service';


declare function sortTable(element);

declare function   showMoreInfoModal();

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  loading = false;

  turnos: any[] = [];

  turnoToShow;

  constructor(
    private turnosService: TurnosService
  ) {
    this.getTurnos();
   }

  ngOnInit() {
  }

  getTurnos() {
    this.loading = true;
    this.turnosService.getTurnos().subscribe((turnos) => {
      this.loading = false;
      this.turnos = turnos;
    });
  }

  sortBy(event) {
    // sortTable(event.target);
    // this.turnosService.getTurnosOrderedBy('turno.datos_turno.empleado' )
    //   .subscribe((res) => {
    //     console.log(res);
    //   })
  }

  // tslint:disable: radix
  verifyDate(date) {
    if (date === 'NO') {
      return false;
    } else {
      const splittedDate = date.split(':');
      const hours = parseInt(splittedDate[0]);
      const minutes = parseInt(splittedDate[1]);

      const now = new Date();

      if (hours < now.getHours()) {
        return true;
      } else if (hours === now.getHours()) {
        if (minutes < now.getMinutes()) {
          return true;
        } else if (minutes === now.getMinutes()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  openModal(turno) {
    this.turnoToShow = turno;
    console.log(turno);

    showMoreInfoModal();
  }

  getArrayFromObject(object): any {
    if (!object) {
      return [];
    }
    return Object.values(object);
  }

}

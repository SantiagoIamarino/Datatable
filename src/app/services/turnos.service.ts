import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getTurnos() {
    return this.db.list('/activos').valueChanges();
  }
}

import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Database} from "../../_interface/IMongooseSchema";

@Injectable({
  providedIn: 'root'
})
export class ResolveScheduleService implements Resolve<Array<Database.ISchedule>> {
  public schedule: Array<Database.ISchedule>;

  constructor(private httpClient: HttpClient) { }

  resolve(): Observable<Array<Database.ISchedule>> {
    return this.httpClient.get<Array<Database.ISchedule>>('schedule')
      .pipe(
        tap((response: Array<Database.ISchedule>): void => {
          this.schedule = response;
        })
      );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { baseApiURL } from '../utils/base';

import { BaseSport } from '../interfaces/sports.interface';

@Injectable({
  providedIn: 'root',
})
export class SportsService {
  $sportsData = new BehaviorSubject<BaseSport[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadBaseSportsData().subscribe((data) => {
      this.$sportsData.next(data);
    });
  }

  loadBaseSportsData(): Observable<BaseSport[]> {
    return this.httpClient
      .get(`${baseApiURL}/json/1/all_sports.php`)
      .pipe(pluck('sports'));
  }
}

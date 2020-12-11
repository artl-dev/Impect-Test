import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SportsService } from '../../services/sports.service';

import { BaseSport } from '../../interfaces/sports.interface';

@Component({
  selector: 'impect-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  $baseSportsData = new BehaviorSubject<BaseSport[]>([]);

  constructor(private sportsService: SportsService) {
    this.$baseSportsData = this.sportsService.$sportsData;
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { StandingService } from 'src/app/shared/service/standing.service';
import { League } from '../../model/League';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-serie-a',
  templateUrl: './serie-a.component.html',
  styleUrls: ['./serie-a.component.css']
})
export class SerieAComponent implements OnInit {

  SerieA: League[];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new SerieADataSource(this.dataService);
  displayedColumns = [
    'position',
    'team_name',
    'match_played',
    'won',
    'drawn',
    'lost',
    'goal_for',
    'goal_against',
    'goal_difference',
    'points'
  ];
  constructor(private dataService: StandingService) { }

  ngOnInit() {
    this.getSerieA();
  }

  getSerieA(): void {
    this.dataService.getSerieA_Standing().subscribe(sa => this.SerieA = sa);
  }

}

export class SerieADataSource extends DataSource<any> {
  constructor(private dataService: StandingService) {
    super();
  }

  connect(): Observable<League[]> {
    return this.dataService.getSerieA_Standing();
  }

  disconnect() {}

}

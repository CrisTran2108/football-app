import { Component, OnInit } from '@angular/core';
import { StandingService } from 'src/app/shared/service/standing.service';
import { League } from '../../model/League';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-la-liga',
  templateUrl: './la-liga.component.html',
  styleUrls: ['./la-liga.component.css']
})
export class LaLigaComponent implements OnInit {

  LaLiga: League[];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new LaLigaDataSource(this.dataService);
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
    this.getLaLiga();
  }

  getLaLiga(): void {
    this.dataService.getLaLiga_Standing().subscribe(laLiga => this.LaLiga = laLiga);
  }

}

export class LaLigaDataSource extends DataSource<any> {
  constructor(private datService: StandingService) {
    super();
  }

  connect(): Observable<League[]> {
    return this.datService.getLaLiga_Standing();
  }

  disconnect() {}

}

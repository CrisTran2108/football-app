import { Component, OnInit } from '@angular/core';
import { StandingService } from 'src/app/shared/service/standing.service';
import { League } from '../../model/League';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-bundesliga',
  templateUrl: './bundesliga.component.html',
  styleUrls: ['./bundesliga.component.css']
})
export class BundesligaComponent implements OnInit {

  Bundesliga: League[];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new BundesligaDataSource(this.dataService);
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
    this.getBundesliga();
  }

  getBundesliga(): void {
    this.dataService.getBundesliga_Standing().subscribe(b => this.Bundesliga = b);
  }

}

export class BundesligaDataSource extends DataSource<any> {
  constructor(private dataService: StandingService) {
    super();
  }

  connect(): Observable<League[]> {
    return this.dataService.getBundesliga_Standing();
  }

  disconnect() {}

}

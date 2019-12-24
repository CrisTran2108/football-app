import { Component, OnInit } from '@angular/core';
import { StandingService } from 'src/app/shared/service/standing.service';
import { League } from '../../model/League';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.css']
})
export class PremierLeagueComponent implements OnInit {

  PremierLeague: League[];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new PremierLeagueDataSource(this.dataService);
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
    this.getPremierLeague();
  }

  getPremierLeague() {
    this.dataService.getPremierLeague_Standing()
      .subscribe(pl => this.PremierLeague = pl);
    ;

  }
}

export class PremierLeagueDataSource extends DataSource<any> {
  constructor(private dataService: StandingService) {
    super();
  }

  connect(): Observable<League[]> {
    return this.dataService.getPremierLeague_Standing();
  }

  disconnect() {}

}

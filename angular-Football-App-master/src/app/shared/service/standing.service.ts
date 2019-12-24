import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { League } from 'src/app/model/League';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StandingService {
  apikey = '3478c0f222b50650952819f07a277e21199aa1db214536686bf4aab647cf6936';
  constructor(private httpClient: HttpClient) { }

  // Premier League
  getPremierLeague_Standing(): Observable<League[]> {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=` + this.apikey).pipe(
      map(res => res.sort(function(a1: League, a2: League) {
        // tslint:disable-next-line: radix
        return parseInt(a1.overall_league_position) - parseInt(a2.overall_league_position);
      }))
  );

  }
  // La Liga
  getLaLiga_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=109&APIkey=` + this.apikey).pipe(
      map(res => res.sort(function(a1: League, a2: League) {
        // tslint:disable-next-line: radix
        return parseInt(a1.overall_league_position) - parseInt(a2.overall_league_position);      }))
  );
  }

  // Bundesliga
  getBundesliga_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=117&APIkey=` + this.apikey).pipe(
      map(res => res.sort(function(a1: League, a2: League) {
        // tslint:disable-next-line: radix
        return parseInt(a1.overall_league_position) - parseInt(a2.overall_league_position);      }))
  );
  }

  // Serie A
  getSerieA_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=79&APIkey=` + this.apikey).pipe(
      map(res => res.sort(function(a1: League, a2: League) {
        // tslint:disable-next-line: radix
        return parseInt(a1.overall_league_position) - parseInt(a2.overall_league_position);      }))
  );
  }

  // Ligue 1
  getLigue1_Standing() {
    return this.httpClient.get<League[]>(`https://apifootball.com/api/?action=get_standings&league_id=127&APIkey=` + this.apikey).pipe(
      map(res => res.sort(function(a1: League, a2: League) {
        console.log(res);
        // tslint:disable-next-line: radix
        return parseInt(a1.overall_league_position) - parseInt(a2.overall_league_position);      }))
  );
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fixture } from 'src/app/model/fixture';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private httpClient: HttpClient) {}

  getMatch_Fixtures(): Observable<Fixture[]> {
    return this.httpClient.get<Fixture[]>(
      // tslint:disable-next-line: max-line-length
      `https://apiv2.apifootball.com/?action=get_events&from=2019-12-01&to=2019-12-03&league_id=148&APIkey=9e3aa3ccb294b5e9ba63079f27e2175de5f72159741d7440d7df16376217e94f`
    );
  }
}

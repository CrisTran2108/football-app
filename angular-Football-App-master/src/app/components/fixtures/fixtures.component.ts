import { Component, OnInit } from '@angular/core';
import { Fixture } from 'src/app/model/fixture';
import { FixtureService } from 'src/app/shared/service/fixture.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  MatchInfo: Fixture[];
  constructor(private fixtureService: FixtureService) { }

  ngOnInit() {
    this.getFixtures();
  }


  getFixtures() {
    this.fixtureService.getMatch_Fixtures()
      .subscribe(
      (res) => {
        // Khi api trả về KQ thành công.
        // Gán giá trị trả về từ API cho biến
        this.MatchInfo = res;
        console.log(this.MatchInfo);
      },
      (err) => {
        // Khi tác vụ thực hiện ko thành công.
        alert(`Tìm kiếm không thành công: ${err}`);
      },
      () => {
        // Khi tác vụ thực hiện xong (có thể thành công hoặc không nhưng đều phải đi qua đây).
        console.log('Tìm kiếm đã thực hiện.');
      }
    );
  }
}

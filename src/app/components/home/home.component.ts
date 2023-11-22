import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MasjidService } from 'src/app/services/masjid-service.service';
import { EventsService } from 'src/app/services/events.service';
import { Subscription, Observable } from 'rxjs';
import { program } from '../programs/program';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() masjidInfo = {};
  masjid: any | undefined;
  sub!: Subscription;
  private masjidDataUrl = 'http://localhost:3000/api/v1/masjid-data/get';
  private eventsUrl = 'http://localhost:3000/api/v1/events/get';
  todayDate: Date = new Date();
  programs: program[] = [];
  constructor(
    private masjidService: MasjidService,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    let headers = new HttpHeaders();
    this.sub = this.masjidService
      .getMasjid(this.masjidDataUrl, headers)
      .subscribe({
        next: (data) => {
          this.masjid = data;
        },
        error: (err) => console.log(err),
      });
    this.sub = this.eventsService.getEvents(this.eventsUrl, headers).subscribe({
      next: (data) => {
        let name, date, time, dateTime;
        for (let e = 0; e < data.length; e++) {
          name = data[e].name;
          dateTime = data[e].date.split(',');
          date = dateTime[0];
          time = dateTime[1];
          time = time.replace(time.substring(5, 8), '');
          let event = {
            name: name,
            date: date,
            time: time,
          };
          console.log(event);
          this.programs.push(event);
        }
        console.log(this.programs);
      },
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MasjidService } from 'src/app/services/masjid-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.css'],
})
export class TimeBlockComponent implements OnInit {
  prayerTimes: any;
  masjid: any | undefined;
  constructor(private masjidService: MasjidService) {}
  sub!: Subscription;
  private apiUrl = 'https://api.masjidiapp.com/v2/masjids/3462';
  private apiKey = '123-test-key';
  ngOnInit(): void {
    let headers = new HttpHeaders();
    headers = headers.append('apikey', this.apiKey);
    this.sub = this.masjidService.getMasjid(this.apiUrl, headers).subscribe({
      next: (data) => (
        (this.masjid = data),
        (this.prayerTimes = [
          {
            name: 'FAZR',
            adhan: this.masjid.fajr_start_time,
            iqama: this.masjid.fajr_iqama_time,
          },
          {
            name: 'DUHR',
            adhan: this.masjid.zuhr_start_time,
            iqama: this.masjid.zuhr_iqama_time,
          },
          {
            name: 'ASR',
            adhan: this.masjid.asr_start_time,
            iqama: this.masjid.asr_iqama_time,
          },
          {
            name: 'MAGRIB',
            adhan: this.masjid.magrib_start_time,
            iqama: this.masjid.magrib_iqama_time,
          },
          {
            name: 'ISHA',
            adhan: this.masjid.isha_start_time,
            iqama: this.masjid.isha_iqama_time,
          },
          {
            name: 'JUMUA',
            adhan: this.masjid.jumma1_azan,
            iqama: this.masjid.jumma1_iqama,
          },
        ])
      ),
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

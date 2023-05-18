import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MasjidService } from 'src/app/services/masjid-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() masjidInfo = {};
  masjid: any | undefined;
  sub!: Subscription;
  private apiUrl = 'https://api.masjidiapp.com/v2/masjids/3462';
  private apiKey = '123-test-key';
  todayDate: Date = new Date();
  constructor(private masjidService: MasjidService) {}

  ngOnInit(): void {
    let headers = new HttpHeaders();
    headers = headers.append('apikey', this.apiKey);
    this.sub = this.masjidService.getMasjid(this.apiUrl, headers).subscribe({
      next: (data) => (this.masjid = data),
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

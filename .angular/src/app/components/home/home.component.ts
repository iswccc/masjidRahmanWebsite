import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MasjidService } from 'src/app/services/masjid-service.service';
import { Subscription } from 'rxjs';
import { program } from '../programs/program';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() masjidInfo = {};
  masjid: any | undefined;
  sub!: Subscription;
  private apiUrl = 'http://localhost:3000/api/data';
  todayDate: Date = new Date();

  programs: program[] = [
    {
      name: 'Family Night',
      date: 'January 7th, 2023',
      time: '4:00 PM',
    },
    {
      name: 'Kids Night',
      date: 'January 7th, 2023',
      time: '4:00 PM',
    },
    {
      name: 'Hena Night',
      date: 'January 7th, 2023',
      time: '4:00 PM',
    },
  ];
  constructor(private masjidService: MasjidService) {}

  ngOnInit(): void {
    let headers = new HttpHeaders();
    this.sub = this.masjidService.getMasjid(this.apiUrl, headers).subscribe({
      next: (data) => {
        this.masjid = data;
        //console.log(this.masjid);
      },
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

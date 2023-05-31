import { Component } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MasjidService } from 'src/app/services/masjid-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'masjidRahmanWebsite';
  masjid: any | undefined;
  sub!: Subscription;
  private apiUrl = 'http://localhost:3000/api/data';
  constructor(private masjidService: MasjidService) {}

  ngOnInit(): void {
    let headers = new HttpHeaders();
    this.sub = this.masjidService.getMasjid(this.apiUrl, headers).subscribe({
      next: (data) => (this.masjid = data),
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

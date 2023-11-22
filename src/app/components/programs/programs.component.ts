import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { program } from './program';
import { Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent implements OnInit {
  sub!: Subscription;
  private apiUrl = 'http://localhost:3000/api/v1/events/get';
  //programs: program[] = [];
  programs: any | undefined;
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    let headers = new HttpHeaders();
    this.sub = this.eventsService.getEvents(this.apiUrl, headers).subscribe({
      next: (data) => {
        this.programs = data;
        console.log(this.programs);
      },
      error: (err) => console.log(err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

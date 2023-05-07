import { Component, OnInit } from '@angular/core';
import { program } from './program';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}

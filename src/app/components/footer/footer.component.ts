import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  noEvent = false;
  programs: any = [
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

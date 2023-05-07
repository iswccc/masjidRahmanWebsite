import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-block',
  templateUrl: './time-block.component.html',
  styleUrls: ['./time-block.component.css'],
})
export class TimeBlockComponent implements OnInit {
  prayerTimes: any = [
    {
      name: 'FAZR',
      adhan: '02:40 AM',
      iqama: '05:40 AM',
    },
    {
      name: 'DUHR',
      adhan: '12:40 AM',
      iqama: '01:00 AM',
    },
    {
      name: 'ASR',
      adhan: '05:40 pM',
      iqama: '06:00 AM',
    },
    {
      name: 'MAGRIB',
      adhan: '07:40 AM',
      iqama: '08:00 AM',
    },
    {
      name: 'ISHA',
      adhan: '09:40 AM',
      iqama: '10:00 AM',
    },
    {
      name: 'JUMUA',
      adhan: '1:40 PM',
      iqama: '2:00 PM',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
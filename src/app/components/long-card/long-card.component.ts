import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.css']
})
export class LongCardComponent implements OnInit {
  @Input()
  photoCover:string = "";

  @Input()
  cardTitle:string = "";

  @Input()
  cardDescription:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

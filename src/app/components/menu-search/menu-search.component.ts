import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.css']
})
export class MenuSearchComponent implements OnInit {
  inputValue = 'Search...';

  limparValor() {
    if(this.inputValue === 'Search...') {
      this.inputValue = '';
    }
  }

  restaurarValor() {
    if(this.inputValue === '') {
      this.inputValue = 'Search...';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

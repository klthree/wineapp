import { Component, OnInit } from '@angular/core';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  faWineGlass = faWineGlass;

  ngOnInit(): void {
  }

}

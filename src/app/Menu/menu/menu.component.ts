import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu-model';
import { MenuDataService } from '../menu-data.service';
import { Day } from 'src/app/Day/day-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() public menu: Menu;
  @Input() public inDay: boolean;
  @Input() public day: Day;

  constructor(private menuDataService: MenuDataService, private _router: Router) { }

  ngOnInit(): void {

  }

  get allergies(){
    return this.menu.allergies
  }

  get url(){
    return this._router.url;
  }

  deleteMenu(){
    this.menuDataService.deleteMenu(this.menu);
  }

}

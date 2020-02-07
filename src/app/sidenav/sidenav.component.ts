import { Component } from '@angular/core';
import { GrupoMenuModel } from './grupo-menu.model';
import { ItensMenu} from './itens-menu';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  gruposMenu: GrupoMenuModel[] = ItensMenu;

  constructor() { }

}

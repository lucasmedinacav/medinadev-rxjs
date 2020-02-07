import { GrupoMenuModel } from './grupo-menu.model';

export const ItensMenu: GrupoMenuModel[] = [
    {
        nome: 'Creation Operators',
        host: 'creation-operators',
        itensMenu: [
          { nome: 'of', host: '/of' },
          { nome: 'empty',  host: '/empty' }
      ]
    }
];



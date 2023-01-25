import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path: '', redirectTo: 'autocomplete', pathMatch:'full'},
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'card', component: CardComponent},
  {path: 'form', component: FormComponent},
  {path: 'list', component: ListComponent},
  {path: 'table', component:  TableComponent},
  {path: 'tree', component: TreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

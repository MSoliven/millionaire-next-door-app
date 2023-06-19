import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MillionaireNextDoorComponent } from './calculators/millionaire-next-door/millionaire-next-door.component';

const routes: Routes = [
  { path: '', component: MillionaireNextDoorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

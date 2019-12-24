import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,

} from '@angular/material';

const modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})

export class MaterialModule {}

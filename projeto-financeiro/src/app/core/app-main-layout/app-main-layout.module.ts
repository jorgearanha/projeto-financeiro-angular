import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [AppLayoutComponent],
  exports: [AppLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatButtonModule
  ]
})
export class AppMainLayoutModule { }

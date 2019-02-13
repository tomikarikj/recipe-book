import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [CommonModule, NgbModule, AppRoutingModule],
  exports: [AppRoutingModule, HeaderComponent]
})
export class CoreModule {}

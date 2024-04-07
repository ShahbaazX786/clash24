import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { LandingModule } from 'src/app/landing/landing.module';
import { FeatureModule } from 'src/app/feature/feature/feature.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LayoutComponent],
  imports: [CommonModule, RouterModule, LandingModule, FeatureModule],
  exports:[LayoutComponent]
})
export class LayoutModule {}

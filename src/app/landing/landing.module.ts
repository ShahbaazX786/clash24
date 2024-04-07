import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { FeatureModule } from '../feature/feature/feature.module';

@NgModule({
  declarations: [HeroComponent],
  imports: [CommonModule, FeatureModule],
})
export class LandingModule {}

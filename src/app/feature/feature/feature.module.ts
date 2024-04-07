import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

const PrimeModules = [RippleModule, ButtonModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeModules],
  exports: [PrimeModules],
})
export class FeatureModule {}

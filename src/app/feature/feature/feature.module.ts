import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';

const PrimeModules = [RippleModule, ButtonModule, MenubarModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimeModules],
  exports: [PrimeModules],
})
export class FeatureModule {}

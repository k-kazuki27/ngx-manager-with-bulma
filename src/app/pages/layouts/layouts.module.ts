import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, BreadcrumbComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, SideNavComponent, BreadcrumbComponent]
})
export class LayoutsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArrowMenuComponent } from './arrow-menu/arrow-menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    BreadcrumbComponent,
    ArrowMenuComponent
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    SideNavComponent,
    BreadcrumbComponent,
    ArrowMenuComponent
  ]
})
export class LayoutsModule {}

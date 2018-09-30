import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from '../messages/messages.component';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { BlogComponent } from '../blog/blog.component';
import { ComponentGuardGuard } from '../component-guard.guard';

const apRoutes: Routes = [
  {path: 'blog', component: BlogComponent, canDeactivate: [ComponentGuardGuard] },
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  providers: [
    ComponentGuardGuard
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(apRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

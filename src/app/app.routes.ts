import {RouterModule, Routes} from '@angular/router';
import { LegalNotice } from './legal-notice/legal-notice'
import { MainPage } from './main-page/main-page';
import {NgModule} from '@angular/core';


export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'legal-notice', component: LegalNotice }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled', // 👈 wichtig!
      scrollOffset: [0, 80], // optional: damit dein Header nichts überlappt
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

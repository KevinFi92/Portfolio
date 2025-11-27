import {RouterModule, Routes} from '@angular/router';
import {LegalNotice} from './legal-notice/legal-notice'
import {MainPage} from './main-page/main-page';
import {NgModule} from '@angular/core';
import {PrivacyPolicy} from './privacy-policy/privacy-policy';


export const routes: Routes = [
  {path: '', component: MainPage},
  {path: 'legal-notice', component: LegalNotice},
  {path: 'privacy-policy', component: PrivacyPolicy}];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TeamComponent } from './team/team.component';
import { BackboneComponent } from './backbone/backbone.component';
import { DifferenceComponent } from './difference/difference.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { PmsfaqComponent } from './pmsfaq/pmsfaq.component';
import { ResoursesComponent } from './resourses/resourses.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InvestmentProcessComponent } from './investment-process/investment-process.component';
import { HowToInvestWithUsComponent } from './how-to-invest-with-us/how-to-invest-with-us.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { GrievancesComponent } from './grievances/grievances.component';
import { InvestorFaqComponent } from './investor-faq/investor-faq.component';
import { LoginInComponent } from './login-in/login-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'backbone', component: BackboneComponent },
  { path: 'difference', component: DifferenceComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'disclosure', component: DisclosureComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'inspiration', component: InspirationComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'pmsfaq', component: PmsfaqComponent },
  { path: 'resourses', component: ResoursesComponent },
  { path: 'risk-management', component: RiskManagementComponent },
  { path: 'investment-process', component: InvestmentProcessComponent },
  { path: 'how-to-invest-with-us', component: HowToInvestWithUsComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'grievances', component: GrievancesComponent },
  { path: 'investor-faq', component: InvestorFaqComponent },
  { path: 'login-in', component: LoginInComponent },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

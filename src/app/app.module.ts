import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    TeamComponent,
    BackboneComponent,
    DifferenceComponent,
    DisclaimerComponent,
    DisclosureComponent,
    FaqsComponent,
    InspirationComponent,
    PhilosophyComponent,
    PmsfaqComponent,
    ResoursesComponent,
    RiskManagementComponent,
    NotFoundComponent,
    InvestmentProcessComponent,
    HowToInvestWithUsComponent,
    DownloadsComponent,
    GrievancesComponent,
    InvestorFaqComponent,
    LoginInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

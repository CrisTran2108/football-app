import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { PremierLeagueComponent } from './league/premier-league/premier-league.component';
import { LaLigaComponent } from './league/la-liga/la-liga.component';
import { BundesligaComponent } from './league/bundesliga/bundesliga.component';
import { SerieAComponent } from './league/serie-a/serie-a.component';
import { LigueOneComponent } from './league/ligue-one/ligue-one.component';

import { StandingService } from './shared/service/standing.service';
import { FixturesComponent } from './components/fixtures/fixtures.component';

const components = [
  AppComponent,
  HeaderComponent,
  HomeComponent,
  AboutComponent,
  PremierLeagueComponent,
  LaLigaComponent,
  BundesligaComponent,
  SerieAComponent,
  LigueOneComponent
];

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MaterialModule,
  HttpClientModule
];

@NgModule({
  declarations: [...components, FixturesComponent],
  imports: [...modules],
  providers: [StandingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

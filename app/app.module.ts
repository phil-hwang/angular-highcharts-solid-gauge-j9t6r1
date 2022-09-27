import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import solidGauge from 'highcharts/modules/solid-gauge.src';
import { AppComponent } from './app.component';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [more, solidGauge];
}


@NgModule({
  imports: [BrowserModule, ChartModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } // add as factory to your providers
  ]
})
export class AppModule { }

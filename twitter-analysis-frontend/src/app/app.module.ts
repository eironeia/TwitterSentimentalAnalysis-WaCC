import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { TweetsValuesCounterComponent } from './tweets-values-counter/tweets-values-counter.component';
import { TweetService } from './tweet.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterButtonsComponent } from './filter-buttons/filter-buttons.component';
import { TweetsTableComponent } from './tweets-table/tweets-table.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetsValuesCounterComponent,
    SearchBarComponent,
    FilterButtonsComponent,
    TweetsTableComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FlexLayoutModule,
    HttpModule,
    ChartsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
  ],
  providers: [TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

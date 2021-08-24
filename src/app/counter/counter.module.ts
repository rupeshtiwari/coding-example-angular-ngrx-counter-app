import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { CounterComponent } from "./counter/counter.component";
import * as fromCounters from "./reducers";

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCounters.countersFeatureKey,
      fromCounters.reducers
    )
  ],
  exports: [CounterComponent]
})
export class CounterModule {}

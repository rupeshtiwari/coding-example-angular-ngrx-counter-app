import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { increment, decrement, reset } from "../actions";
import * as fromCounter from "../reducers";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<fromCounter.State>) {}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(fromCounter.getCount));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}

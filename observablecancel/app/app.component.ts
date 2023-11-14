import { Component, OnDestroy } from '@angular/core';
import { CancellableService } from './cancellable.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnDestroy {
  data!: string;
  private destroy$: Subject<void> = new Subject();

  constructor(private cancellableService: CancellableService) {}

  fetchData(): void {
    this.cancellableService
      .fetchData()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.data = result;
      });
  }

  cancelRequest(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


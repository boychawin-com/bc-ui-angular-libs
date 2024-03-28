import { Directive, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Directive({
  selector: '[mcLoading]'
})
export class LoadingDirective implements OnInit, OnChanges {
  @Input()
  mcLoading: Promise<any> | Promise<any>[] | Observable<any> | Observable<any>[] | undefined;

  nativeElement: HTMLInputElement;
  loadingRef: any;

  constructor(
    private elementRef: ElementRef
  ) {
    this.nativeElement = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.onInitLoading(this.mcLoading);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mcLoading'].currentValue) {
      this.onInitLoading(changes['mcLoading'].currentValue);
    }
  }

  onInitLoading(mcLoading: any) {
    if (!mcLoading) {
      return;
    }

    if (this.loadingRef) {
      this.loadingRef.remove();
    }

    this.loadingRef = document.createElement('div');
    this.loadingRef.className = 'loading';

    this.nativeElement.style.display = 'none';
    this.nativeElement.insertAdjacentElement('beforebegin', this.loadingRef);
    this.getPromiseAll()
      .then(() => Promise.resolve())
      .catch(() => Promise.resolve())
      .then(() => {
        this.loadingRef.remove();
        this.nativeElement.style.display = 'block';
      });
  }

  getPromiseAll(): Promise<any> {
    const promiseAll = [];
    if (this.mcLoading instanceof Array) {
      (this.mcLoading as Array<any>).forEach((load: any) => {
        promiseAll.push(this.hanndleLoad(load));
      });
    } else {
      promiseAll.push(this.hanndleLoad(this.mcLoading as any));
    }
    return Promise.all(promiseAll);
  }

  hanndleLoad(load: Promise<any>): Promise<any> {
    return load;
  }

}

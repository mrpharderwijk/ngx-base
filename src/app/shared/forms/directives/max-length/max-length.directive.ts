import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Limits the amount of text by the given value
 * Works just like the native HTML maxlength, but since there is a
 * bug with Reactive forms & Angular Ivy we can't use this. See bug report:
 * https://github.com/angular/angular/issues/30784
 */
@Directive({
  selector: '[maxLength]',
})
export class MaxLengthDirective {
  lastValue: string;

  constructor(public ref: ElementRef) {}

  @HostListener('input', ['$event']) onInput($event): void {
    const currentLength = $event.target.value.length;

    // const end = $event.target.selectionEnd;
    // $event.target.value = $event.target.value.toUpperCase();
    // $event.target.setSelectionRange(start, end);
    // $event.preventDefault();

    // if (
    //   !this.lastValue ||
    //   (this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value)
    // ) {
    //   this.lastValue = this.ref.nativeElement.value = $event.target.value;
    //   // Propagation
    //   const evt = document.createEvent('HTMLEvents');
    //   evt.initEvent('input', false, true);
    //   $event.target.dispatchEvent(evt);
    // }
  }
}

import {
  Directive,
  Input,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BooleanFieldValue } from '../../../common/decorators/boolean-field-value.decorator';

@Directive({
  selector: '[focus]',
})
export class FocusDirective implements AfterViewInit, OnChanges {
  @Input() @BooleanFieldValue() focus: boolean;

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.focus) {
      this.element.nativeElement.focus();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.focus.currentValue) {
      setTimeout(() => {
        this.element.nativeElement.focus();
      }, 200);
    }
  }
}

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/**
 * COMMON COMPONENTS
 */
// import { } from './common/components';
const commonComponents = [];

/**
 * COMMON DIRECTIVES
 */
import { ClickOutsideDirective } from './common/directives';
const commonDirectives = [ClickOutsideDirective];

/**
 * FORM DIRECTIVES
 */
import {
  EmailDirective,
  FocusDirective,
  LowerCaseDirective,
  UpperCaseDirective,
  DisableControlDirective,
  SelectOnClickDirective,
  MaxLengthDirective,
} from './forms/directives';
const formDirectives = [
  EmailDirective,
  FocusDirective,
  LowerCaseDirective,
  UpperCaseDirective,
  DisableControlDirective,
  SelectOnClickDirective,
  MaxLengthDirective,
];

/**
 * FORM COMPONENTS
 */
// import { } from './forms/components';
const formComponents = [];

/**
 * FORM PIPES
 */
import { HighlightPipe } from './forms/pipes/highlight.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule],
  providers: [],
  declarations: [
    HighlightPipe,
    ...commonComponents,
    ...commonDirectives,
    ...formComponents,
    ...formDirectives,
  ],
  exports: [
    HighlightPipe,
    ...commonComponents,
    ...commonDirectives,
    ...formComponents,
    ...formDirectives,
  ],
})
export class SharedModule {}

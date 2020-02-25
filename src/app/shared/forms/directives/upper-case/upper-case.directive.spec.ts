import { UpperCaseDirective } from './upper-case.directive';

describe('UpperCaseDirective', () => {
  it('should create an instance', () => {
    const directive = new UpperCaseDirective(null);
    expect(directive).toBeTruthy();
  });
});

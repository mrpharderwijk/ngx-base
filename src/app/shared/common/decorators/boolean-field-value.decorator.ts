declare var Symbol: any;

/**
 * Annotation Factory that allows HTML style boolean attributes. For example,
 * a field declared like this:
 * @Component({ selector: 'component' }) class MyComponent {
 *   @Input() @BooleanFieldValue() myField: boolean;
 * }
 *
 * You could set it up this way:
 *   <component myField>
 * or:
 *   <component myField="">
 *
 * It will then convert the myField input to a boolean value
 */
function booleanFieldValueFactory(): Function {
  return function booleanFieldValueMetadata(target: any, key: string): void {
    const defaultValue = target[key];

    // Use a fallback if Symbol isn't available.
    const localKey = Symbol ? Symbol(key) : `${key}`;
    target[localKey] = defaultValue;
    Object.defineProperty(target, key, {
      get(): boolean {
        return this[localKey];
      },
      set(value: boolean): void {
        this[localKey] = value != null && `${value}` !== 'false';
      },
    });
  };
}
export { booleanFieldValueFactory as BooleanFieldValue };

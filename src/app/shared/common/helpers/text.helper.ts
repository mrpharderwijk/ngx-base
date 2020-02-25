/**
 * @TextHelper
 * Helper class to help with textual tranformations
 */
export class TextHelper {
  /**
   * Capitalizes every word of a given string
   * @param string
   */
  static capitalize(string: string): string {
    return string && string !== '' ? string.replace(/^\w/, c => c.toUpperCase()) : null;
  }
}

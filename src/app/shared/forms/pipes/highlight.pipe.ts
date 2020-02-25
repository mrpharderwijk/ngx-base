import { PipeTransform, Pipe } from '@angular/core';

/**
 * HiglightPipe
 * This pipe takes a given text and search input and highlights the part
 * in the text that the search input matches
 *
 * example:
 * text = 'Hello world'
 * search = 'Hell'
 * outputs `<strong class="highlight">Hell</strong>o world`
 */
@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    search = search || '';
    let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

    pattern = pattern
      .split(' ')
      .filter(t => {
        return t.length > 0;
      })
      .join('|');
    const regex = new RegExp(pattern, 'gi');

    return search
      ? text.replace(regex, match => `<strong class="highlight">${match}</strong>`)
      : text;
  }
}

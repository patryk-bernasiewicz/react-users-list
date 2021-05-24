import { normalizedIncludes } from './normalizedIncludes';

describe('normalizedInclude function', () => {
  it('returns false if only one string is provided', () => {
    expect(
      normalizedIncludes('foo')
    ).toBe(false);
  });

  it('returns true if string can be found inside a collection', () => {
    expect(
      normalizedIncludes('foo', 'foobar', 'lorem')
    ).toBe(true);
  });

  it('returns value with indefinite amount of strings', () => {
    expect(
      normalizedIncludes('foo', 'bar', 'lorem', 'ipsum', 'dolor', 'foobar')
    ).toBe(true);
  });

  it('returns false if string is not inside a collection', () => {
    expect(
      normalizedIncludes('bar', 'foo', 'ipsum')
    ).toBe(false);
  });
});
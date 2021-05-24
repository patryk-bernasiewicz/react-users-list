/**
 * Returns true if `str` is found in any of the following strings. Case-insensitive.
 * @param str String to search
 * @param fields Collection of strings to search in
 * @returns boolean
 */
export function normalizedIncludes(str: string, ...fields: string[]): boolean {
  return fields.some((value: string) =>
    value.toLowerCase().includes(str.toLowerCase()));
}

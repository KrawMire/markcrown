/**
 * Parser for certain element
 */
export default interface ElementParser {
  /**
   * Parse source element code to target representation
   * @param source Source element text
   */
  parse(source: string): string;
}
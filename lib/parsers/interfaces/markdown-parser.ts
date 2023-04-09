/**
 * Parser for certain element
 */
export default interface MarkdownParser {
  /**
   * Parse source Markdown text to target representation
   * @param source Source Markdown text
   */
  parse(source: string): string;
}
import MarkdownParser from "@parsers/interfaces/markdown-parser";
import ElementParsersFactory from "@factories/element-parsers-factories/interfaces/element-parsers.factory";

/**
 * Default parser for Markdown
 */
export default class DefaultMarkdownParser implements MarkdownParser {
  private elementParserFactory: ElementParsersFactory;

  /**
   * Constructor of parser from Markdown language to HTML
   * @param elementParserFactory Factory of elements parsers
   */
  constructor(elementParserFactory: ElementParsersFactory) {
    this.elementParserFactory = elementParserFactory;
  }

  /**
   * Parse given source Markdown text from constructor
   * to HTML representation
   * @param source Source Markdown text
   */
  public parse(source: string): string {
    return "result";
  }
}
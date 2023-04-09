import MarkdownParser from "@parsers/interfaces/markdown-parser";
import DefaultMarkdownParser from "@parsers/markdown-parser";
import ElementParsersFactory from "@factories/element-parsers-factories/interfaces/element-parsers.factory";
import { TargetType } from "@lib-types/parser-type";
import { ToHtmlParsersFactory } from "@factories/element-parsers-factories/to-html.parsers-factory";

/**
 * Factory for creating new instances
 * of Markdown source text parsers
 */
export class MarkdownParserFactory {
  public static create(parserType: TargetType): MarkdownParser {
    let elementsParsersFactory: ElementParsersFactory;

    switch (parserType) {
      case TargetType.Html:
        elementsParsersFactory = new ToHtmlParsersFactory();
        break;
      default:
        throw new Error(`Invalid parser type "${parserType}!"`);
    }

    return new DefaultMarkdownParser(elementsParsersFactory);
  }
}
import ElementParsersFactory from "@factories/element-parsers-factories/interfaces/element-parsers.factory";
import ElementParser from "@parsers/interfaces/element-parser";
import { ElementType } from "@lib-types/element-type";
import { HeaderParser } from "@parsers/html-parsers/header.parser";

/**
 * Factory of parsers from Markdown to HTML elements
 */
export class ToHtmlParsersFactory implements ElementParsersFactory {
  create(elementType: ElementType): ElementParser {
    switch (elementType) {
      case ElementType.Header:
        return new HeaderParser();
      default:
        throw new Error(`Invalid element type "${elementType}"!`);
    }
  }
}
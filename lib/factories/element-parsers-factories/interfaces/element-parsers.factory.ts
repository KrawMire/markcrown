import ElementParser from "@parsers/interfaces/element-parser";
import { ElementType } from "@lib-types/element-type";

/**
 * Factory for creating new instances
 * of element Markdown source text
 */
export default interface ElementParsersFactory {
  /**
   * Create new instance of element parser
   * @param elementType Type of an element to be parsed
   */
  create(elementType: ElementType): ElementParser;
}
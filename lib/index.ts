import { MarkdownParserFactory } from "@factories/markdown-parser.factory";
import { TargetType } from "@lib-types/parser-type";

/**
 * Parse source Markdown text to HTML representation
 * @param markdown Source Markdown text
 */
export function parseMarkdownToHtml(markdown: string): string {
  const parser = MarkdownParserFactory.create(TargetType.Html);
  return parser.parse(markdown);
}
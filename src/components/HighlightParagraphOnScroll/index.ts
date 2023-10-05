export { default as HighlightParagraphOnScroll } from './HighlightParagraphOnScroll';

export interface IHighlightParagraphOnScrollProps {
	paragraph: string;

	// The height from the top of the container when the highlighting starts
	// In pixel (px). 
	readerLineOffsetHeight?: number; 

	className?: string;
	paragraphClassName?: string;
	highlightedCharClassName?: string;
};
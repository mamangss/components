import { useState } from 'react';
import { IHighlightParagraphOnScrollProps } from '.';
import styles from './HighlightParagraphOnScroll.module.scss';

const HighlightParagraphOnScroll: React.FC<IHighlightParagraphOnScrollProps> = ({
	paragraph = '',
	readerLineOffsetHeight = 0,
	className = '',
	paragraphClassName = '',
	highlightedCharClassName = ''
}) => {

	const [lastHighlightedChar, setLastHighlightedChar] = useState<number>(0);

	const handleScroll = () => {
		var lastReaderLine: number = -1;
		var lastCharKey: number = -1;
		const chars = paragraph.split('');

		const scrollContainer = document.querySelector('#highlightParagraphOnScroll');
		const scrollRect = scrollContainer?.getBoundingClientRect();
		const readerLine: number = Number(scrollRect?.top) + readerLineOffsetHeight;

		chars.some((char, key) => {
			const charElement = document.querySelector(`#char-${key}`);
			const charRect = charElement?.getBoundingClientRect();

			// Percentage of the char's position over the scroll's width
			const charWidthToContainerWidthPercentage = 100 - ((Number(scrollRect?.right) - Number(charRect?.right)) / Number(scrollRect?.width) * 100);

			// Percentage of the reader line's y-axis over the char's height
			const readerLineToCharHeightPercentage = (Number(scrollRect?.y) - Number(charRect?.y) + readerLineOffsetHeight) / Number(charRect?.height) * 100;

			// If the char's top is above or on the reader line,
			// and char's left is within the chars' height and container's width 
			// if (Number(charRect?.top) <= readerLine && charWidthToContainerWidthPercentage <= readerLineToCharHeightPercentage) {
			if (Number(charRect?.top) <= readerLine) {

				if (lastReaderLine != readerLine) {
					lastReaderLine = readerLine;
					lastCharKey = key;

				} else if (charWidthToContainerWidthPercentage <= readerLineToCharHeightPercentage) {
					lastCharKey = key;
				}

				return false;
			}

			return true;
		});

		setLastHighlightedChar(lastCharKey);
	};

	return (
		<div 
			id={'highlightParagraphOnScroll'}
			className={`${styles.highlightParagraphOnScroll} ${className}`}
			onScroll={handleScroll}
		>

			<div className={`${styles.paragraph} ${paragraphClassName}`}>
				{paragraph.split('').map((char, key) => (
					<span 
						key={key}
						id={`char-${key}`}
						className={
							`${styles.char} ` +
							(lastHighlightedChar >= key ? `${styles.highlight} ${highlightedCharClassName}` : '')
						}
					>
						{char}
					</span>
				))}
			</div>

		</div>
	);
};

export default HighlightParagraphOnScroll;